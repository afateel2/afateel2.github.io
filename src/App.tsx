import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
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
        <Work />
        <Experience />
        <Certifications />
      </main>
      <Contact />
    </>
  )
}

export default App
