import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Hero from "./Pages/Hero"
import Projects from "./Pages/Projects"
import {Navbar} from "./Layout/Navbar"

function App() {
  return (
   <div className="min-d-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Contact />
    </main>
   </div>
  )
}

export default App
