import Image from 'next/image'
import Contato from '../components/Contato'
import Faixa from '../components/Faixa'
import Footer from '../components/Footer'
import Info3 from '../components/Info3'
import Nav from '../components/Nav'

export default function Home() {
  return(
    <>
      <Nav />
      <Info3 />
      <Faixa />
      <Contato button="enviar" display='hidden' bg={`bg-white`} />
      <Footer />
    </>
  )
}
