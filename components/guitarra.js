import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css"


export default function Guitarra( {guitarra} ) {
    //console.log(guitarra);
    
    const {nombre, imagen, precio, descripcion, url} = guitarra

  return (
    <div className={styles.guitarra}>
      {/* nos muestra un error next, ya que como estan en cloudinary las imagenes debemos hacer una configuracion
      en el archivo next.config agregando domains: ['res.cloudinary.com'] */}
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt ={`Imagen de guitarra ${nombre}`} />

        <div className={styles.contenido}>
            <h3 >{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>

            {/* hacemos el routing dinamico para ir navegando por las distintas guitarras */}
            <Link legacyBehavior href={`/guitarras/${url}`} >
              <a className={styles.enlace}>
                 Ver producto
              </a>
            </Link>
        </div>
    </div>
  )
}
