import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  //para validar si hay elementos en el carrito de antes y colocarlo en carrito
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
  console.log(carritoLS);
  const [carrito, setCarrito] = useState(carritoLS)
  //esto para evitar el error de hidratacion, donde servidor y cliente buscan tener la misma informacion
  //pero como servidor no tiene el local storage envia esa alerta
  const [paginaLista, setPaginaLista] = useState(false) 

  //hidratacion, espera a que componente este listo, y ahi lo cambia a true y abajo en ternario
  //la condicion es que este true para mostrar el componente
  useEffect( ()=> {
    setPaginaLista(true)
  }, [])


  useEffect( ()=>{
      localStorage.setItem('carrito', JSON.stringify(carrito))

  },[carrito])


  const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito...
    if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
        // Iterar para actualizar la cantidad
        const carritoActualizado = carrito.map( guitarraState => {
            if( guitarraState.id === guitarra.id ) {
                guitarraState.cantidad = guitarra.cantidad;
            } 
            return guitarraState;
        });
        // Se asigna al array
        setCarrito([...carritoActualizado]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setCarrito([...carrito, guitarra]);
        localStorage.setItem('carrito', JSON.stringify( carrito ));
    }
  } 

    const eliminarProducto = id => {
        const carritoActualizado = carrito.filter( producto => producto.id != id)
        setCarrito(carritoActualizado)
        window.localStorage.setItem('carrito', JSON.stringify( carrito ));
    }

    const actualizarCantidad = guitarra => {
      const carritoActualizado = carrito.map( guitarraState => {
        if(guitarraState.id === guitarra.id ) {
          guitarraState.cantidad = parseInt( guitarra.cantidad )
        } 
        return guitarraState
      })
      setCarrito(carritoActualizado)
      window.localStorage.setItem('carrito', JSON.stringify( carrito ));
      
    }
    //hasta que no este la pagina lista (useEffect), no muestra el componente
  return paginaLista ? <Component {...pageProps} 
      carrito = {carrito}
      agregarCarrito = {agregarCarrito}
      eliminarProducto = {eliminarProducto}
      actualizarCantidad = {actualizarCantidad}
    
  />
  : null
}

export default MyApp
