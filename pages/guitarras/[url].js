import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Layout from '../../components/layout';
import styles from '../../styles/guitarras.module.css'

// 3 - recibe la prop para poder dibujar usando las propiedades
export default function Producto( {guitarra, agregarCarrito} ) {
 
    const [cantidad, setCantidad] = useState(0)
    //const router = useRouter() ;   //console.log(router)
    const {nombre, imagen, descripcion, precio } = guitarra[0].attributes

    const handleSubmit = e =>{
        e.preventDefault()
        console.log("enviando al carrito....");
        if(cantidad < 1 ) alert("Debe ingresar un numero")

        //creamos objeto que guarda la guitarra
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        console.log(guitarraSeleccionada);
        //ya teniendo el objeto creado, ir a _app.js, ya que alli vamos a definir un context
        //y pasaremos un estado global de carrito a todos los componentes, recibiendo la fn de agregar
        agregarCarrito(guitarraSeleccionada)
    }


  return (
    <Layout>
        <div className={styles.guitarra}>
      {/* nos muestra un error next, ya que como estan en cloudinary las imagenes debemos hacer una configuracion
      en el archivo next.config agregando domains: ['res.cloudinary.com'] */}
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt ={`Imagen de guitarra ${nombre}`} />

        <div className={styles.contenido}>
            <h3 >{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>

            <form 
                onSubmit={handleSubmit}
            className={styles.formulario}>
                <label htmlFor='cantidad'>Cantidad:</label>
                <select id='cantidad' 
                    onChange={e => setCantidad(+e.target.value)}
                    >
                    <option value="">--Seleccione--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className={styles.enlace} type="submit">Agregar al carrito</button>
            </form>


            {/* hacemos el routing dinamico para ir navegando por las distintas guitarras */}
            <Link legacyBehavior href='/tienda' >
                <a className={styles.back}>
                    Volver
                </a>
            </Link>
        </div>
    </div>
    </Layout>
  )
}
//podemos ver que recibe una bateria de datos, y dentro esta la propiedad query, que tiene la url
// export async function getServerSideProps( {query: {url} } ){
//     //console.log(datos); 

//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data : guitarra} = await respuesta.json()

//     return{
//         props:{
//                 guitarra
//         }
//     }
// }


/**************************************************** */

// 1 - trae todas las guitarras, las guarda en un objeto (params) con su url y lo retorna
export async function getStaticPaths(){
    //lo que hace aqui es buscar todas las guitarras
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()
    //console.log(data);
    const paths = data.map(g => ({
        params: {
            url: g.attributes.url
        }
    }))
    return{
        paths,
        //estando en false, si no esta la que se busca, muestra el error 404, su esta en true debemos validar en componente
        fallback :false
    }
}

// 2 - toma del objeto params, la url de la guitarra elegida y lo inyecta en la request, retornando la data de esa guitarra al componente
export async function getStaticProps( {params: {url} } ){
    //console.log(datos); 

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data : guitarra} = await respuesta.json()

    return{
        props:{
                guitarra
        }
    }
}


