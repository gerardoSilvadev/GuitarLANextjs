import { Layout } from "../components/layout";
import Posts from "../components/posts";
import styles from "../styles/grid.module.css"

export default function Blog({posts}) {
  console.log(posts)
  return (
    <div>
        <Layout
          title={'Blog'}
          description={'Blog de musica, venta de guitarras, consejos, GuitarLA'}
        >
          <main className="contenedor">
            <h1 className="heading">Blog</h1>
            <div className={styles.grid}>
                  {posts?.map(post => (
                    <Posts 
                    key={post.id}
                    post={post.attributes}/>
                  ))}
              </div>
          </main>
        </Layout>
    </div>
  )
}


export async function getStaticProps() { 
   const resp = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
   const {data: posts} = await resp.json()
   return {
    props: {
        posts
    }
   }
}
