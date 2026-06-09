import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ChevronRight, Star, Quote } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const images = {
    hero: "/src/assets/images/hero_fashion_desert_1780979678685.png",
    runway: "/src/assets/images/runway_glamour_1780979695640.png",
    detail: "/src/assets/images/rajasthan_embroidery_detail_1780979709712.png",
    backstage: "/src/assets/images/fashion_backstage_1780979727578.png"
  };

  return (
    <div className="overflow-hidden bg-[#0a0a0a]">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src={images.hero} 
            alt="Rajasthan Glamour Week" 
            className="w-full h-full object-cover scale-110 opacity-60"
          />
          <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-black/20 to-premium-black" />
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-8 text-white"
            >
              <h1 id="hero-title" className="text-[10vw] sm:text-[6vw] lg:text-[4rem] xl:text-[5rem] font-bold mb-8 md:mb-12 leading-[0.9] tracking-tighter uppercase font-black mix-blend-difference drop-shadow-2xl">
                ROYALTY <br />
                <span className="italic font-normal text-gold block lg:inline">MEETS</span> RUNWAY
              </h1>
              
              <div className="flex flex-wrap gap-8 md:gap-12 mt-12 md:mt-16 pb-12 border-b border-white/10 lg:w-fit">
                <div className="space-y-2">
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/30">Theme</p>
                  <p className="text-sm font-black tracking-[0.2em] uppercase">Desert Bloom</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/30">Location</p>
                  <p className="text-sm font-black tracking-[0.2em] uppercase">City Palace, Jaipur</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-white/30">Status</p>
                  <p className="text-sm font-black tracking-[0.2em] uppercase text-gold animate-pulse">Now Active</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="lg:col-span-4 lg:mb-12"
            >
              <p className="text-white/40 text-lg leading-relaxed font-light mb-12 italic border-l-2 border-gold pl-8">
                "Architecting a new visual language for global luxury, rooted in the sands of imperial Rajasthan."
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/events" className="group px-8 py-4 bg-white text-premium-black font-black tracking-[0.4em] uppercase text-[0.65rem] flex items-center justify-center transition-all hover:bg-gold hover:text-white">
                  Get Pass
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 flex space-x-12 text-white/20 text-[0.55rem] tracking-[0.4em] uppercase hidden lg:flex font-black vertical-text">
            <span>Scroll to Explore</span>
        </div>
      </section>

      {/* Leadership Section - The Visionaries */}
      <section className="py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/5 pb-12">
            <div className="max-w-2xl">
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-8 underline underline-offset-[16px] decoration-gold/20">The Visionaries</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">Architecting <br /><span className="text-gold not-italic">The Future</span></h2>
            </div>
            <div className="mt-8 md:mt-0 text-right">
                <p className="text-white/30 text-sm font-black tracking-[0.2em] uppercase">Leadership Council • 2026 Session</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Founder */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="group relative"
            >
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <img src={images.backstage} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Founder" />
                </div>
                <div className="absolute -bottom-12 -right-12 bg-gold p-12 shadow-2xl transition-transform group-hover:-translate-y-4">
                    <p className="text-white font-black uppercase tracking-[0.4em] text-[0.6rem] mb-2">The Founder</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-premium-black">Prince Laxkar</h3>
                </div>
                <div className="mt-20 max-w-sm">
                    <p className="text-white/40 text-sm italic leading-relaxed">
                        Envisioning a global platform that preserves the heritage of Rajasthan while embracing contemporary high-fashion ideals.
                    </p>
                </div>
            </motion.div>

            {/* Organiser */}
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group relative md:mt-40"
            >
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <img src={images.runway} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Organiser" />
                </div>
                <div className="absolute -bottom-12 -left-12 bg-white p-12 shadow-2xl transition-transform group-hover:-translate-y-4 border border-stone-100">
                    <p className="text-premium-black/40 font-black uppercase tracking-[0.4em] text-[0.6rem] mb-2">The Organiser</p>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-premium-black">Naksh Lakhara</h3>
                </div>
                <div className="mt-20 max-w-sm ml-auto text-right">
                    <p className="text-white/40 text-sm italic leading-relaxed">
                        Curating a seamless confluence of talent, resources, and royal aesthetics to execute India's most prestigious fashion week.
                    </p>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rewards & Opportunities Section */}
      <section className="py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.1),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.7rem] block mb-10 underline underline-offset-[16px] decoration-gold/20">Elite Incentives</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.85]">★ Exciting Rewards <br /><span className="text-gold font-sans not-italic">For The Winner ★</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-10 md:p-16 border border-white/5 bg-white/5 backdrop-blur-3xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="text-gold mb-8 md:mb-10 text-3xl md:text-4xl italic font-display">01</div>
                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-[0.2em]">Montrose Runway <br /> Fashion Week</h3>
                <p className="text-white/30 leading-relaxed font-light text-base md:text-lg">Direct entry to showcase on the international Montrose stage, gaining global designer exposure.</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="p-10 md:p-16 border border-white/5 bg-white/5 backdrop-blur-3xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="text-gold mb-8 md:mb-10 text-3xl md:text-4xl italic font-display">02</div>
                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-[0.2em]">Goa Luxury <br /> Beach Experience</h3>
                <p className="text-white/30 leading-relaxed font-light text-base md:text-lg">An all-expenses-paid premium Goa trip featuring luxury stay and exclusive networking events.</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -10 }}
               className="p-10 md:p-16 border border-white/5 bg-white/5 backdrop-blur-3xl relative group overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="text-gold mb-8 md:mb-10 text-3xl md:text-4xl italic font-display">03</div>
                <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-[0.2em]">Bollywood & <br /> Digital Entry</h3>
                <p className="text-white/30 leading-relaxed font-light text-base md:text-lg">Direct opportunities to work in Bollywood movies, music videos, and trending web series projects.</p>
            </motion.div>
          </div>

          <div className="mt-20 md:mt-32 p-12 md:p-24 border border-gold/20 bg-gold/5 backdrop-blur-3xl text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold/5 blur-[100px] -z-10" />
            <h4 className="text-2xl md:text-5xl font-display italic text-white mb-12 md:mb-16 tracking-tight">The Gateway to Industry Stardom</h4>
            <div className="flex flex-wrap justify-center gap-8 md:gap-24">
                <div className="flex flex-col items-center">
                    <span className="text-gold font-black text-xl md:text-2xl uppercase tracking-tighter mb-2">Talent Hunt</span>
                    <span className="text-[0.55rem] text-white/30 tracking-[0.4em] uppercase">Phase 2026</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gold font-black text-xl md:text-2xl uppercase tracking-tighter mb-2">Industry Connect</span>
                    <span className="text-[0.55rem] text-white/30 tracking-[0.4em] uppercase">Network Exposure</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gold font-black text-xl md:text-2xl uppercase tracking-tighter mb-2">Media Coverage</span>
                    <span className="text-[0.55rem] text-white/30 tracking-[0.4em] uppercase">Global Press</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gold font-black text-xl md:text-2xl uppercase tracking-tighter mb-2">Awards</span>
                    <span className="text-[0.55rem] text-white/30 tracking-[0.4em] uppercase">Recognition</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-premium-white border-y border-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <img 
                  src={images.detail} 
                  alt="Traditional Craft Detail" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-stone-50 -z-10 hidden md:block" />
              <div className="absolute -top-12 -left-12 font-display text-[10rem] text-stone-100/50 leading-none -z-10 select-none">
                ROYAL
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold font-bold uppercase tracking-[0.4em] text-[0.65rem] block mb-4">The Essence of Style</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Elevating Traditional Artistry to New Horizons</h2>
              <p className="text-stone-500 mb-8 leading-relaxed font-light">
                Rajasthan Glamour Week is more than just a fashion show. It is a dedicated platform that bridges the gap between rural master artisans and urban global runways. We provide a space where the intricate Gota Patti, Zardosi, and Hand-block printing techniques find their voice in modern garment silhouettes.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="border-l-2 border-gold pl-6">
                  <h4 className="text-stone-950 font-bold text-2xl mb-1">50+</h4>
                  <p className="text-stone-400 text-[0.65rem] uppercase tracking-widest">Designers Showcased</p>
                </div>
                <div className="border-l-2 border-gold pl-6">
                  <h4 className="text-stone-950 font-bold text-2xl mb-1">12K+</h4>
                  <p className="text-stone-400 text-[0.65rem] uppercase tracking-widest">Annual Visitors</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-[0.65rem] font-bold tracking-[0.3em] uppercase hover:text-gold transition-colors">
                Discover Our Story <ChevronRight className="ml-2 text-gold" size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Runway Teaser */}
      <section className="py-24 bg-premium-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl mb-6">Upcoming Runway 2026</h2>
            <p className="text-stone-400 max-w-2xl mx-auto italic font-display text-lg">
              "A magnificent journey through the sands of time, where silk and gold tell stories of forgotten empires."
            </p>
          </div>
          
          <div className="relative group overflow-hidden shadow-2xl">
            <div className="aspect-video overflow-hidden">
              <img 
                src={images.runway} 
                alt="Runway Show" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="absolute inset-0 bg-premium-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
              <div className="text-center text-white px-10">
                <p className="uppercase tracking-[0.6em] text-[0.6rem] mb-6 font-bold text-gold">Official Showcase</p>
                <h3 className="text-4xl md:text-6xl font-display italic mb-10">Jaipur Royal Palace</h3>
                <Link to="/events" className="inline-block px-12 py-5 bg-gold text-white text-[0.65rem] font-bold tracking-[0.4em] uppercase hover:bg-white hover:text-premium-black transition-all">
                  Access Invitation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Trust Section - Refined with New Leadership */}
      <section className="py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)]" />
        <Quote className="absolute top-10 right-10 text-white/5" size={250} />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} fill="#D4AF37" color="#D4AF37" className="mx-1" size={16} />
            ))}
          </div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-6xl font-display italic mb-20 max-w-5xl mx-auto leading-tight font-light"
          >
            "Fashion is the most potent teller of tradition. We don't just host a show; we preserve the soul of an empire through every stitch."
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
                <div className="w-16 h-[1px] bg-gold mb-6 opacity-30" />
                <p className="text-gold uppercase tracking-[0.6em] font-black text-[0.7rem] mb-2">Prince Laxkar</p>
                <p className="text-white/20 text-[0.55rem] uppercase tracking-[0.4em] font-medium">Founder & Primary Visionary</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-16 h-[1px] bg-gold mb-6 opacity-30" />
                <p className="text-gold uppercase tracking-[0.6em] font-black text-[0.7rem] mb-2">Naksh Lakhara</p>
                <p className="text-white/20 text-[0.55rem] uppercase tracking-[0.4em] font-medium">Chief Organiser & Curator</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
