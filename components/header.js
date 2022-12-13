//import logo from '../public/img/logo.svg'
// next tiene un componente Image, que se importa donde se usará y se cambia por la etiqueta <img />
// esto tira un error ya que pide definir width y height, se agrega en el componente Image
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import {useRouter} from 'next/router'

function Header() {

    const router = useRouter()
    
  return (
    <header  className = {styles.header} >
        <div className={`contenedor ${styles.barra}`}>
    {/* al ver "logo" podemos ver que es un objeto que tiene una propiedad src con la ruta, llamamos esa 
    Igualmente es mas optimizado usar en src de la Image/img la ruta directa de la imagen en vez de variable importada (logo)*/}
            <Link href="/" legacyBehavior>
                <a>
                    <Image src="/img/logo.svg" width={300} height={50} alt="logo guitarla"/> 
                </a>
            </Link>
            <nav className={styles.navegacion}>
            {/* prop legacyBehavior se debe agregar en Link */}
                <Link href="/" legacyBehavior > 
                    <a className={router.pathname === "/" ? styles.active : ''}>Inicio</a>
                </Link> 
                <Link href="/nosotros" legacyBehavior >
                    <a className={router.pathname === "/nosotros" ? styles.active : ''}>Nosotros</a>
                </Link>
                <Link href="/tienda"  legacyBehavior >
                    <a className={router.pathname === "/tienda" ? styles.active : ''}>Tienda</a>
                </Link> 
                <Link href="/blog" legacyBehavior  >
                    <a className={router.pathname === "/blog" ? styles.active : ''}>Blog</a>
                </Link> 
                <Link legacyBehavior href="/carrito">
                    <a>
                        <Image src="/img/carrito.png" width={30} height={25} alt="imagen carrito"/>
                    </a>
                </Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
