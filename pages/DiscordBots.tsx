import React from 'react';
import { PLANS, LINKS, FAQ_DATA } from '../constants';
import { PlanType } from '../types';
import { Bot, Terminal, Code, Coffee, Database, Cpu, HardDrive, Zap, Plus, Minus } from 'lucide-react';

const DiscordBots: React.FC = () => {
  const botPlans = PLANS.filter(p => p.type === PlanType.DISCORD);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full text-white mb-6 border border-white/10 backdrop-blur-sm">
            <Bot className="w-5 h-5" />
            <span className="font-bold tracking-wide">Discord Bot Hosting</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Keep Your Bot <span className="text-white/50">Online 24/7</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Professional hosting for Node.js, Python, and Java bots. Stop hosting on your local machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
          {botPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`bg-white/5 backdrop-blur-md rounded-3xl border flex flex-col p-6 transition-all duration-300 hover:-translate-y-2 group ${
                 plan.recommended ? 'border-white shadow-[0_0_20px_rgba(255,255,255,0.15)]' : 'border-white/5 hover:border-white/30'
              }`}
            >
              {plan.recommended && (
                <div className="bg-white text-black text-xs font-bold text-center py-1 rounded mb-4 uppercase tracking-wider">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <div className="text-3xl font-black text-white">
                  {plan.price.split('/')[0]}
                  <span className="text-zinc-500 text-sm font-medium ml-1">/mo</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 flex-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-zinc-400 text-sm flex items-center gap-2"><Zap className="w-3 h-3" /> RAM</span>
                  <span className="text-white font-bold">{plan.ram}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-zinc-400 text-sm flex items-center gap-2"><Cpu className="w-3 h-3" /> CPU</span>
                  <span className="text-white font-bold text-xs">{plan.cpu}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-zinc-400 text-sm flex items-center gap-2"><HardDrive className="w-3 h-3" /> Disk</span>
                  <span className="text-white font-bold">{plan.storage}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-zinc-400 text-sm flex items-center gap-2"><Database className="w-3 h-3" /> DBs</span>
                  <span className="text-white font-bold">{plan.slots.split(' ')[0]}</span>
                </div>

                <div className="pt-2 space-y-2">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <span className="text-zinc-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                 href={LINKS.billing} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full bg-white hover:bg-zinc-200 text-black font-bold text-sm py-3 rounded-xl transition-all flex justify-center items-center gap-2 shadow-lg shadow-white/10"
              >
                 <Bot className="w-4 h-4" />
                 Order Now
              </a>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {FAQ_DATA.discord.map((faq, idx) => (
               <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                 <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                 >
                    <span className="font-bold text-white text-lg">{faq.question}</span>
                    {openFaq === idx ? <Minus className="w-5 h-5 text-zinc-400" /> : <Plus className="w-5 h-5 text-zinc-400" />}
                 </button>
                 {openFaq === idx && (
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed animate-fade-in-up">
                       {faq.answer}
                    </div>
                 )}
               </div>
             ))}
           </div>
        </div>

        <div className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
           <h3 className="text-xl font-bold text-white mb-2">Free Migration Assistance</h3>
           <p className="text-zinc-400 mb-4">Moving from another host? We'll help you move your bot for free.</p>
           <p className="text-sm text-zinc-500">99.9% Uptime Guarantee Included</p>
        </div>
      </div>
    </div>
  );
};

export default DiscordBots;