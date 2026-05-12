import { motion } from 'framer-motion'
import brideImg from '../assets/bride.jpg'
import groomImg from '../assets/groom.jpg'
import coverImg from '../assets/cover.jpg'
import instrumentsImg from '../assets/both_instruments.jpg'
import romanticImg from '../assets/both_romantic.jpg'
import flowersImg from '../assets/both_flowers.jpg'
import instruments2Img from '../assets/both_instruments_2.jpg'

export default function Gallery() {
  const images = [
    brideImg,
    groomImg,
    coverImg,
    instrumentsImg,
    romanticImg,
    flowersImg,
    instruments2Img
  ]

  return (
    <section className="py-24 bg-surface-container-highest" id="gallery">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 
          className="font-display text-4xl text-center text-primary mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Gallery Moments
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              className={`aspect-[3/4] overflow-hidden rounded-xl group relative ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
                src={src} 
                alt={`Gallery moment ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
