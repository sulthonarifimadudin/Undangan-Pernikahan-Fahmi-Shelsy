import { motion } from 'framer-motion'

export default function Quote() {
  return (
    <section className="py-24 px-4 flex flex-col items-center justify-center text-center max-w-5xl mx-auto" id="quote">
      <motion.div 
        className="max-w-3xl glass-card p-12 md:p-16 rounded-2xl relative overflow-hidden golden-shadow"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Floral Accent */}
        <div className="absolute -top-10 -left-10 opacity-10 text-primary">
          <span className="material-symbols-outlined text-[120px]">local_florist</span>
        </div>
        
        <p className="font-display text-2xl md:text-3xl text-primary mb-8 italic leading-relaxed">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </p>
        <p className="font-body text-xs tracking-widest text-secondary font-bold uppercase">
          QS. AR-RUM: 21
        </p>
      </motion.div>
    </section>
  )
}
