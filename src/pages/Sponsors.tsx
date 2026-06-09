import { motion } from 'motion/react';
import { Star, Shield, Briefcase, Zap } from 'lucide-react';

export default function Sponsors() {
  const tiers = [
    {
      name: "Global Partners",
      desc: "Maximum brand integration and exclusive media cycles.",
      icon: <Star className="text-gold" size={32} />
    },
    {
      name: "Heritage Patrons",
      desc: "Connecting tech and lifestyle brands with rural craft clusters.",
      icon: <Shield className="text-gold" size={32} />
    },
    {
       name: "Associate Partners",
       desc: "Strategic visibility and high-impact guest list exposure.",
       icon: <Zap className="text-gold" size={32} />
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-premium-black">
      <section className="py-40 bg-premium-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.08),transparent_70%)]" />
        <div className="container mx-auto px-6 text-center max-w-6xl relative z-10 pt-20">
          <span className="text-gold font-black uppercase tracking-[1em] text-[0.7rem] block mb-10 underline underline-offset-[16px] decoration-gold/20">The Network of Influence</span>
          <h1 className="text-7xl md:text-[10rem] mb-12 uppercase font-black tracking-tighter leading-[0.85]">Global <br /><span className="text-gold italic font-normal">Alliances</span></h1>
          <p className="text-white/30 text-2xl leading-relaxed font-light max-w-3xl mx-auto italic mt-12">
            Architecting value for brands that define the pinnacle of luxury lifestyle.
          </p>
        </div>
      </section>

      <section className="py-40 bg-premium-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {tiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 1.2 }}
                className="p-20 border border-stone-100 bg-stone-50/20 hover:bg-white shadow-sm hover:shadow-[0_80px_150px_-30px_rgba(0,0,0,0.1)] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="mb-12 group-hover:scale-110 transition-transform duration-1000 bg-stone-100 w-24 h-24 flex items-center justify-center">
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-black mb-8 uppercase tracking-[0.4em] font-sans text-premium-black">{tier.name}</h3>
                <p className="text-stone-400 text-lg leading-relaxed mb-16 font-light">
                  {tier.desc}
                </p>
                <button className="text-[0.7rem] font-black uppercase tracking-[0.6em] text-gold flex items-center group-hover:tracking-[0.8em] transition-all">
                  Request Deck <Briefcase size={16} className="ml-5 opacity-40 group-hover:scale-125 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-48 p-24 bg-premium-black shadow-[0_100px_200px_-50px_rgba(0,0,0,0.4)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] group-hover:bg-gold/10 transition-colors" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl text-center lg:text-left">
                <span className="text-gold font-black uppercase tracking-[0.6em] text-[0.6rem] mb-6 block">Current Ecosystem</span>
                <h4 className="text-4xl md:text-5xl font-display italic text-white mb-6">A confluence of global leaders.</h4>
                <p className="text-lg text-white/30 font-light">Partnered with over 40+ premier houses across the globe.</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 opacity-30 grayscale transition-all group-hover:grayscale-0 group-hover:opacity-100 duration-1000">
                <div className="text-3xl font-black tracking-[0.3em] text-white">LUX•MOD</div>
                <div className="text-3xl font-black tracking-[0.3em] italic text-gold">ART•VOG</div>
                <div className="text-3xl font-black tracking-[0.3em] text-white">IMP•HER</div>
                <div className="text-3xl font-black tracking-[0.3em] text-white">GLM•WKK</div>
                <div className="text-3xl font-black tracking-[0.3em] italic text-gold">ROY•PAT</div>
                <div className="text-3xl font-black tracking-[0.3em] text-white">ARC•LUX</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
