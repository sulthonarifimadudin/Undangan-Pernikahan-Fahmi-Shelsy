import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function Dashboard() {
  const [wishes, setWishes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
    } finally {
      setIsLoading(false)
    }
  }

  // Calculate stats
  const totalRSVP = wishes.length
  const totalHadir = wishes.filter(w => w.attendance === 'Hadir').length
  const totalTidakHadir = wishes.filter(w => w.attendance === 'Tidak Hadir').length
  
  const totalOrang = wishes
    .filter(w => w.attendance === 'Hadir')
    .reduce((acc, curr) => {
      const count = parseInt(curr.guests) || 1
      return acc + count
    }, 0)

  return (
    <div className="min-h-screen bg-surface-container-low p-4 md:p-8 font-body">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-display text-3xl text-primary">Dashboard Tamu</h1>
            <p className="text-on-surface-variant text-sm">Data konfirmasi kehadiran keluarga & teman</p>
          </div>
          <button 
            onClick={fetchWishes}
            className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-primary flex items-center gap-2 px-4"
          >
            <span className="material-symbols-outlined text-sm">refresh</span>
            <span className="text-xs font-bold uppercase tracking-wider">Refresh</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-6 rounded-xl text-center">
            <p className="text-xs tracking-wider text-on-surface-variant uppercase mb-1">Total Respon</p>
            <p className="font-display text-3xl text-primary">{totalRSVP}</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center border-l-4 border-primary">
            <p className="text-xs tracking-wider text-on-surface-variant uppercase mb-1">Hadir (Sesi/KK)</p>
            <p className="font-display text-3xl text-primary">{totalHadir}</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <p className="text-xs tracking-wider text-on-surface-variant uppercase mb-1">Total Orang</p>
            <p className="font-display text-3xl text-primary">{totalOrang}</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center opacity-60">
            <p className="text-xs tracking-wider text-on-surface-variant uppercase mb-1">Tidak Hadir</p>
            <p className="font-display text-3xl text-secondary">{totalTidakHadir}</p>
          </div>
        </div>

        {/* Table / List */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="p-6 border-b border-outline/30">
            <h2 className="font-display text-xl text-primary">Daftar Tamu & Ucapan</h2>
          </div>
          
          {isLoading ? (
            <div className="p-12 text-center text-on-surface-variant">Loading data...</div>
          ) : wishes.length === 0 ? (
            <div className="p-12 text-center text-on-surface-variant">Belum ada data rsvp masuk.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-container-highest text-on-surface-variant uppercase text-xs tracking-wider">
                  <tr>
                    <th className="p-4">Nama</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Jumlah</th>
                    <th className="p-4">Ucapan</th>
                    <th className="p-4">Waktu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline/10">
                  {wishes.map((wish) => (
                    <tr key={wish.id} className="hover:bg-white/40 transition-colors">
                      <td className="p-4 font-bold text-primary">{wish.name}</td>
                      <td className="p-4">
                        <span className={`text-xs px-3 py-1 rounded-full font-bold ${wish.attendance === 'Hadir' ? 'bg-secondary-container/50 text-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                          {wish.attendance}
                        </span>
                      </td>
                      <td className="p-4 text-on-surface-variant">{wish.guests}</td>
                      <td className="p-4 text-on-surface-variant max-w-xs truncate md:max-w-md md:whitespace-normal italic">
                        "{wish.message}"
                      </td>
                      <td className="p-4 text-xs text-on-surface-variant opacity-70">
                        {wish.created_at ? new Date(wish.created_at).toLocaleString('id-ID') : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
