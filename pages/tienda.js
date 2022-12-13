import Layout from '../components/layout'
import Guitarra from '../components/guitarra';
import styles from '../styles/grid.module.css'

export default function Tienda( {guitarras} ) {

  console.log(guitarras);
  return (
    <Layout
            title={'Tienda'}
            description='Guitar-LA | Tienda'
        >
            <main>
                <h1 className='heading'>Nuestra Colección</h1>
                <div className={styles.grid}>
                  {guitarras?.map(guitarra => (
                      <Guitarra 
                          key={guitarra.id}
                          guitarra = {guitarra.attributes}
                      />
                    ))}
                </div>
            </main>
    </Layout>
  )
}

//no será dinamico, ante un cambio hay que hacer de nuevo el build para que se vean
// export async function getStaticProps(){
//   //hacemos la llamada a la API para obtener los datos
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//     //desestructuramos la respuesta
//     const { data: guitarras} = await respuesta.json()

//   return {
//     props: {
//         guitarras
//     }
//   }
// }

//para cuando queremos que sea dinamico y cambie ante cada request de cliente
export async function getServerSideProps(){
 
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data: guitarras} = await respuesta.json()

  return {
    props: {
        guitarras
    }
  }
}