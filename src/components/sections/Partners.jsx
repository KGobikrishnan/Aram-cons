import { motion } from 'framer-motion'

const partners = [
  { name: "Dai Nam University", location: "Vietnam" },
  { name: "BMTU", location: "Vietnam" },
  { name: "Dong A University", location: "Vietnam" },
  { name: "Bukhara State", location: "Uzbekistan" },
  { name: "Tashkent State", location: "Uzbekistan" },
  { name: "IMU", location: "Kyrgyzstan" }
]

export default function Partners() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-[0.2em] mb-10">
          Recognized & Authorized Partner of
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <span className="text-primary font-bold text-lg">{partner.name[0]}</span>
              </div>
              <span className="text-primary font-bold text-xs md:text-sm whitespace-nowrap">{partner.name}</span>
              <span className="text-slate-400 text-[10px] uppercase font-medium">{partner.location}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
