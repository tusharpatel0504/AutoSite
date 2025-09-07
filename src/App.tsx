import './App.css'


import Navbar from './components/Navbar'
import Footer from './components/ui/Footer'
import { GridBackground } from './components/ui/GridBackground'
import Page from './components/ui/LogoCloud'

import ReplyRates from './components/ui/ReplyRates'
import Review from './components/ui/Review'

import Services from './components/ui/Services'




function App() {


  return (
    <>
      <Navbar />
      <GridBackground />
      <Services />

      <Review />
      <ReplyRates />
      <Page />

      <Footer />
    </>
  )
}

export default App
