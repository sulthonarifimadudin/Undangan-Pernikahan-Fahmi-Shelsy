import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Envelope() {
  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)

  const handleCopy = (text, setCopied) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 bg-surface-container-low text-center px-4" id="envelope">
      <motion.h2 
        className="font-display text-3xl text-primary mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Digital Envelope
      </motion.h2>
      
      <div className="max-w-md mx-auto space-y-6">
        {/* Card 1 - BNI Fahmi */}
        <motion.div 
          className="glass-card p-8 rounded-2xl golden-shadow relative overflow-hidden group"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -right-8 -top-8 text-primary opacity-5 transform group-hover:rotate-12 transition-transform duration-700">
            <span className="material-symbols-outlined text-[120px]">account_balance</span>
          </div>
          <p className="font-body text-xs tracking-wider text-secondary mb-2 uppercase">BNI</p>
          <p className="font-display text-primary text-2xl mb-4 tracking-wider">1430239576</p>
          <p className="font-body text-sm text-on-surface-variant mb-6">a.n Fahmi Reihan A</p>
          <button 
            onClick={() => handleCopy('1430239576', setCopied1)}
            className="px-6 py-2 border border-outline rounded-full font-body text-xs tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all uppercase"
          >
            {copied1 ? 'NOMOR DISALIN ✓' : 'SALIN NOMOR'}
          </button>
        </motion.div>

        {/* Card 2 - BRI Shelsy */}
        <motion.div 
          className="glass-card p-8 rounded-2xl golden-shadow relative overflow-hidden group"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -right-8 -top-8 text-primary opacity-5 transform group-hover:rotate-12 transition-transform duration-700">
            <span className="material-symbols-outlined text-[120px]">payments</span>
          </div>
          <p className="font-body text-xs tracking-wider text-secondary mb-2 uppercase">BRI</p>
          <p className="font-display text-primary text-2xl mb-4 tracking-wider">223601012151503</p>
          <p className="font-body text-sm text-on-surface-variant mb-6">a.n Shelsy Ayesha</p>
          <button 
            onClick={() => handleCopy('223601012151503', setCopied2)}
            className="px-6 py-2 border border-outline rounded-full font-body text-xs tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all uppercase"
          >
            {copied2 ? 'NOMOR DISALIN ✓' : 'SALIN NOMOR'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
