import Link from 'next/link'
import styles from '../styles/footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
            {/* prop legacyBehavior se debe agregar en Link con tiene una a de hijo*/}
                <Link href="/" >  Inicio</Link> 
                <Link href="/nosotros" >Nosotros</Link>
                <Link href="/tienda"  >Tienda</Link> 
                <Link href="/blog"  >Blog</Link> 
            </nav>
            <p className={styles.copyright}>Todos los derechos reservados ©️</p>
        </div>
    </footer>
  )
}

export default Footer
