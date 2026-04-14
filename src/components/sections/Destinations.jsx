import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const destinationsData = {
  vietnam: {
    name: "Vietnam",
    bgImage: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
    universities: [
      { name: "Dai Nam University", eligibility: "60%" },
      { name: "Buon Ma Thuot Medical University (BMTU)", eligibility: "65%" },
      { name: "Dong A University", eligibility: "60%" }
    ],
    features: ["High Quality Education", "Safe Environment", "Affordable Living"]
  },
  uzbekistan: {
    name: "Uzbekistan",
    bgImage: "https://sereneworld.in/uploads/blogs/1759126656_p0hc5x2w.jpeg",
    universities: [
      { name: "Bukhara State Medical Institute", eligibility: "50%" },
      { name: "Tashkent State Medical Academy", eligibility: "50%" },
      { name: "Samarkand State Medical University", eligibility: "50%" },
      { name: "Urgench State Medical Institute", eligibility: "50%" },
      { name: "Bukhara Innovative University", eligibility: "50%" }
    ],
    features: ["MCI & WHO Approved", "English Medium", "Low Tuition Fees"]
  },
  kyrgyzstan: {
    name: "Kyrgyzstan",
    bgImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREs741jJTzzwHhPuMVD8CstHmpWMGRD7QVzQ&s",
    universities: [
      { name: "International Medical University", eligibility: "50%" }
    ],
    features: ["FMGE High Pass Rate", "Globally Recognized", "Modern Infrastructure"]
  }
}

export default function Destinations() {
  const [activeTab, setActiveTab] = useState('vietnam')

  return (
    <section id="destinations" className="py-20 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Top Medical Destinations"
          subtitle="Explore world-class medical universities in our partner countries."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {Object.keys(destinationsData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 md:px-8 py-3 rounded-full font-bold text-xs md:text-base transition-all duration-300 shadow-md ${activeTab === key
                ? 'bg-primary text-white shadow-primary/30 scale-105'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
            >
              {destinationsData[key].name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[2rem] overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={destinationsData[activeTab].bgImage}
                  alt={destinationsData[activeTab].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 backdrop-blur-[1px]"></div>
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row min-h-[500px]">
                <div className="flex-1 p-8 md:p-12 lg:p-16">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                    <MapPin className="text-secondary-light" />
                    Study in {destinationsData[activeTab].name}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destinationsData[activeTab].universities.map((uni, idx) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx}
                        className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col gap-2 hover:bg-white/20 transition-all cursor-default"
                      >
                        <span className="font-bold text-white text-lg">{uni.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md border border-emerald-400/20">
                            {uni.eligibility} Eligibility
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-80 bg-secondary/90 backdrop-blur-md lg:backdrop-blur-none p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
                  <h4 className="font-bold text-xl mb-6 text-white border-b border-white/20 pb-4">Key Benefits</h4>
                  <ul className="space-y-4">
                    {destinationsData[activeTab].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white">
                        <CheckCircle2 className="w-6 h-6 shrink-0 opacity-80" />
                        <span className="font-medium text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className="mt-10 flex items-center gap-2 font-bold group bg-white text-primary px-6 py-3 rounded-xl w-fit"
                  >
                    Learn More <CheckCircle2 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
