import { motion } from 'motion/react';
import { Calendar, MapPin, Tag } from 'lucide-react';

export default function Events() {
  const images = {
    runway: "/src/assets/images/runway_glamour_1780979695640.png",
    detail: "/src/assets/images/rajasthan_embroidery_detail_1780979709712.png",
    hero: "/src/assets/images/hero_fashion_desert_1780979678685.png"
  };

  const currentEvents = [
    {
      title: "Main Stage: Royal Heritage Runway",
      date: "June 12, 2026",
      location: "City Palace, Jaipur",
      category: "Runway Show",
      image: images.runway
    },
    {
      title: "Artisan Crafts: Live Workshop",
      date: "June 13, 2026",
      location: "Hawa Mahal Grounds",
      category: "Experience",
      image: images.detail
    },
    {
      title: "Desert Glam: Avant-Garde Night",
      date: "June 15, 2026",
      location: "Nahargarh Fort",
      category: "Grand Finale",
      image: images.hero
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-[#0a0a0a]">
      <section className="py-40 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:row justify-between items-end mb-24 gap-12 pt-20">
            <div className="max-w-4xl">
              <span className="text-gold font-black uppercase tracking-[1em] text-[0.6rem] block mb-10 underline underline-offset-[16px] decoration-gold/20">The Imperial Schedule</span>
              <h1 className="text-5xl md:text-[6rem] leading-[0.8] tracking-tighter uppercase font-black mix-blend-difference">Royal <br /><span className="italic font-normal text-gold">Itinerary</span></h1>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-8">
              <button className="px-10 py-5 bg-gold text-[#0a0a0a] text-[0.6rem] font-black uppercase tracking-[0.4em] transition-all hover:bg-white hover:text-[#0a0a0a] shadow-2xl">Phase 2026</button>
              <button className="px-10 py-5 bg-transparent text-white/30 text-[0.6rem] font-black uppercase tracking-[0.4em] border border-white/5 hover:border-gold hover:text-gold transition-all">Archived Seasons</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            {currentEvents.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 bg-[#0e0e0e]">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0 group-hover:brightness-75"
                  />
                  <div className="absolute top-0 right-0 bg-[#0a0a0a] border-l border-b border-gold/30 px-6 py-4 flex items-center space-x-3">
                    <Tag size={12} className="text-gold" />
                    <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-gold">{event.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-display italic leading-tight text-white/90 group-hover:text-gold transition-colors duration-500">{event.title}</h3>
                    <div className="space-y-4 text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.4em] text-white/30 font-black border-l border-gold/30 pl-8">
                      <div className="flex items-center space-x-6 hover:text-white transition-colors">
                        <Calendar size={14} className="text-gold/50" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-6 hover:text-white transition-colors">
                        <MapPin size={14} className="text-gold/50" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="mt-12 pt-12 border-t border-white/5">
                        <button className="w-full py-6 bg-white/5 border border-white/5 text-[0.6rem] font-black uppercase tracking-[0.6em] text-white hover:bg-gold hover:text-[#0a0a0a] hover:border-gold transition-all duration-700 shadow-2xl">
                            Request Invitation
                        </button>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury CTA */}
      <section className="py-40 bg-white text-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-gold font-black uppercase tracking-[0.8em] text-[0.6rem] block mb-8">Empire Alliance</span>
          <h2 className="text-5xl md:text-8xl mb-12 italic font-display tracking-tighter leading-none">Seeking Mastery?</h2>
          <p className="text-stone-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed text-lg md:text-xl italic">
            "Join the ranks of the elite. We are currating the next generation of imperial visionaries for the global stage."
          </p>
          <div className="flex justify-center">
            <Link to="/contact" className="px-16 py-8 bg-[#0a0a0a] text-white font-black uppercase tracking-[0.8em] text-[0.7rem] hover:bg-gold hover:text-white transition-all shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
                Portal Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
