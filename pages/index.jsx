import Image from 'next/image'
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Home() {
  return(
    <>
      <Nav />
      <Contato button="enviar" display='hidden' />
      <Footer />
    </>
  )
}
