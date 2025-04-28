import Header from '@/components/Header/Header'
import Banner from '@/components/Banner/Banner'
import PeintureMenu from '@/components/PeintureMenu/Menu'
import Footer from '@/components/Footer/Footer'

export default function page() {
  return (
    <main>
      <Header />
      <Banner />
      <PeintureMenu />
      <Footer />     
    </main>
  )
}
