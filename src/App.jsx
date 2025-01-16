
import './App.css'
import AboutMe from './components/AboutMe.jsx/AboutMe'
import MoreInformation from './components/AboutMe.jsx/MoreInformation'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import Hero from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Services from './components/Services/services'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
    <Hero/>
    <AboutMe/>
    <MoreInformation/>
    <Skills/>
    <Services/>
    <Projects/>
    <Certificates/>
    <Contact/>
    </>
  )
}

export default App
