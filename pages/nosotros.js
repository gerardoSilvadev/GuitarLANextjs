import Image from "next/image";
import { Layout } from "../components/layout";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <div>
        <Layout
          title={'Nosotros'}
          description={'Sobre nosotros, guitarLA, tienda de musica'}
        >
            <main className="contenedor">
               <h1 className="heading">Nosotros</h1> 

               <div className={styles.contenido} >
                  <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>

                  <div>
                      <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales nisl non dui dignissim faucibus. Mauris nec enim in urna euismod laoreet id eu metus. Phasellus imperdiet cursus nulla sed vulputate. Cras convallis finibus orci, ac faucibus ligula pellentesque sit amet. Vivamus a ipsum at elit suscipit vulputate a ornare purus. 
                      </p>

                    <p>
                    Duis et velit eleifend, bibendum urna sed, ornare turpis. Nullam turpis magna, iaculis vel odio sed, lacinia scelerisque massa. Praesent turpis neque, pulvinar nec erat eu, feugiat viverra eros. Quisque a euismod odio, in tempor mi. Donec sit amet dignissim augue, non aliquet lectus. Maecenas mattis sit amet lorem eu porta. Ut id condimentum augue, vel pharetra elit. Morbi finibus orci quis ornare venenatis. Phasellus fringilla enim odio, nec convallis dolor luctus non.
                    </p>
                 </div>
               
               </div>
            </main>
        </Layout>
    </div>
  )
}
