
import React from 'react';
import { Star, Quote, Clock } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 text-yellow-500" /> Rated 5 Stars
           </div>
           <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
             Client <span className="text-zinc-500">Stories</span>
           </h1>
           <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
             Don't just take our word for it. Here is what our community has to say about KSCloud Hosting.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl relative group hover:border-white/30 transition-all">
                 <Quote className="w-10 h-10 text-white/20 absolute top-8 right-8" />
                 <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                       <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                 </div>
                 <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                    "{t.content}"
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-black border border-white/10 flex items-center justify-center text-white font-bold">
                       {t.name.charAt(0)}
                    </div>
                    <div>
                       <div className="font-bold text-white">{t.name}</div>
                       <div className="text-xs text-zinc-500 uppercase tracking-wider">{t.role}</div>
                    </div>
                 </div>
              </div>
           ))}

           {/* Coming Soon Placeholder */}
           <div className="bg-white/5 border border-white/10 border-dashed p-10 rounded-3xl flex flex-col items-center justify-center text-center opacity-50 hover:opacity-100 transition-opacity">
               <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-zinc-500" />
               </div>
               <p className="text-white font-bold mb-1">More Reviews Coming Soon</p>
               <p className="text-zinc-500 text-sm">We are gathering more feedback from our happy clients!</p>
           </div>
        </div>

        {/* TrustPilot Placeholder */}
        <div className="mt-24 bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
           <h2 className="text-2xl font-bold text-white mb-4">Trust the Community</h2>
           <p className="text-zinc-400 mb-8">We host thousands of players daily with 99.9% uptime.</p>
           <div className="flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2 text-2xl font-bold text-white">
                 <Star className="w-8 h-8 text-green-500 fill-green-500" /> Trustpilot
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
