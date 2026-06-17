import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Premium service offerings structured for filtering
const SERVICES = [
  { id: 1, name: 'Premium Hair Styling & Keratin', category: 'Hair', price: '₹1,499+', desc: 'Advanced structural hair treatment using elite global brands.' },
  { id: 2, name: 'Luxury Bridal Makeup', category: 'Makeup', price: '₹9,999+', desc: 'High-definition celebrity aesthetic tailored for premium photography.' },
  { id: 3, name: 'Advanced Hydrafacial Treatment', category: 'Skin', price: '₹3,499+', desc: 'Multi-step skin rejuvenation process engineered for instant glow.' },
  { id: 4, name: 'Chrome & Gel Nail Artistry', category: 'Nails', price: '₹999+', desc: 'Long-lasting precision overlay with custom micro-art work.' },
  { id: 5, name: 'Signature Balayage & Highlights', category: 'Hair', price: '₹4,500+', desc: 'Custom dimensional hand-painted color detailing for natural movement.' },
  { id: 6, name: 'Luxury Skin Detox Therapy', category: 'Skin', price: '₹2,199+', desc: 'Deep pore extraction and botanical nutrition defense layer.' }
];

// Luxury Demo Testimonials Data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Riya Sharma",
    role: "Verified Client",
    rating: "★★★★★",
    text: "Absolutely the best salon experience in Kanpur. Got my Balayage done here by their senior stylist. The precision and care they take with hair health is unmatched. Definitely premium!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Ananya Kapoor",
    role: "Bridal Client",
    rating: "★★★★★",
    text: "Booked them for my bridal makeup last winter. The high-definition finish was completely flawless under heavy photography lights. They made my vision turn to reality seamlessly.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Regular Member",
    rating: "★★★★★",
    text: "Their clinical skin treatments are top-notch. The Hydrafacial setup is completely hygienic, high-tech, and worth every rupee. Plus, sitting right above THF makes it a perfect weekend ritual.",
    date: "3 days ago"
  }
];

export default function GeetanjaliDemo() {
  const [activeTab, setActiveTab] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices = activeTab === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <div className="bg-[#0b0b0c] text-[#f4f4f5] min-h-screen font-sans antialiased selection:bg-amber-400 selection:text-black">
      
      {/* ========================================================
          1. ULTRA-PREMIUM NAVIGATION ARCHITECTURE
         ======================================================== */}
      <nav className="w-full border-b border-zinc-800/50 backdrop-blur-md sticky top-0 z-50 bg-[#0b0b0c]/95 transition-all duration-300">
        <div className="w-full bg-[#070708] border-b border-zinc-900/60 px-8 py-2 flex justify-between items-center text-[10px] font-mono tracking-[0.15em] text-zinc-500">
          <div className="flex items-center gap-4">
            <span>KANPUR • INDIA</span>
            <span className="text-zinc-700">|</span>
            <span className="text-amber-500/80 animate-pulse">● RESERVATIONS OPEN</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="tel:+91" className="hover:text-zinc-300 transition-colors">CALL AT STUDIO</a>
            <a href="#location" className="hover:text-zinc-300 transition-colors">DIRECTIONS</a>
          </div>
        </div>

        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <a href="/" className="flex flex-col group focus:outline-none">
            <span className="text-2xl md:text-3xl font-serif tracking-[0.25em] text-white font-light group-hover:text-amber-500 transition-colors duration-300">
              GEETANJALI
            </span>
            <span className="text-[8px] tracking-[0.58em] text-zinc-500 font-mono -mt-1 transition-all duration-300 group-hover:text-zinc-400 group-hover:tracking-[0.62em]">
              STUDIO • CIVIL LINES
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
            <a href="#testimonials" className="hover:text-amber-400 transition-colors duration-200 relative group py-2">
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors duration-200 relative group py-2">
              Technical Menu
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#location" className="hover:text-amber-400 transition-colors duration-200 relative group py-2">
              The Residency
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="relative text-[10px] uppercase tracking-[0.2em] font-semibold text-black bg-amber-500 px-6 py-3 border border-amber-500 transition-all duration-300 hover:bg-transparent hover:text-amber-500 focus:outline-none"
            >
              Book Priority Slot
            </button>
          </div>
        </div>
      </nav>

      {/* ========================================================
          2. PREMIUM HERO SECTION WITH IMAGE WRAPPERS
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-28 grid md:grid-cols-12 gap-12 items-center border-b border-zinc-800/40">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-400 w-fit mb-6">
            Kanpur's Premier Luxury Flagship
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-[1.15] text-white mb-6">
            Where Aesthetic <br />
            <span className="font-serif italic text-amber-500/90">Meets Precision.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mb-8 font-light">
            Experience world-class hair engineering, clinical skin treatments, and red-carpet makeup styling. Strategically situated above The Hazelnut Factory, Civil Lines.
          </p>
          <div className="flex gap-4">
            <a
              href="#services"
              className="border-[0.5px] border-zinc-700 text-center text-white text-xs uppercase tracking-widest px-8 py-3 bg-zinc-900/60 hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              Explore Menu
            </a>
          </div>
        </div>

        <div className="md:col-span-5 relative flex justify-center items-center">
          <div className="p-4 border-[0.5px] border-zinc-800 bg-zinc-900/20 w-full max-w-sm relative group">
            <div className="aspect-[3/4] w-full bg-zinc-900 border border-zinc-800 relative overflow-hidden flex flex-col justify-center items-center text-center p-6">
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-600"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-600"></div>
              <span className="text-zinc-600 text-xs font-mono tracking-widest uppercase mb-1">Lookbook Preview</span>
              <p className="text-[10px] text-zinc-500 max-w-[200px] italic">Custom interactive media layer mapped dynamically to brand assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. HIGH-END CLIENT TESTIMONIALS SECTION
         ======================================================== */}
      <section id="testimonials" className="py-24 border-b border-zinc-800/40 bg-[#09090a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-zinc-500 mb-2">// SOCIAL PROOF</p>
            <h3 className="text-3xl font-serif font-light text-white tracking-wide">Verified Guest Experiences</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <div 
                key={item.id} 
                className="p-8 border border-zinc-800/60 bg-[#0b0b0c] flex flex-col justify-between relative"
              >
                {/* Visual Quote Accent Mark */}
                <span className="absolute top-4 right-6 text-zinc-800/60 text-4xl font-serif pointer-events-none">“</span>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold tracking-wide text-white">{item.name}</h4>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">{item.role}</p>
                    </div>
                    <span className="text-amber-500 font-mono text-[11px] tracking-tight">{item.rating}</span>
                  </div>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>

                <div className="border-t border-zinc-900 mt-6 pt-4 flex justify-between items-center text-[9px] font-mono text-zinc-600">
                  <span>VIA GOOGLE MAPS</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. ASYMMETRIC FILTERABLE SERVICE COMPONENT (Just below)
         ======================================================== */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-zinc-500 mb-2">// CAPABILITIES</p>
          <h3 className="text-3xl font-serif font-light text-white tracking-wide">Signature Technical Menu</h3>
        </div>
        
        {/* Architectural Tab System */}
        <div className="flex justify-center border-b border-zinc-800/80 mb-16 max-w-xl mx-auto overflow-x-auto scrollbar-none">
          {['All', 'Hair', 'Skin', 'Makeup', 'Nails'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 pb-4 text-xs uppercase tracking-widest font-medium transition-all relative min-w-[70px] ${
                activeTab === tab ? 'text-amber-500 font-semibold' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[1px] bg-amber-500" />
              )}
            </button>
          ))}
        </div>

        {/* Fine-Border Asymmetric Grid System */}
        <div className="grid md:grid-cols-2 gap-px bg-zinc-800/60 border border-zinc-800/60 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {filteredServices.map(service => (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="p-8 bg-[#0b0b0c] flex flex-col justify-between group hover:bg-zinc-900/20 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg font-serif font-light tracking-wide text-white group-hover:text-amber-400 transition-colors">{service.name}</h4>
                    <span className="text-amber-500 font-mono text-sm pl-4 whitespace-nowrap">{service.price}</span>
                  </div>
                  <p className="text-zinc-500 text-xs font-light leading-relaxed max-w-sm">{service.desc}</p>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono bg-zinc-900/50 w-fit px-2 py-0.5 border border-zinc-800/80">
                  {service.category} Division
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================
          5. HIGH-END MULTI-COLUMN ANCHOR FOOTER
         ======================================================== */}
      <footer id="location" className="bg-[#070708] border-t border-zinc-900 pt-20 pb-8 text-zinc-400">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900">
          
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <h4 className="text-white text-lg font-serif tracking-[0.2em] mb-3">GEETANJALI</h4>
              <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-sm">
                A legacy of high-definition craft, offering architectural hair styling, precision aesthetic design, and red-carpet transformations for elite client portfolios.
              </p>
            </div>
            <div className="text-[10px] font-mono tracking-wider text-zinc-600">
              © 2026 GEETANJALI STUDIO. ALL RIGHTS RESERVED.
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h5 className="text-[10px] font-mono tracking-[0.25em] text-zinc-600 uppercase">// DIRECTORY</h5>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Hair Styling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Clinical Skin</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bridal Editorial</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Nail Couture</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h5 className="text-[10px] font-mono tracking-[0.25em] text-zinc-600 uppercase">// RESIDENCY HOURS</h5>
            <div className="text-xs font-light space-y-2 text-zinc-400">
              <div className="flex justify-between border-b border-zinc-900/80 pb-1">
                <span>Monday — Sunday</span>
                <span className="text-zinc-500 font-mono text-[11px]">10:00 AM - 08:00 PM</span>
              </div>
              <p className="text-[10px] text-zinc-500 italic mt-2">
                *Prior booking highly recommended for senior stylists.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h5 className="text-[10px] font-mono tracking-[0.25em] text-zinc-600 uppercase">// THE LOCATION</h5>
            <div className="p-4 bg-zinc-950 border border-zinc-900/80 rounded-none flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs font-semibold text-white mb-1">Civil Lines Flagship</p>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                  1st Floor, Bikramjit Singh Rd, above The Hazelnut Factory, Kanpur, UP 208001
                </p>
              </div>
              <a 
                href="https://maps.app.goo.gl/8c3gQs96WKTXeq8U8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-[10px] font-mono tracking-widest text-amber-500 hover:text-amber-400 transition-colors uppercase"
              >
                Open Live Route ↗
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-zinc-600 gap-4">
          <div>
            DESIGNED & ARCHITECTED BY <a href="https://wetoxx.netlify.app" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-500 transition-colors font-bold underline decoration-zinc-800 underline-offset-4">WETOXX AGENCY</a>
          </div>
          <div className="flex gap-4">
            <span className="text-zinc-700">SECURE SSL HOSTING</span>
            <span>•</span>
            <span className="text-zinc-700">REACT ENGINE V19</span>
          </div>
        </div>
      </footer>

      {/* ========================================================
          6. MODAL BOOKING DIALOG SYSTEM
         ======================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-[#0f0f11] p-8 rounded-none max-w-md w-full border border-zinc-800 relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="absolute top-4 right-4 text-zinc-500 hover:text-white font-light text-xs tracking-widest"
              >
                ✕ CLOSE
              </button>
              
              <div className="mb-6">
                <h3 className="text-xl font-serif text-white tracking-wide mb-1">Priority Slot Reservation</h3>
                <p className="text-zinc-500 text-xs font-light">Secure custom premium salon consultation callbacks instantly.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("VIP Appointment Request Captured!"); setIsModalOpen(false); }}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  className="w-full bg-black border border-zinc-800 p-3 text-xs tracking-wider text-white focus:outline-none focus:border-amber-500/70" 
                />
                <input 
                  type="tel" 
                  placeholder="WhatsApp Number" 
                  required 
                  className="w-full bg-black border border-zinc-800 p-3 text-xs tracking-wider text-white focus:outline-none focus:border-amber-500/70" 
                />
                <select className="w-full bg-black border border-zinc-800 p-3 text-xs tracking-wider text-zinc-400 focus:outline-none focus:border-amber-500/70 appearance-none">
                  <option>Select Core Division</option>
                  <option>Hair Engineering</option>
                  <option>Clinical Skin Treatment</option>
                  <option>Bridal Lookbook Design</option>
                  <option>Nail Couture</option>
                </select>
                
                <button 
                  type="submit" 
                  className="w-full bg-amber-500 text-black p-3 text-xs uppercase tracking-widest font-bold hover:bg-amber-400 transition duration-300"
                >
                  Request Priority Access
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}