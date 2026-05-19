import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="w-full py-24 bg-surface-container-lowest flex flex-col items-center text-center space-y-6 px-4">
      <motion.p 
        className="font-accent text-4xl text-primary mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Shelsy & Fahmi
      </motion.p>
      
      <p className="font-body text-sm text-on-surface-variant opacity-80 max-w-sm">
        Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i dapat hadir dan memberikan doa restu bagi kami.
      </p>
      
      <div className="py-8">
        <button className="inline-flex items-center gap-2 px-8 py-3 bg-secondary-container/30 rounded-full font-body text-xs tracking-wider text-primary hover:bg-secondary-container/50 transition-all uppercase">
          <span className="material-symbols-outlined">share</span>
          BAGIKAN KABAR BAHAGIA
        </button>
      </div>
      
      <p className="font-body text-xs tracking-wider text-secondary pt-8 uppercase">With love, Shelsy & Fahmi © 2026</p>
      
      <div className="flex gap-4 text-on-surface-variant text-xs font-body opacity-60">
        <a className="hover:text-primary transition-colors" href="https://maps.app.goo.gl/e99kG4ghPKoXgomv6" target="_blank" rel="noopener noreferrer">Maps Location</a>
        <span>•</span>
        <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
      </div>

      <div className="text-[10px] font-body text-on-surface-variant opacity-40 pt-4 uppercase tracking-[0.2em]">
        Digital Invitation by <span className="font-bold text-primary hover:opacity-80 transition-opacity">Este</span>
      </div>
    </footer>
  )
}
