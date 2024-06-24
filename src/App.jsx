import { useState } from 'react'
import About from "./sections/About"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Exp from "./sections/Exp"
import Projects from "./sections/Projects"

function App() {
  const [dark, setDark] = useState(false)

  return (
    <>
    {dark ? (
      <main className="dark overflow-x-hidden bg-background pinStripe">
        <section className="fixed z-20 "> <Navbar /></section>
        <div>
          <section id="#" className=""> <Hero /> </section>
          <section id="about" className="" > <About /> </section>
          <section id="exp" className="" > <Exp /> </section>
          <section id="projects" className=""> <Projects /> </section>
          <section id="contact" className=""> <Contact /> </section>
        </div>
      </main>
    )
  : (
    <main className="overflow-x-hidden bg-background pinStripe">
        <section className="fixed z-20 "> <Navbar /></section>
        <div>
          <section id="#" className=""> <Hero /> </section>
          <section id="about" className="" > <About /> </section>
          <section id="exp" className="" > <Exp /> </section>
          <section id="projects" className=""> <Projects /> </section>
          <section id="contact" className=""> <Contact /> </section>
        </div>
      </main>
  )  
  
  }
    </>
  )
}

export default App
