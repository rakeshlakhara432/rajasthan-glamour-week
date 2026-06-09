import { motion } from 'motion/react';
import { Target, Users, Gem, ShieldCheck, Star, History, Award, Globe } from 'lucide-react';

export default function About() {
  const images = {
    backstage: "/src/assets/images/fashion_backstage_1780979727578.png",
    detail: "/src/assets/images/rajasthan_embroidery_detail_1780979709712.png",
    hero: "/src/assets/images/hero_fashion_desert_1780979678685.png"
  };

  const pillars = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Curation",
      desc: "Comprehensive event management from royal venue selection to avant-garde stage design."
    },
    {
      icon: <Globe size={32} />,
      title: "Exposure",
      desc: "Bridging the gap between ethnic artisans and international luxury retail markets."
    },
    {
      icon: <Award size={32} />,
      title: "Excellence",
      desc: "Partnered with the finest technical crews, makeup artists, and fashion choreographers."
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-[#0a0a0a]">
      {/* Editorial Hero */}
      <section className="relative h-[90vh] flex flex-col md:flex-row overflow-hidden bg-[#0a0a0a]">
        <div className="w-full md:w-1/2 h-full relative order-2 md:order-1">
          <img 
            src={images.hero} 
            alt="Rajasthan Glamour Week Hero" 
            className="w-full h-full object-cover opacity-50 grayscale scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        <div className="w-full md:w-1/2 h-full flex items-center justify-center p-12 md:p-24 order-1 md:order-2 bg-[#0a0a0a] relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-xl relative z-10"
          >
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] mb-10 block underline underline-offset-[16px] decoration-gold/20">The Vision</span>
            <h1 className="text-4xl md:text-6xl text-white mb-12 leading-[0.8] tracking-tighter uppercase font-black mix-blend-difference">
              ROYAL <br />
              <span className="text-gold italic font-normal">LEGACY</span> <br />
              REBORN
            </h1>
            <p className="text-white font-black uppercase tracking-[0.4em] text-[0.65rem] leading-relaxed mb-8 opacity-80">
              A Grand Celebration of Fashion, <br />
              Talent and Culture from the <br />
              Heart of Rajasthan.
            </p>
            <p className="text-white/40 text-lg leading-relaxed font-light max-w-sm italic border-l border-gold/30 pl-8">
              "We don't just organize an event; we currate a movement that honors the past while defining the future."
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story Section - Royal Aesthetics */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[150px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-16"
              >
                <div className="relative">
                  <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-6 block">Our Heritage</span>
                  <h2 className="text-4xl md:text-6xl mb-12 leading-[0.85] italic font-display text-[#0a0a0a] tracking-tighter">The Infinite <br /><span className="font-sans font-black not-italic text-gold uppercase">Sands of Luxury</span></h2>
                  <p className="text-stone-500 leading-relaxed font-light text-xl max-w-xl border-l-4 border-stone-100 pl-10">
                    Founded in the heart of Jaipur, Rajasthan Glamour Week was born from a desire to bridge the gap between ancient Rajasthani artistry and modern global couture. Every stitch tells a story of royalty.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-12">
                  <div className="p-12 md:p-16 border border-stone-100 bg-[#fcfcfc] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    <History className="text-gold mb-8 md:mb-10" size={32} />
                    <h4 className="font-black mb-4 md:mb-6 uppercase tracking-[0.4em] text-[0.6rem] text-stone-400">Global Launch</h4>
                    <p className="text-base md:text-lg text-[#0a0a0a] font-bold leading-tight uppercase tracking-tighter">Established In 2026, Architecting Excellence.</p>
                  </div>
                  <div className="p-12 md:p-16 border border-stone-100 bg-[#fcfcfc] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                    <Target className="text-gold mb-8 md:mb-10" size={32} />
                    <h4 className="font-black mb-4 md:mb-6 uppercase tracking-[0.4em] text-[0.6rem] text-stone-400">The Mission</h4>
                    <p className="text-base md:text-lg text-[#0a0a0a] font-bold leading-tight uppercase tracking-tighter">Scaling Imperial Art to Global Heights.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-6 lg:pl-12 order-1 lg:order-2 group">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="aspect-[4/5] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.2)] group-hover:shadow-[0_80px_160px_-40px_rgba(212,175,55,0.3)] transition-all duration-1000"
                >
                  <img src={images.detail} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 grayscale group-hover:grayscale-0" alt="Craft Detail" />
                </motion.div>
                <div className="absolute -bottom-12 -right-12 bg-[#0a0a0a] flex items-center justify-center p-12 shadow-2xl skew-y-3 hover:skew-y-0 transition-all duration-700 border border-gold/20">
                    <span className="text-gold text-[0.65rem] tracking-[0.6em] uppercase font-black text-center leading-relaxed">The Pinnacle <br /> of Cultural <br /> Supremacy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Pillars - Dark Mode Luxury */}
      <section className="py-40 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32 max-w-3xl mx-auto">
            <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-10 underline underline-offset-[16px] decoration-gold/20">Foundational Values</span>
            <h2 className="text-5xl md:text-8xl text-white italic font-display tracking-tighter">The Royal DNA</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1 }}
                className="p-12 md:p-16 border border-white/5 bg-white/5 backdrop-blur-3xl transition-all hover:bg-white/10 hover:border-gold/30 group shadow-2xl"
              >
                <div className="text-gold mb-10 group-hover:scale-110 transition-transform duration-700">
                  {pillar.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black mb-6 md:mb-8 text-white uppercase tracking-[0.4em] font-sans">{pillar.title}</h3>
                <p className="text-white/30 text-base md:text-lg leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 md:mt-40 p-12 md:p-24 bg-gold relative overflow-hidden group shadow-[0_120px_240px_-60px_rgba(212,175,55,0.4)]"
          >
             <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-[8s]">
                <img src={images.hero} className="w-full h-full object-cover grayscale brightness-50" alt="Background" />
             </div>
             <div className="relative z-10 flex flex-col lg:row items-center justify-between gap-12 lg:gap-16">
                <div className="max-w-2xl text-center lg:text-left text-premium-black">
                  <h4 className="text-3xl md:text-5xl font-display mb-6 md:mb-8 italic leading-tight tracking-tight">Witness the fusion of royalty and runway.</h4>
                  <p className="text-premium-black/60 text-[0.65rem] font-black uppercase tracking-[0.4em]">Now accepting elite registration for the 2026 Season.</p>
                </div>
                <Link to="/contact" className="px-12 py-6 md:px-16 md:py-8 bg-[#0a0a0a] text-white text-[0.65rem] md:text-[0.75rem] font-black uppercase tracking-[0.6em] hover:bg-white hover:text-[#0a0a0a] transition-all shadow-2xl">
                  Connect Now
                </Link>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12 md:mb-16 flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} fill="#D4AF37" color="#D4AF37" size={16} />
              ))}
            </div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-3xl md:text-7xl font-display italic leading-none mb-12 md:mb-16 text-[#0a0a0a] px-4 md:px-12 tracking-tight"
            >
              "We are architecting a sanctuary for true talent. Rajasthan Glamour Week stands as the ultimate lighthouse for imperial luxury fashion."
            </motion.h3>
            <div className="flex flex-col items-center">
              <div className="w-20 h-[1px] bg-gold mb-10 opacity-30" />
              <p className="text-[#0a0a0a] font-black uppercase tracking-[0.8em] text-[0.65rem] mb-2">The Leadership Council</p>
              <p className="text-stone-400 text-[0.55rem] uppercase tracking-[0.4em] font-medium italic">Curating Global Excellence Since Inception</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
