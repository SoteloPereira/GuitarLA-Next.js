import styles from '../styles/curso.module.css'

export default function Cursos({ curso }) {

    const {titulo, contenido, imagen} = curso.attributes

  return (
    <section className={`${styles.curso} curso`}>
        <style jsx>
          {`
            .curso{
              background-image: linear-gradient(to right, rgb(0 0 0 / .7), rgb(0 0 0 / .8)),
              url(${imagen.data.attributes.url})
            }
          `}
        </style>

        <div className={`contenedor ${styles.grid}`}>

          <div className={styles.contenido}>
              <h2 className='heading'>{titulo}</h2>
              <p>{contenido}</p>
          </div>
        </div>
        
    </section>
  )
}

