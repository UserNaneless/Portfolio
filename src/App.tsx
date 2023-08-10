import './App.css'
import About from './components/aboutSection/about'
import ContactForm from './components/contactFormSection/contactForm'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './components/homeSection/home'
import Projects from './components/projectsSection/projectsSection'
import Skills from './components/skillsSection/skills'

import { FaAnglesUp } from "react-icons/fa6"

function App() {

    return (
        <div className='appMain'>
            <Header />
            <div className="background"></div>

            <div className="container">
                <Home />
                <About />
                <Skills />
                <Projects />
                <ContactForm />
            </div>

            <div className="scrollToTop" onClick={() => {
                document.getElementsByClassName("appMain")[0].scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }}>
                <FaAnglesUp/>
            </div>

            <Footer />
        </div>
    )
}

export default App
