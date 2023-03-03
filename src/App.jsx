import Header from "./components/Header"
import Hero from "./components/Hero"

import {Routes,Route } from "react-router-dom"
import About from '../src/pages/About'
function App () {
  

  return (
   <div className="" >
   
   <Routes>
    <Route path="about" element ={<About/>} />
   </Routes>
        <Header/>
        <Hero/>

   </div>

  )
}

export default App
