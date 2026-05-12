import { motion } from 'framer-motion'

export default function Envelope() {
  return (
    <section className="py-24 bg-surface-container-low text-center px-4">
      <motion.h2 
        className="font-display text-3xl text-primary mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Digital Envelope
      </motion.h2>
      
      <div className="max-w-md mx-auto space-y-6">
        {/* Card 1 */}
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
          <p className="font-body text-xs tracking-wider text-secondary mb-2 uppercase">BANK MANDIRI</p>
          <p className="font-display text-primary text-2xl mb-4 tracking-wider">123 456 789 0000</p>
          <p className="font-body text-sm text-on-surface-variant mb-6">a.n Fahmi Reihan Akbarudin</p>
          <button className="px-6 py-2 border border-outline rounded-full font-body text-xs tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all uppercase">SALIN NOMOR</button>
        </motion.div>

        {/* Card 2 */}
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
          <p className="font-body text-xs tracking-wider text-secondary mb-2 uppercase">BCA</p>
          <p className="font-display text-primary text-2xl mb-4 tracking-wider">987 654 321 000</p>
          <p className="font-body text-sm text-on-surface-variant mb-6">a.n Shelsy Ayesha Rochmania</p>
          <button className="px-6 py-2 border border-outline rounded-full font-body text-xs tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all uppercase">SALIN NOMOR</button>
        </motion.div>
      </div>
    </section>
  )
}
