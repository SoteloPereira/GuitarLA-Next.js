import { useEffect, useState } from "react"
import Layout from "../components/layout"
import styles from '../styles/carrito.module.css'
import iconoEliminar from '../public/img/eliminar.png'
import Image from "next/image"


//este carrito, lo obtenemos del context global definido en _app.js, es el array con las guitarras
export default function Carrito( { carrito, actualizarCantidad, eliminarProducto }) {

  const [total, setTotal] = useState(0)

  //para que renderice cada vez que cambie el carrito
  useEffect( () =>{
    const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio),0 )
    setTotal(calculoTotal)
  },[carrito])

  return (
    <Layout
        title= "Carrito de compras"
        >   
        <main>
          <h1 className="heading">Carrito de compras</h1>
          <div className={styles.contenido}>
              <div className={styles.carrito}>
                  <h2>Articulos</h2>

                  {carrito?.length === 0 ? 'Carrito Vacio' : (
                    carrito?.map(producto => (
                        <div key={producto.id} className={styles.producto}>
                            <div>
                              <Image src={producto.imagen} width={250} height={480} alt={`imagen guitarra ${producto.nombre}`} />
                            </div>
                            <div>
                                <p className={styles.nombre}>{producto.nombre}</p>
                                <div className={styles.cantidad}>
                                  <p>Cantidad:</p>
                                  <select className={styles.select} 
                                  // le tenemos que pasar un objeto con el id para que lo identifique
                                  // y con la cantidad nueva para que la actualice en el carrito
                                      onChange={e => actualizarCantidad({
                                        id: producto.id,
                                        cantidad: +e.target.value})}
                                      >
                                      <option value={producto.cantidad}></option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                  </select>
                                </div>
                                <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                <p className={styles.subtotal}>Subtotal: $<span>{producto.precio * producto.cantidad}</span></p>
                                
                            </div>
                            <a onClick={ () => eliminarProducto(producto.id)}  href="#" className={styles.eliminar}>
                                <Image src={iconoEliminar} width={30} height={25} alt="icono eliminar"/>
                            </a>
                        </div>
                    ))
                  )}
              </div>

              <aside className={styles.resumen}>
                 <h3>Resumen del pedido</h3> 
                 <p>Total a pagar: ${total}</p>
              </aside>
          </div>

        </main>
    </Layout>
  )
}
