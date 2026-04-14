import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, light = false, align = 'center' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  
  return (
    <div className={`flex flex-col ${alignClass} max-w-3xl mb-12 lg:mb-16`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-base sm:text-lg md:text-xl lg:px-0 px-2 ${light ? 'text-white/80' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}
        <div className={`h-1.5 w-20 bg-secondary rounded-full mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
      </motion.div>
    </div>
  )
}
