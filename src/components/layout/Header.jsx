import { motion } from 'framer-motion'
import { GraduationCap, Phone, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Fees', href: '#fees' },
    { name: 'Why Us', href: '#why-us' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <GraduationCap className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-primary md:text-white'}`} />
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-primary' : 'text-primary md:text-white'}`}>
            Aram Consultancy
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-5 py-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-secondary/30"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">Consult Now</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-slate-100"
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-600 font-medium py-2 border-b border-slate-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-secondary text-white px-5 py-3 rounded-xl font-semibold mt-2"
          >
            <Phone className="w-4 h-4" />
            Consult Now
          </a>
        </div>
      </motion.div>
    </header>
  )
}
