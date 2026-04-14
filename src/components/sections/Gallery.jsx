import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const galleryImages = [
  {
    url: "https://thethaiger.com/wp-content/uploads/2020/06/Screenshot_24.png",
    title: "International Medical Hubs",
    category: "Campus"
  },
  {
    url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2089&auto=format&fit=crop",
    title: "Modern Clinical Training",
    category: "Labs"
  },
  {
    url: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070&auto=format&fit=crop",
    title: "Expert Faculty Support",
    category: "Education"
  },
  {
    url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop",
    title: "Hands-on Learning",
    category: "Experience"
  },
  {
    url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    title: "Global Student Community",
    category: "Life"
  },
  {
    url: "https://www.themayor.eu/web/files/articles/2654/main_image/thumb_1024x663_library-488687_1280.jpg",
    title: "State-of-the-art Libraries",
    category: "Academic"
  }
]

export default function Gallery() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Global Campus Life"
          subtitle="Experience the world-class infrastructure and vibrant environment of our partner medical universities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-secondary-light font-bold text-xs uppercase tracking-widest mb-2">{image.category}</span>
                <h4 className="text-white text-xl font-bold">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
