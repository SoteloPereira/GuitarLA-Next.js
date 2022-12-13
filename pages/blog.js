import Layout from '../components/layout'
import Post from '../components/post'
import styles from '../styles/grid.module.css'

export default function Blog( {posts} ) {
  console.log(posts);
  return (
    <Layout
        title={'Blog'}
        description='Guitar-LA | Blog'
        >
            <main className='contenedor'>
              <h2 className='heading'>Blog</h2>
                <div className={styles.grid}>
                    {posts?.map( post => (
                      <Post 
                          key = {post.id}
                          post = { post.attributes}
                        />
                    ))}
                </div>
            </main>
    </Layout>
  )
}

//para cuando queremos que sea dinamico y cambie ante cada request de cliente
export async function getServerSideProps(){
 
  const respuesta = await fetch(`http://localhost:1337/api/posts?populate=imagen`)
  const { data: posts} = await respuesta.json()

return {
  props: {
      posts
  }
}
}