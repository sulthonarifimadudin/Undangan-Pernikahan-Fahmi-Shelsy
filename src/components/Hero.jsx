import { motion } from 'framer-motion'
import coverImg from '../assets/cover.jpg'

export default function Hero({ onOpen }) {
  const handleBuka = (e) => {
    e.preventDefault()
    if (onOpen) onOpen()
    setTimeout(() => {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden" id="home">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <img 
          className="w-full h-full object-cover" 
          src={coverImg} 
          alt="Cinematic wedding altar"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </motion.div>

      {/* Content Card */}
      <motion.div 
        className="relative z-10 glass-card p-12 rounded-xl max-w-2xl mx-4 golden-shadow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.p 
          className="font-body text-xs tracking-[0.3em] uppercase mb-6 text-on-surface-variant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          The Wedding Invitation
        </motion.p>
        
        <motion.h1 
          className="font-display text-4xl md:text-6xl text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Shelsy & Fahmi
        </motion.h1>
        
        <motion.p 
          className="font-body text-lg text-secondary mb-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          02 . 06 . 2026
        </motion.p>
        
        <motion.button 
          onClick={handleBuka}
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-body text-sm tracking-widest hover:bg-primary/90 transition-all active:scale-95 shadow-lg cursor-pointer" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BUKA UNDANGAN
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
        </motion.button>
      </motion.div>
    </section>
  )
}
