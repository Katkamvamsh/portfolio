import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import ContextProvider from "./Context/Context"


const App = () => {
  return (
    <div>
    <ContextProvider>
        <Navbar />
        <Hero />
        <About />
        <Projects/>
        <Contact />
        <Footer/>
   </ContextProvider>
    </div>
  )
}

export default App
