import { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-foreground font-sans">
      
      {/* NAVBAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled ? 'bg-primary/95 backdrop-blur-md py-4 shadow-sm shadow-foreground/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-serif text-xl tracking-wide font-medium">
            Studio Legale <span className="text-accent italic">Villa</span>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-sm font-bold tracking-wide uppercase px-5 py-2.5 bg-accent/10 text-[#ac8831] hover:bg-accent hover:text-white rounded-full transition-colors"
          >
            Prenota
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center px-6 md:px-12 overflow-hidden pt-20">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 bg-primary overflow-hidden pointer-events-none">
          {/* L'immagine viene scalata del 15% (scale-[1.15]) per spingere il watermark fuori dallo schermo */}
          <div 
            className="absolute inset-0 w-full h-full bg-[url('/hero-bg.png')] bg-cover bg-center origin-center scale-[1.15] opacity-20" 
          ></div>
          {/* Gradiente per sfumare l'immagine verso il colore di fondo e mantenere i testi iper-leggibili */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/40 to-primary"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6">Fondato sull'Eccellenza</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-8 text-balance text-foreground">
            Studio Legale <br/>
            <span className="italic text-foreground">Villa.</span>
          </h1>
          <p className="text-foreground text-lg md:text-xl font-medium max-w-2xl text-balance mb-12">
            Tre generazioni di rigore, precisione e discrezione. Difendiamo i vostri interessi con una competenza forgiata dal tempo.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 px-8 py-4 bg-foreground text-primary rounded-sm font-semibold tracking-wide hover:bg-accent hover:text-white transition-colors border border-foreground hover:border-transparent"
          >
            Prenota una Consulenza
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* COMPETENCES (MINIMAL UI) */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between mb-16 md:mb-24">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">Le Nostre <span className="italic text-accent">Competenze</span></h2>
            <p className="max-w-md font-medium text-foreground text-sm md:text-base">Focus chirurgico in ambiti legali complessi, dove la precisione analitica determina il verdetto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
            <CompetenceCard 
              num="01" 
              title="Diritto Civile" 
              desc="Contrattualistica d'impresa, diritto di famiglia e tutela della proprietà intellettuale e materiale."
            />
            <CompetenceCard 
              num="02" 
              title="Diritto Penale" 
              desc="Strategie difensive rigorose per procedimenti penali tributari, societari e responsabilità degli enti."
            />
            <CompetenceCard 
              num="03" 
              title="Diritto Costituzionale" 
              desc="Consulenza avanzata per procedimenti di revisione costituzionale e tutela dei diritti fondamentali."
            />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-foreground/5 text-foreground border-y border-border">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <p className="text-foreground font-bold uppercase tracking-[0.2em] text-xs mb-8">Il Nostro Manifesto</p>
          <div className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight font-medium">
            <span className="text-foreground block mb-6">La maggior parte degli studi legali si concentra su processi infiniti.</span>
            <span className="italic text-accent block font-bold">Noi ci concentriamo su vittorie di precisione.</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="font-serif font-bold text-2xl mb-4 text-foreground">Studio Legale <span className="text-accent italic">Villa</span></div>
            <p className="text-foreground font-medium text-sm">Elevata competenza giuridica unita ad una visione d'insieme chiara, dal 1960.</p>
          </div>
          
          <div className="flex flex-col gap-2 text-sm text-foreground font-mono font-medium">
            <span className="text-foreground uppercase tracking-wider font-bold text-xs mb-2 font-sans">Contatti</span>
            <p>Viale Alcide De Gasperi, 6</p>
            <p>24047 Treviglio (BG)</p>
            <p className="mt-2">P. IVA: 00416300168</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono font-medium text-foreground">
          <p>&copy; {new Date().getFullYear()} Studio Legale Villa. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
            <span className="font-bold">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function CompetenceCard({ num, title, desc }) {
  return (
    <div className="group border-t border-border pt-6 cursor-default hover:border-accent/40 transition-colors duration-500">
      <div className="text-accent font-mono font-bold text-sm mb-8">{num}</div>
      <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-foreground font-medium text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/95 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white border-2 border-foreground p-8 md:p-12 shadow-2xl z-10 overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
        >
          <X size={24} strokeWidth={2} />
        </button>

        {!submitted ? (
          <div>
            <h3 className="font-serif font-bold text-3xl mb-2 text-foreground">Prenota una Consulenza</h3>
            <p className="text-foreground font-medium text-sm mb-8 border-b border-border pb-6">Compila con i tuoi dati per un primo contatto riservato.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-widest">Nome</label>
                  <input required type="text" className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors font-medium" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-widest">Cognome</label>
                  <input required type="text" className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors font-medium" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-widest">Email</label>
                <input required type="email" className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors font-medium" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-widest">Area di Interesse</label>
                <select className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors font-medium cursor-pointer appearance-none">
                  <option>Diritto Civile</option>
                  <option>Diritto Penale</option>
                  <option>Diritto Costituzionale</option>
                  <option>Altro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-widest">Messaggio Breve</label>
                <textarea rows="3" className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors resize-none font-medium"></textarea>
              </div>

              <button type="submit" className="w-full bg-foreground text-primary font-bold tracking-wide py-4 hover:bg-accent hover:text-white transition-colors mt-2">
                Invia Richiesta
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <CheckCircle2 size={48} className="text-accent mb-6" strokeWidth={2} />
            <h3 className="font-serif font-bold text-2xl mb-2 text-foreground">Richiesta Inviata</h3>
            <p className="text-foreground font-medium text-sm">Lo Studio Legale Villa la contatterà al più presto.</p>
          </div>
        )}
      </div>
    </div>
  );
}
