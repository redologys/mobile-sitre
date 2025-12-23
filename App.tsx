
import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Star, ChevronRight, Zap, Menu, X, Navigation, Phone, CheckCircle2 
} from 'lucide-react';
import { Button, ServiceCard, SectionHeader } from './components/UI';
import { Assistant } from './components/Assistant';
import { SERVICES, REVIEWS, CONTACT_INFO, NAV_LINKS, STORE_IMAGES } from './constants.tsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${
      isScrolled ? 'bg-black/80 backdrop-blur-2xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.3)] group-hover:shadow-blue-500/50 group-hover:-translate-y-1 transition-all duration-500">
            <Smartphone className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none">
              Mobile <span className="text-blue-600">Experts</span>
            </span>
            <span className="text-[10px] text-zinc-500 tracking-[0.4em] font-black uppercase leading-none mt-1.5">Brooklyn Studio</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] font-black text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.3em] relative group">
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a href={`tel:${CONTACT_INFO.phone}`}>
            <Button variant="primary" className="py-3 px-8 rounded-full">
              {CONTACT_INFO.phone}
            </Button>
          </a>
        </div>

        <button className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/5 p-12 flex flex-col gap-10 animate-in fade-in slide-in-from-top-6 duration-500">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-zinc-200 uppercase tracking-tighter italic hover:text-blue-500 transition-colors">
              {link.name}
            </a>
          ))}
          <a href={`tel:${CONTACT_INFO.phone}`} className="w-full">
            <Button className="w-full h-16">Call Emergency Line</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 font-sans selection:bg-blue-600/50 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[200px] animate-subtle-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[180px] animate-subtle-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-500/5 border border-blue-500/10 mb-10">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="text-blue-500 fill-blue-500" />)}
                </div>
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Elite Repair Lab • Brooklyn</span>
              </div>
              
              <h1 className="text-6xl lg:text-[7.5rem] font-black text-white leading-[0.85] mb-12 tracking-tighter uppercase italic">
                Precision <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">Mastery.</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-zinc-400 mb-14 max-w-xl leading-relaxed font-medium border-l-2 border-blue-500/30 pl-8">
                The pinnacle of digital restoration. High-tech diagnostics fused with architectural craftsmanship for your most essential devices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a href={`tel:${CONTACT_INFO.phone}`} className="w-full sm:w-auto">
                  <Button className="w-full h-20 text-xs px-10">Start Instant Triage</Button>
                </a>
                <Button variant="secondary" className="w-full sm:w-auto h-20 text-xs border-zinc-800 px-10">
                  Explore Inventory <ChevronRight size={20} className="text-blue-500" />
                </Button>
              </div>
              
              <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-14">
                {[
                  { val: "5.0", label: "Google Rating" },
                  { val: "29+", label: "Master Techs" },
                  { val: "9PM", label: "Daily Access" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-black text-white uppercase italic tracking-tighter">{stat.val}</span>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.3em] mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block animate-in zoom-in duration-[1.5s]">
              <div className="relative z-10 w-full aspect-[4/5] max-w-[520px] ml-auto group">
                <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/20 to-transparent blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative h-full rounded-[3rem] border border-white/10 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                  <img 
                    src={STORE_IMAGES[0]} 
                    alt="Precision Lab" 
                    className="w-full h-full object-cover grayscale-[0.3] brightness-90 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[3s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                  
                  <div className="absolute bottom-12 left-12 right-12 p-10 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 group-hover:-translate-y-2 transition-transform duration-700">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Zap className="text-white" size={28} />
                      </div>
                      <div>
                        <h4 className="text-white font-black text-xl uppercase tracking-tighter italic">Live Triage</h4>
                        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">Our actual lab bench on Liberty Ave.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Frame Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 border-t-2 border-r-2 border-blue-500/20 rounded-tr-[3rem] -mr-6 -mt-6"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 border-b-2 border-l-2 border-blue-500/20 rounded-bl-[3rem] -ml-6 -mb-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-8">
          <SectionHeader 
            label="Ecosystem Services" 
            title={<>Full Spectrum <br /><span className="text-zinc-700">Technical Ops.</span></>}
            subtitle="Our engineers deploy institutional-grade infrastructure and military-spec componentry for every operation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-8">
           <SectionHeader 
            label="The Studio Tour" 
            title={<>Curated Space <br /><span className="text-zinc-700">for Excellence.</span></>}
            subtitle="Step inside our Brooklyn flagship. A modern hub designed for precision diagnostics and premium client service."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 row-span-2 relative group overflow-hidden rounded-[3rem] border border-white/5">
              <img src={STORE_IMAGES[4]} alt="Interior View" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute bottom-10 left-10 z-10">
                <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.5em]">Main Atrium</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/5 aspect-square">
              <img src={STORE_IMAGES[2]} alt="Accessories" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/5 aspect-square">
              <img src={STORE_IMAGES[3]} alt="Displays" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-40 bg-zinc-950/30 relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
             <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-20 bg-blue-600/10 blur-[150px] rounded-full opacity-30"></div>
                <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                   <img 
                    src={STORE_IMAGES[1]} 
                    alt="Tech Lab Environment" 
                    className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
                  <div className="absolute bottom-16 left-16">
                    <p className="text-white font-black text-5xl italic uppercase tracking-tighter leading-none">Established <br /> Brooklyn 2024</p>
                    <div className="mt-4 flex gap-2">
                       <span className="px-3 py-1 bg-blue-600 text-[9px] font-black uppercase tracking-widest text-white rounded-md">Vetted</span>
                       <span className="px-3 py-1 bg-zinc-800 text-[9px] font-black uppercase tracking-widest text-zinc-300 rounded-md">Precision Ops</span>
                    </div>
                  </div>
                </div>
             </div>

             <div className="order-1 lg:order-2">
                <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.6em] mb-8">The Professional Edge</h2>
                <h3 className="text-6xl font-black text-white mb-16 uppercase italic tracking-tighter leading-[0.9]">Why the Elite <br />Trust Us.</h3>
                
                <div className="space-y-12">
                  {[
                    { title: "Protocol Speed", desc: "Complex logic board operations finalized within tight windows." },
                    { title: "MFi & OEM Standard", desc: "We deploy Original Equipment grade components exclusively." },
                    { title: "Master Certification", desc: "Technicians maintain continuous tier-1 brand credentials." },
                    { title: "Brooklyn Integrity", desc: "Serving the metropolitan core with a flawless satisfaction mandate." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-10 group">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl border border-white/10 bg-zinc-900 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-500">
                        <CheckCircle2 className="text-blue-500 group-hover:text-white" size={28} />
                      </div>
                      <div className="border-b border-white/5 pb-10 flex-grow">
                        <h4 className="text-2xl font-black text-white uppercase italic tracking-tight mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                        <p className="text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.6em] mb-8">Reputation Metric</h2>
              <h3 className="text-6xl font-black text-white uppercase italic tracking-tighter leading-none">CLIENT <br /> INTELLIGENCE</h3>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-zinc-900/40 border border-white/10 backdrop-blur-xl flex items-center gap-10 shadow-2xl">
               <div className="text-6xl font-black text-white">5.0</div>
               <div className="h-16 w-px bg-zinc-800"></div>
               <div>
                  <div className="flex text-blue-500 mb-2 gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor"/>)}
                  </div>
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em]">Institutional Verification</p>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {REVIEWS.map((review, i) => (
              <div key={i} className="p-12 rounded-[3rem] bg-zinc-900/20 border border-white/5 flex flex-col justify-between hover:border-blue-500/30 hover:bg-zinc-900/40 transition-all duration-700 hover:-translate-y-2 group">
                <div className="mb-10">
                  <div className="flex text-blue-500 mb-8 gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor"/>) }
                  </div>
                  <p className="text-zinc-200 text-xl italic font-medium leading-relaxed group-hover:text-white transition-colors">"{review.text}"</p>
                </div>
                <div className="flex items-center justify-between pt-10 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-black text-white uppercase shadow-lg shadow-blue-500/20">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-bold text-white uppercase tracking-tight text-base italic">{review.name}</span>
                  </div>
                  <span className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section id="contact" className="py-40 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.6em] mb-8">Global Hub</h2>
              <h3 className="text-6xl font-black text-white mb-16 uppercase italic tracking-tighter leading-[0.9]">The Brooklyn <br />Master Lab.</h3>
              
              <div className="space-y-16">
                <div className="group cursor-pointer">
                  <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.5em] mb-5">Address Protocol</p>
                  <h4 className="text-3xl font-black text-white uppercase italic tracking-tight group-hover:text-blue-500 transition-colors">{CONTACT_INFO.address}</h4>
                </div>

                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.5em] mb-5">Direct Comms</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-2xl font-bold text-zinc-300 hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.5em] mb-5">Op Window</p>
                    <p className="text-2xl font-bold text-zinc-300 italic uppercase">{CONTACT_INFO.hours}</p>
                  </div>
                </div>

                <div className="pt-10 flex flex-col gap-6">
                  <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full h-20 group text-xs">
                      <Navigation size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Live GPS Routing
                    </Button>
                  </a>
                  <Button variant="outline" className="w-full h-20 text-xs">
                    <Phone size={20} /> Encrypted Consultation
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 h-[700px] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative group">
              <iframe 
                  title="Mobile Experts HQ Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.29344474753!2d-73.8679196234288!3d40.68291587139704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25dfbe2e30f43%3A0xc06720f4c3c3a9f!2s1134%20Liberty%20Ave%2C%20Brooklyn%2C%20NY%2011208!5e0!3m2!1sen!2sus!4v1715400000000!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full grayscale invert opacity-40 contrast-125 group-hover:opacity-70 transition-opacity duration-1000 border-0"
                  loading="lazy"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 pb-20">
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10">
                  <Smartphone className="text-white w-7 h-7" />
                </div>
                <span className="text-3xl font-black text-white uppercase tracking-tighter italic">Mobile Experts <span className="text-blue-600">Inc.</span></span>
              </div>
              <p className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.6em]">Premium Tech Restoration • Established 2024</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-16">
              {['Instagram', 'Facebook', 'Google Business', 'Privacy Policy'].map(link => (
                <a key={link} href="#" className="text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-[0.4em] font-black">{link}</a>
              ))}
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-zinc-800 text-[9px] uppercase tracking-[0.5em] font-black">© 2024 MOBILE EXPERTS INCORPORATED. ALL SYSTEMS SECURE.</p>
            <div className="flex gap-10">
               <span className="text-zinc-800 text-[9px] uppercase tracking-[0.4em] font-black border border-white/5 px-4 py-2 rounded-lg">Level 4 Secure</span>
               <span className="text-zinc-800 text-[9px] uppercase tracking-[0.4em] font-black border border-white/5 px-4 py-2 rounded-lg">OEM Authorized</span>
            </div>
          </div>
        </div>
      </footer>

      <Assistant />
    </div>
  );
};

export default App;
