import Image from 'next/image'
import Contato from '../components/Contato'
import Faixa from '../components/Faixa'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Home() {
  return(
    <>
      <Nav />
      <Faixa />
      <Contato button="enviar" display='hidden' bg={`bg-white`} />
      <Footer />
    </>
  )
}
