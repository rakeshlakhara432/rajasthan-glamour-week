import { motion } from 'motion/react';
import { Camera, MapPin, CheckCircle } from 'lucide-react';

export default function Models() {
  const castingInfo = [
    { title: "Height", value: "5'8\"+ (Female) | 6'0\"+ (Male)" },
    { title: "Experience", value: "Freshers & Professionals" },
    { title: "Locations", value: "Jaipur, Jodhpur, Udaipur" }
  ];

  return (
    <div className="min-h-screen pt-24 bg-premium-black">
      <section className="relative h-screen flex items-center overflow-hidden bg-premium-black">
        <div className="absolute inset-0 opacity-40">
          <img src="/src/assets/images/fashion_backstage_1780979727578.png" className="w-full h-full object-cover grayscale scale-110" alt="Models Hero" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-premium-black via-transparent to-transparent shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="max-w-5xl pt-24"
          >
            <span className="text-gold font-black uppercase tracking-[1em] text-[0.6rem] mb-12 block underline underline-offset-[16px] decoration-gold/20">The Global Casting</span>
            <h1 className="text-7xl md:text-[12rem] text-white mb-12 leading-[0.8] uppercase font-black tracking-tighter">
                BECOME THE <br />
                <span className="italic font-normal text-gold">FACE</span>
            </h1>
            <p className="text-gold uppercase tracking-[1.2em] text-[0.7rem] font-black opacity-80 backdrop-blur-sm inline-block px-4 py-2 bg-black/20">2026 Season • International Casting Now Open</p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-16 right-16 rotate-90 hidden lg:flex items-center space-x-12">
            <span className="text-white/20 text-[0.6rem] tracking-[2em] uppercase font-black">Scroll for Requirements</span>
            <div className="w-40 h-[1px] bg-white/10" />
        </div>
      </section>

      <section className="py-64 bg-premium-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[150px] -z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-10 text-gold underline underline-offset-8 decoration-gold/10">The Elite Standard</span>
              <h2 className="text-5xl md:text-8xl mb-16 leading-[0.9] font-black tracking-tighter uppercase text-premium-black">Faces of <br /><span className="italic font-normal text-gold lowercase">excellence</span></h2>
              <p className="text-stone-500 mb-20 leading-relaxed font-light text-2xl max-w-xl">
                Rajasthan Glamour Week is looking for the next generation of dynamic faces who represent the spirit of modern India and global luxury.
              </p>
              
              <div className="space-y-4 mb-24 max-w-xl">
                {castingInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center justify-between p-12 border-b border-stone-100 group hover:bg-stone-50 transition-colors shadow-sm bg-white">
                    <span className="font-black text-[0.65rem] uppercase tracking-[0.5em] text-stone-400 group-hover:text-gold transition-colors">{info.title}</span>
                    <span className="text-premium-black font-black text-xl uppercase tracking-tighter">{info.value}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-10 bg-premium-black text-white font-black uppercase tracking-[0.8em] text-[0.8rem] hover:bg-gold transition-all shadow-[0_45px_90px_-20px_rgba(0,0,0,0.5)] flex items-center justify-center group overflow-hidden relative">
                <span className="relative z-10">Apply to Casting</span>
                <Camera size={22} className="ml-8 group-hover:scale-125 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-12 h-[1000px] order-1 lg:order-2">
              <div className="pt-40">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="relative group overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)] h-full"
                >
                    <img src="/src/assets/images/hero_fashion_desert_1780979678685.png" className="w-full h-full object-cover grayscale transition-all duration-[3s] group-hover:grayscale-0 group-hover:scale-110" alt="Model 1" />
                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="text-white/50 text-[0.6rem] tracking-[0.5em] uppercase font-black block mb-2 underline decoration-gold/30">Editorial Series</span>
                        <p className="text-white text-xl font-bold uppercase tracking-tighter italic">Phase 01</p>
                    </div>
                </motion.div>
              </div>
              <div className="space-y-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="relative group overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.3)] h-[60%]"
                >
                    <img src="/src/assets/images/runway_glamour_1780979695640.png" className="w-full h-full object-cover grayscale transition-all duration-[3s] group-hover:grayscale-0 group-hover:scale-110" alt="Model 2" />
                </motion.div>
                <div className="p-16 bg-premium-black flex flex-col justify-center text-white h-[40%] relative overflow-hidden group shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-700">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 blur-[80px]" />
                  <MapPin size={40} className="mb-12 text-gold group-hover:translate-x-2 transition-transform shadow-2xl" />
                  <h4 className="font-black text-[0.65rem] uppercase tracking-[0.6em] mb-4 underline decoration-gold/30 underline-offset-8">Regional Casting</h4>
                  <p className="text-2xl font-black uppercase tracking-tighter opacity-80 mb-2 text-white">Hubs Active Now</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] opacity-40">Jaipur • Milan • Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
