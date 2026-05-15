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
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-6">Fondato sulla professionalità</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-8 text-balance text-foreground">
            Studio Legale <br/>
            <span className="italic text-foreground">Avv. Giuseppe Villa.</span>
          </h1>
          <p className="text-foreground text-lg md:text-xl font-medium max-w-2xl text-balance mb-12">
            Tre generazioni di rigore, precisione e discrezione. Difendiamo i vostri interessi con una competenza forgiata dal tempo.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-4 px-10 py-5 text-lg bg-foreground text-primary rounded-sm font-bold tracking-wide hover:bg-accent hover:text-white transition-colors border border-foreground hover:border-transparent"
          >
            Prenota un appuntamento
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* COMPETENCES (MINIMAL UI) */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-6xl text-foreground">Le Nostre <span className="italic text-accent">Competenze</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 max-w-5xl mx-auto">
            <CompetenceCard 
              num="01" 
              title="Diritto Civile" 
              items={[
                "Diritto di famiglia e delle persone: Separazioni e Divorzi, Divisione ereditaria, Procedimenti avanti al tribunale per i minorenni ecc.",
                "Recupero crediti",
                "Risarcimento danni da circolazione stradale e da infortuni sul lavoro"
              ]}
            />
            <CompetenceCard 
              num="02" 
              title="Diritto Penale" 
              items={[
                "Assistenza e Difesa nei procedimenti penali avanti l'ufficio del Giudice di Pace e Tribunale ordinario",
                "Ricorsi per la restituzione della Patente di Guida"
              ]}
            />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-foreground/5 text-foreground border-y border-border">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <p className="text-foreground font-bold uppercase tracking-[0.2em] text-xs mb-8">Il Nostro Manifesto</p>
          <div className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight font-medium max-w-4xl mx-auto">
            <span className="text-foreground block mb-6">Professionalità, Competenza ed Esperienza sono i pilastri su cui ci basiamo da più di 50 anni</span>
            <span className="italic text-accent block font-bold text-5xl md:text-6xl lg:text-7xl mt-8 leading-none">per offrire le soluzioni più efficienti.</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="font-serif font-bold text-2xl mb-4 text-foreground">Studio Legale <span className="text-accent italic">Villa</span></div>
            <div className="text-foreground font-medium text-base">
              <p>Avv. Giangiacomo Villa</p>
              <p className="mt-4">Avv. Giuseppe Villa</p>
            </div>
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

function CompetenceCard({ num, title, items }) {
  return (
    <div className="group border-t border-border pt-8 cursor-default hover:border-accent/40 transition-colors duration-500">
      <div className="text-accent font-mono font-bold text-lg mb-8">{num}</div>
      <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground group-hover:text-accent transition-colors">{title}</h3>
      <ul className="text-foreground font-medium text-lg md:text-xl leading-relaxed space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-accent mt-[8px] text-[12px]">■</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    formData.append("access_key", "e988a9f9-e789-47cf-b77b-9ef6908f5b34");
    // Opzionale: per fare in modo che l'email di risposta (Reply-To) sia quella dell'utente
    // Web3forms riconosce automaticamente il campo 'email' se si chiama così.

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        alert("Si è verificato un errore durante l'invio. Riprova più tardi.");
      }
    } catch (error) {
      console.error(error);
      alert("Errore di connessione. Riprova più tardi.");
    }
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
            <h3 className="font-serif font-bold text-3xl mb-2 text-foreground">Prenota un Appuntamento</h3>
            <p className="text-foreground font-medium text-sm mb-8 border-b border-border pb-6">Compila con i tuoi dati per un primo contatto riservato.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-widest">Nome</label>
                  <input required name="nome" type="text" className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors font-medium" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-widest">Cognome</label>
                  <input required name="cognome" type="text" className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors font-medium" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-widest">Email</label>
                <input required name="email" type="email" className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors font-medium" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-foreground uppercase tracking-widest">Area di Interesse</label>
                <select name="area_interesse" className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors font-medium cursor-pointer appearance-none">
                  <option value="Diritto Civile">Diritto Civile</option>
                  <option value="Diritto Penale">Diritto Penale</option>
                  <option value="Altro">Altro</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-widest">Messaggio Breve</label>
                <textarea name="messaggio" rows="3" className="bg-transparent border border-border p-3 text-sm focus:outline-none focus:border-foreground text-foreground transition-colors resize-none font-medium"></textarea>
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
