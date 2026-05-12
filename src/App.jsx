import { useState } from 'react'
import Hero from './components/Hero'
import Quote from './components/Quote'
import Profile from './components/Profile'
import Event from './components/Event'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import Envelope from './components/Envelope'
import Footer from './components/Footer'

function App() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="bg-background text-on-surface font-body selection:bg-secondary-container">
      {/* Top Navigation / Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/65 backdrop-blur-md border-b border-white/20 shadow-[0_40px_40px_-15px_rgba(141,119,95,0.15)] h-16 flex justify-between items-center px-4 md:px-16">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">music_note</span>
          <span className="font-accent text-primary text-xl">Shelsy & Fahmi</span>
        </div>
        <button className="text-on-surface-variant hover:opacity-70 transition-opacity duration-500 active:scale-95">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <Quote />
        <Profile />
        <Event />
        <Gallery />
        <RSVP />
        <Envelope />
        <Footer />
      </main>

      {/* Music Toggle */}
      <button 
        className="fixed bottom-24 right-6 md:bottom-10 md:right-10 w-12 h-12 glass-card rounded-full flex items-center justify-center text-primary z-40 golden-shadow hover:scale-110 transition-transform active:scale-95"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: isPlaying ? "'FILL' 1" : "'FILL' 0" }}>
          {isPlaying ? 'music_note' : 'music_off'}
        </span>
      </button>

      {/* Bottom Navigation Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-3 px-4 bg-surface/65 backdrop-blur-md border-t border-white/20 shadow-[0_-40px_40px_-15px_rgba(141,119,95,0.15)] z-50 rounded-t-xl">
        <a className="flex flex-col items-center justify-center text-primary bg-secondary-container/30 rounded-full px-4 py-1 transition-transform active:scale-90" href="#home">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          <span className="text-[10px] font-body mt-1 uppercase tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 hover:bg-secondary-container/20 transition-all" href="#event">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-body mt-1 uppercase tracking-wider">Event</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 hover:bg-secondary-container/20 transition-all" href="#gallery">
          <span className="material-symbols-outlined">photo_library</span>
          <span className="text-[10px] font-body mt-1 uppercase tracking-wider">Gallery</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant opacity-60 hover:bg-secondary-container/20 transition-all" href="#rsvp">
          <span className="material-symbols-outlined">mail</span>
          <span className="text-[10px] font-body mt-1 uppercase tracking-wider">RSVP</span>
        </a>
      </nav>
    </div>
  )
}

export default App
