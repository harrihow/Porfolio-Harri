import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from "./components/Main"
import Services from "./components/pages/Services"
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router basename={import.meta.env.MODE === 'production' ? '/Porfolio-Harri' : ''}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App