import Header from "./components/Header"
import Hero from "./components/Hero"
import About from '../src/pages/About'
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"
import MenuContainer from "./components/MenuContainer"
import { AnimatePresence } from "framer-motion"

function App () {
  

  return (

    <AnimatePresence>
        <div className="" >
    
            <Header/>
            <Hero/>
            <HowItWorks/>
            <MenuContainer/>
            <About/>
            <Footer/>
    
        </div>
    </AnimatePresence>

  )
}

export default App
