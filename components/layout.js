import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export const Layout = ({children, title = '', description = ''}) => {
  return (
    <>
    {/* Todo lo que este aca se va añadir al header de layout */}
    <Head>
        <title>{`GuitarLa - ${title}`}</title>
        <meta name="decription" content={description} />
    </Head>
    
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
