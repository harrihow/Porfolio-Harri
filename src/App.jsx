import Navbar from './components/layout/Navbar'
import HeroSection from './components/pages/Home/HeroSection'
import About from './components/pages/About/About'
import Projects from './components/pages/Projects/Projects'
import Contact from './components/pages/Contact/Contact'
import Services from './components/pages/Services/Services'

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <About />
    <Projects />
    <Services />
    <Contact />
    </>
  )
}

export default App