// import { useState } from 'react'
import About from "./sections/About"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"

function App() {

  return (
    <>
    <section className="fixed z-20"> <Navbar /></section>
    <div>
      {/* <section id="#" className="py-24"> <Hero /> </section> */}
      <section id="about" className="pt-32" > <About /> </section>
      {/* <section id="services" className="pt-24" > <Exp /> </section> */}
      {/* <section id="projects" className="pt-24"> <Projects /> </section> */}
      <section id="contact" className="py-12 pt-20 "> <Contact /> </section>
    </div>
    </>
  )
}

export default App
