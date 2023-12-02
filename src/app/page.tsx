import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import But from "./components/Button"
import Edu from './components/Edu'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Service from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'







export default function Home() {
  return (
<main className='  justify-center  

         '>
    <Navbar/>
    <Intro/>
    <About/>
    <Edu />
    <Skills/>
    <Projects/>
    <Service/>
    <Contact/>
    <But/>
    <Footer/>
 </main>
  )
}
