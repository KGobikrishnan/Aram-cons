import { motion } from 'framer-motion'
import { ArrowRight, Globe } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.india.com/wp-content/uploads/2022/03/6ffaa47d4d690fb98f5727169a56ef70-1.jpg"
          alt="Medical Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-sm mb-6"
          >
            <Globe className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">No.1 MBBS Consultancy in Tamilnadu</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 md:mb-8"
          >
            Your Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">Medical Career</span> Starts Here
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
          >
            Get expert guidance to study MBBS abroad. We officially represent top medical universities in Vietnam, Uzbekistan, and Kyrgyzstan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-secondary/30 hover:-translate-y-1"
            >
              Consult Now <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#destinations"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
            >
              Explore Universities
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
