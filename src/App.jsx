import Header from "./components/Header"
import Hero from "./components/Hero"

import {Routes,Route } from "react-router-dom"
import About from '../src/pages/About'
import HowItWorks from "./components/HowItWorks"
import Menu from "./pages/Menu"
import Footer from "./components/Footer"

function App () {
  

  return (
   <div className="" >
   
   <Routes>
    <Route path="about" element ={<About/>} />
   </Routes>
        <Header/>
        <Hero/>
        <HowItWorks/>
        <Menu/>
        <About/>
        <Footer/>

   </div>

  )
}

export default App
