import { useEffect } from 'react'
import Lenis from 'lenis'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import Partners from './components/sections/Partners'
import Destinations from './components/sections/Destinations'
import FeeTransparency from './components/sections/FeeTransparency'
import Process from './components/sections/Process'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Gallery from './components/sections/Gallery'
import LeadForm from './components/sections/LeadForm'

import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-light font-sans text-slate-800">
      <Header />
      
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        <Partners />
        <Destinations />
        <FeeTransparency />
        <Process />
        <WhyChooseUs />
        <Gallery />
        <LeadForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
