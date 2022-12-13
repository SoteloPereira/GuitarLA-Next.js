import Link from "next/link"
import Image from "next/image"
import { formatearFecha } from "../../utils/helpers"
import Layout from "../../components/layout"
import styles from '../../styles/blog.module.css'

//al verlo en consola, el post que recibe es un array, por eso la posicion 0 y luego .attributes
export default function Posteo( { post }) {
 
    const {titulo, contenido, imagen, publishedAt} = post[0].attributes
    const fechaFormateada = formatearFecha(publishedAt)
  return (
    <Layout>
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={imagen.data.attributes.formats.medium.url} width={1000} height={400} alt="imagen post" />
            <div  className={styles.contenido}>
                <h3>{titulo}</h3>
                <p  className={styles.fecha}>{fechaFormateada}</p>
                <p  className={styles.texto}>{contenido}</p>
                <Link legacyBehavior href={`/blog`}>
                    <a  className={styles.enlace} href="#">
                        Volver
                    </a>
                </Link>
            </div>
        </article>
    </Layout>
  )
}


export async function getServerSideProps( {query: {url} } ){
    //console.log(datos); 

    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const {data : post} = await respuesta.json()

    return{
        props:{
            post
        }
    }
}

//******************************************************************************************** */

// export async function getStaticPaths(){

//     const respuesta = await fetch(`${process.env.API_URL}/posts`)
//     const { data } = await respuesta.json()

//     const paths =  data.map( p => ({
//             params:{
//                 url : p.attributes.url
//             }
//     }))
//     return{
//         paths,
//         fallback: false
//     }
// }


// export async function getStaticProps( {params : {url} }){

//     const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
//     const { data : post } = await respuesta.json()

//     return{
//         props:{
//             post
//         }
//     }
// }
