import Image from "next/image"
import Link from "next/link"
import styles from '../styles/blog.module.css'
import { formatearFecha } from "../utils/helpers"


export default function Post( {post} ) {
    const {contenido, imagen, titulo, publishedAt, url} = post 
    const fechaFormateada = formatearFecha(publishedAt)

  return (
    <article>
            <Image src={imagen.data.attributes.formats.medium.url} width={800} height={400} alt="imagen post" />
            <div  className={styles.contenido}>
                <h3>{titulo}</h3>
                <p  className={styles.fecha}>{fechaFormateada}</p>
                <p  className={styles.resumen}>{contenido}</p>
                <Link legacyBehavior href={`/posts/${url}`}>
                    <a  className={styles.enlace} href="#">
                        Leer Post
                    </a>
                </Link>
            </div>
    </article>
  )
}
