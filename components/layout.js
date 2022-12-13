//vamos a definir dinamicamente el title y description para mejorar el SEO
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

//les dejamos valor por default por si no le pasamos valores
export default function Layout( {children, title ='', description=''} ) {
  return (
    <>
        <Head>
            <title>{`Guitar-LA | ${title}`}</title>
            <meta name='description' content={description}/>
        </Head>
        <Header />
            {children}
        <Footer />
    </>
  )
}
