import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Main from "./components/Main"
import Services from "./components/Services"
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
  }, []);

  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/Porfolio-Harri' : ''}>
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