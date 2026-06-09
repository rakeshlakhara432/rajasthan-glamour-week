import { motion } from 'motion/react';
import { useState } from 'react';

export default function Gallery() {
  const images = [
    { url: "/src/assets/images/hero_fashion_desert_1780979678685.png", title: "Desert Sunset", category: "Editorial" },
    { url: "/src/assets/images/runway_glamour_1780979695640.png", title: "Palace Runway", category: "Runway" },
    { url: "/src/assets/images/rajasthan_embroidery_detail_1780979709712.png", title: "Intricate gold", category: "Detail" },
    { url: "/src/assets/images/fashion_backstage_1780979727578.png", title: "The Preparation", category: "Backstage" },
    { url: "/src/assets/images/runway_glamour_1780979695640.png", title: "Grand Finale", category: "Runway" },
    { url: "/src/assets/images/hero_fashion_desert_1780979678685.png", title: "Thar Couture", category: "Editorial" },
  ];

  const categories = ["All", "Runway", "Editorial", "Backstage", "Detail"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 bg-[#0a0a0a]">
      <section className="py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="container mx-auto px-6 text-center relative z-10 pt-20">
            <span className="text-gold font-black uppercase tracking-[1em] text-[0.6rem] mb-10 block underline underline-offset-[16px] decoration-gold/20">The Visual Archive</span>
            <h1 className="text-5xl md:text-[6rem] mb-16 uppercase font-black tracking-tighter leading-[0.8] mix-blend-difference">The <br /><span className="italic font-normal text-gold">Collection</span></h1>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-10 py-5 text-[0.55rem] md:text-[0.6rem] font-black uppercase tracking-[0.5em] transition-all border ${
                    activeCategory === cat ? 'bg-gold text-premium-black border-gold shadow-2xl scale-105' : 'bg-transparent text-white/20 border-white/5 hover:border-gold hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
        </div>
      </section>

      <section className="py-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="container mx-auto px-6">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 md:gap-12 space-y-8 md:space-y-12">
              {filteredImages.map((img, idx) => (
                <motion.div
                  layout
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className="relative break-inside-avoid overflow-hidden group cursor-pointer shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-stone-100"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-[2s] ease-out group-hover:grayscale-0 group-hover:scale-110" 
                    />
                    <div className="absolute inset-x-8 bottom-8 bg-[#0a0a0a] p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0 border border-gold/30 flex flex-col items-center">
                        <span className="text-gold text-[0.55rem] uppercase tracking-[0.4em] mb-3 font-black">{img.category}</span>
                        <h3 className="text-white text-2xl font-display italic leading-tight">{img.title}</h3>
                        <div className="mt-6 h-[1px] w-12 bg-gold/50" />
                    </div>
                  </div>
                  
                  {/* Hover Overlay - Alternative Modern View */}
                  <div className="absolute inset-0 bg-[#0a0a0a]/90 opacity-0 group-hover:opacity-0 transition-opacity duration-700 flex items-center justify-center pointer-events-none">
                     <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem]">View Portfolio</span>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
