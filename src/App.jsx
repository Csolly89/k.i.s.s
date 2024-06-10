// import { useState } from 'react'
import About from "./sections/About"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Exp from "./sections/Exp"
import Projects from "./sections/Projects"

function App() {

  return (
    <div className="dark overflow-x-hidden">
    <section className="fixed z-20 "> <Navbar /></section>
    <div>
      <section id="#" className=""> <Hero /> </section>
      <section id="about" className="relative bottom-5" > <About /> </section>
      <section id="services" className="" > <Exp /> </section>
      <section id="projects" className=""> <Projects /> </section>
      <section id="contact" className=""> <Contact /> </section>
    </div>
    </div>
  )
}

export default App
