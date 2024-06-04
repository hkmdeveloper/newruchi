import './App.css'
import Banner from './components/Banners/Banner'
import Faqs from './components/FAQ/Faqs'
import FantasySports from './components/FantasySports/FantasySports'
import Footer from './components/Footer/Footer'
import GetApp from './components/GetApp/GetApp'
import Header from './components/Header/Header'
import HowToPlay from './components/HowToPlay/HowToPlay'
import OfficialPartner from './components/OfficialPartner/OfficialPartner'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <OfficialPartner />
      <HowToPlay />
      <GetApp />
      <FantasySports />
      <Faqs />
      <Footer />
    </>
  )
}

export default App
