import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'

export default function RSVP() {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState('1 Orang')
  const [attendance, setAttendance] = useState('Hadir')
  const [message, setMessage] = useState('')
  const [wishes, setWishes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchWishes()
  }, [])

  const fetchWishes = async () => {
    try {
      const { data, error } = await supabase
        .from('rsvp')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      if (data) setWishes(data)
    } catch (error) {
      console.error('Error fetching wishes:', error.message)
      // Fallback data if table doesn't exist yet
      setWishes([
        { name: 'Dian & Keluarga', message: 'Selamat menempuh hidup baru Shelsy & Fahmi! Semoga sakinah mawaddah warahmah.', attendance: 'Hadir' },
        { name: 'Andi Pratama', message: 'Lancar sampai hari H ya teman-teman! Doa terbaik untuk kalian.', attendance: 'Hadir' }
      ])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const { error } = await supabase
        .from('rsvp')
        .insert([
          { name, guests, attendance, message }
        ])
      
      if (error) throw error
      
      // Reset form
      setName('')
      setGuests('1 Orang')
      setAttendance('Hadir')
      setMessage('')
      
      // Refresh wishes
      fetchWishes()
      alert('Terima kasih! Konfirmasi Anda telah dikirim.')
    } catch (error) {
      console.error('Error submitting RSVP:', error.message)
      alert('Gagal mengirim konfirmasi. Silakan coba lagi.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 px-4" id="rsvp">
      <motion.div 
        className="max-w-2xl mx-auto glass-card p-8 md:p-12 rounded-2xl golden-shadow"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-display text-3xl text-primary text-center mb-10">Konfirmasi Kehadiran</h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="font-body text-xs tracking-wider text-on-surface-variant block mb-2 uppercase">Nama Lengkap</label>
            <input 
              className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary transition-all p-3 font-body text-base" 
              placeholder="Masukkan nama Anda" 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="font-body text-xs tracking-wider text-on-surface-variant block mb-2 uppercase">Jumlah Tamu</label>
            <select 
              className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary transition-all p-3 font-body text-base"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option>1 Orang</option>
              <option>2 Orang</option>
            </select>
          </div>
          
          <div>
            <label className="font-body text-xs tracking-wider text-on-surface-variant block mb-2 uppercase">Kehadiran</label>
            <div className="flex gap-4">
              <button 
                className={`flex-1 py-3 border border-outline rounded-full font-body text-xs tracking-wider transition-all uppercase ${attendance === 'Hadir' ? 'bg-primary text-white border-primary' : 'hover:bg-secondary-container/20'}`} 
                type="button"
                onClick={() => setAttendance('Hadir')}
              >
                Hadir
              </button>
              <button 
                className={`flex-1 py-3 border border-outline rounded-full font-body text-xs tracking-wider transition-all uppercase ${attendance === 'Tidak Hadir' ? 'bg-primary text-white border-primary' : 'hover:bg-secondary-container/20'}`} 
                type="button"
                onClick={() => setAttendance('Tidak Hadir')}
              >
                Tidak Hadir
              </button>
            </div>
          </div>
          
          <div>
            <label className="font-body text-xs tracking-wider text-on-surface-variant block mb-2 uppercase">Ucapan & Doa Restu</label>
            <textarea 
              className="w-full bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary transition-all p-3 font-body text-base" 
              placeholder="Tuliskan pesan Anda" 
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          
          <button 
            className="w-full py-4 bg-primary text-white rounded-full font-body text-xs tracking-[0.2em] hover:opacity-90 transition-all active:scale-95 shadow-lg uppercase disabled:opacity-50"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'MENGIRIM...' : 'KIRIM UCAPAN'}
          </button>
        </form>
        
        {/* Wishes Display */}
        <div className="mt-16 space-y-4 max-h-96 overflow-y-auto pr-2">
          {wishes.map((wish, index) => (
            <div key={index} className="p-6 bg-white/40 rounded-xl border border-white/20">
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold text-primary font-body text-sm">{wish.name}</p>
                <span className={`text-[10px] font-body px-2 py-0.5 rounded-full ${wish.attendance === 'Hadir' ? 'bg-secondary-container/50 text-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                  {wish.attendance}
                </span>
              </div>
              <p className="text-on-surface-variant italic font-body text-sm">"{wish.message}"</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
