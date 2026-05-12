import { motion } from 'framer-motion'
import brideImg from '../assets/bride.jpg'
import groomImg from '../assets/groom.jpg'

export default function Profile() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Bride */}
        <motion.div 
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-64 h-80 overflow-hidden rounded-full border-4 border-white shadow-2xl relative">
            <img 
              className="w-full h-full object-cover" 
              src={brideImg} 
              alt="Bride Shelsy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-primary mb-2">Shelsy Ayesha Rochmania</h2>
            <p className="font-body text-sm text-on-surface-variant italic">Putri dari Bapak Satuman & Ibu Herlin Lilis Sriani</p>
          </div>
        </motion.div>

        {/* Groom */}
        <motion.div 
          className="flex flex-col items-center text-center space-y-6 mt-12 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-64 h-80 overflow-hidden rounded-full border-4 border-white shadow-2xl relative">
            <img 
              className="w-full h-full object-cover" 
              src={groomImg} 
              alt="Groom Fahmi"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-primary mb-2">Fahmi Reihan Akbarudin</h2>
            <p className="font-body text-sm text-on-surface-variant italic">Putra dari H. Fauzi & Hj. Siti Khumaiyah</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
