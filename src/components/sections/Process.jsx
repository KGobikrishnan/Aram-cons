import { motion } from 'framer-motion'
import { ClipboardCheck, FileText, Landmark, Plane } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Counseling",
    description: "Free expert guidance to help you choose the right university and country based on your goals.",
    color: "bg-blue-500"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Registration",
    description: "We handle your application process and secure your admission letter from the university.",
    color: "bg-purple-500"
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Documentation",
    description: "Full support for visa processing, MCI eligibility certificates, and document legalization.",
    color: "bg-emerald-500"
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Departure",
    description: "Pre-departure briefing, flight booking assistance, and on-campus support upon arrival.",
    color: "bg-orange-500"
  }
]

export default function Process() {
  return (
    <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Our Seamless Admission Process" 
          subtitle="From your first inquiry to your first day at university, we are with you every step of the way."
          light={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-3xl ${step.color} p-6 flex items-center justify-center mb-6 shadow-2xl shadow-${step.color.split('-')[1]}-500/20 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                {step.icon}
              </div>
              <div className="absolute top-0 right-0 text-6xl font-black text-white/5 -translate-y-4 select-none">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm lg:px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
           <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-secondary/30"
          >
            Start Your Application Today
          </motion.a>
        </div>
      </div>
    </section>
  )
}
