import Header from "./components/Header"
import Hero from "./components/Hero"
import About from '../src/pages/About'
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"
import MenuContainer from "./components/MenuContainer"
import { AnimatePresence } from "framer-motion"
import CheckOut from "./components/CheckOut"

import { useSelector } from "react-redux"


function App () {

  

  const modal = useSelector((state) => state.checkout.value)
  
  
  return (

    <AnimatePresence>
        <div className="" >
    
            <Header/>
            <Hero/>
            <HowItWorks/>
            <MenuContainer/>

            {
              modal ? null : <CheckOut/>
            }
            
            <About/>
            <Footer/>
    
        </div>
    </AnimatePresence>

  )
}

export default App
