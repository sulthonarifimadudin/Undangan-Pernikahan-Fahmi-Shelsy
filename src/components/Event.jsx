import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Event() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-06-02T07:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 px-4 relative" id="event">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.p 
          className="font-body text-xs tracking-[0.4em] text-secondary uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          SAVE THE DATE
        </motion.p>
        
        <motion.h2 
          className="font-display text-4xl md:text-5xl text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Rangkaian Acara
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Akad */}
          <motion.div 
            className="glass-card p-10 rounded-2xl golden-shadow border-t-4 border-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="material-symbols-outlined text-primary text-5xl mb-4">calendar_today</span>
            <h3 className="font-display text-2xl mb-4 text-primary">Akad Nikah</h3>
            <div className="space-y-2 text-on-surface-variant font-body">
              <p className="font-bold">Selasa, 02 Juni 2026</p>
              <p>07.00 WIB - Selesai</p>
            </div>
          </motion.div>

          {/* Resepsi */}
          <motion.div 
            className="glass-card p-10 rounded-2xl golden-shadow border-t-4 border-primary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="material-symbols-outlined text-primary text-5xl mb-4">celebration</span>
            <h3 className="font-display text-2xl mb-4 text-primary">Resepsi</h3>
            <div className="space-y-2 text-on-surface-variant font-body">
              <p className="font-bold">Selasa, 02 Juni 2026</p>
              <p>09.00 WIB - Selesai</p>
            </div>
          </motion.div>
        </div>

        {/* Location */}
        <motion.div 
          className="mt-12 glass-card p-10 rounded-2xl golden-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="material-symbols-outlined text-primary text-5xl mb-4">location_on</span>
          <h3 className="font-display text-2xl mb-4 text-primary">Lokasi Acara</h3>
          <p className="font-body text-on-surface-variant max-w-md mx-auto mb-8">
            GARASI JOYO NENG JAGAD, Bodang Bejirejo, Padang, Lumajang
          </p>
          <a 
            className="inline-flex items-center gap-2 px-8 py-3 border border-outline text-secondary font-body text-xs tracking-wider rounded-full hover:bg-secondary-container/20 transition-all" 
            href="https://maps.app.goo.gl/e99kG4ghPKoXgomv6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">map</span>
            GOOGLE MAPS
          </a>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="mt-24 flex justify-center gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-full flex items-center justify-center font-display text-primary text-3xl md:text-4xl golden-shadow">
              {timeLeft.days}
            </div>
            <span className="font-body text-xs mt-2 tracking-widest uppercase text-secondary">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-full flex items-center justify-center font-display text-primary text-3xl md:text-4xl golden-shadow">
              {timeLeft.hours}
            </div>
            <span className="font-body text-xs mt-2 tracking-widest uppercase text-secondary">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-full flex items-center justify-center font-display text-primary text-3xl md:text-4xl golden-shadow">
              {timeLeft.minutes}
            </div>
            <span className="font-body text-xs mt-2 tracking-widest uppercase text-secondary">Mins</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 glass-card rounded-full flex items-center justify-center font-display text-primary text-3xl md:text-4xl golden-shadow">
              {timeLeft.seconds}
            </div>
            <span className="font-body text-xs mt-2 tracking-widest uppercase text-secondary">Secs</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
