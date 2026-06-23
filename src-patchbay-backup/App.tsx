import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import PatchBay from './components/PatchBay'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Grain from './components/Grain'

function App() {
  return (
    <>
      <Grain />
      <Nav />
      <main>
        <Hero />
        <About />
        <PatchBay />
        <Experience />
      </main>
      <Contact />
    </>
  )
}

export default App
