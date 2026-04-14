import { motion } from 'framer-motion'
import { GraduationCap, Award, FileCheck2, PlaneTakeoff } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Expert Guidance",
      description: "Over a decade of experience in counseling and placing students in top medical universities worldwide."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Official Representation",
      description: "We are direct authorized representatives of leading universities, ensuring transparent and authentic admission processes."
    },
    {
      icon: <FileCheck2 className="w-8 h-8 text-white" />,
      title: "Documentation Support",
      description: "From eligibility checks to visa processing, we handle all paperwork with 100% precision."
    },
    {
      icon: <PlaneTakeoff className="w-8 h-8 text-white" />,
      title: "Post-Admission Assistance",
      description: "Our support doesn't end at admission. We assist with travel, hostel accommodation, and continuous monitoring."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Why Choose Aram Consultancy?" 
          subtitle="We are committed to making your dream of becoming a doctor a reality with unmatched dedication and transparency."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-secondary/30 transform -rotate-3">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
