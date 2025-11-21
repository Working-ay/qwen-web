import React from 'react';
import { PLANS, LINKS, FAQ_DATA } from '../constants';
import { PlanType } from '../types';
import { Check, ShoppingCart, Cpu, Shield, HardDrive, Activity, Zap, MessageCircle, Plus, Minus } from 'lucide-react';

const Minecraft: React.FC = () => {
  const mcPlans = PLANS.filter(p => p.type === PlanType.MINECRAFT);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Minecraft <span className="text-white/50">Hosting</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Powerful, Reliable, and Affordable. Whether you're running a small SMP or a large network, we have the perfect plan for your community.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mcPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 backdrop-blur-md ${
                plan.recommended 
                  ? 'bg-white/10 border-white shadow-[0_0_40px_rgba(255,255,255,0.1)]' 
                  : 'bg-white/5 border-white/5 hover:border-white/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black font-bold text-xs py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8 text-center border-b border-white/10 pb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-black text-white">{plan.price.split('/')[0]}</span>
                  <span className="text-zinc-500 font-medium">/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {/* Spec Grid */}
                <div className="space-y-3">
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2 text-zinc-400 text-sm">
                       <Zap className="w-4 h-4 text-white" /> RAM
                     </div>
                     <span className="text-white font-bold">{plan.ram}</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2 text-zinc-400 text-sm">
                       <Cpu className="w-4 h-4 text-white" /> CPU
                     </div>
                     <span className="text-white font-bold">{plan.cpu}</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2 text-zinc-400 text-sm">
                       <HardDrive className="w-4 h-4 text-white" /> Storage
                     </div>
                     <span className="text-white font-bold">{plan.storage}</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2 text-zinc-400 text-sm">
                       <Activity className="w-4 h-4 text-white" /> Bandwidth
                     </div>
                     <span className="text-white font-bold">{plan.bandwidth}</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2 text-zinc-400 text-sm">
                       <Shield className="w-4 h-4 text-white" /> DDoS
                     </div>
                     <span className="text-white font-bold text-sm">{plan.ddos}</span>
                   </div>
                </div>
                
                <div className="h-px bg-white/10 my-6"></div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={LINKS.billing} 
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  plan.recommended
                    ? 'bg-white hover:bg-zinc-200 text-black shadow-lg shadow-white/20'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Order Now
              </a>
            </div>
          ))}

          {/* Enterprise Plan */}
          <div className="relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-white/30 transition-colors md:col-span-2 lg:col-span-3 backdrop-blur-md">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">Enterprise Plan</h3>
                  <p className="text-zinc-400">Need a custom solution for a massive network? We've got you covered.</p>
               </div>
               <a 
                 href={LINKS.discord}
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-colors whitespace-nowrap"
               >
                 Contact Sales
               </a>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-24">
           <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
           <div className="space-y-4">
             {FAQ_DATA.minecraft.map((faq, idx) => (
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

        {/* Custom Plan CTA */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center border border-white/10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Looking for a custom plan?</h3>
          <p className="text-zinc-400 mb-6">If our listed plans don't fit your needs, open a ticket in our Discord.</p>
          <a 
            href={LINKS.discord} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-zinc-300 font-bold transition-colors"
          >
            <MessageCircle className="w-5 h-5" /> Open a Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Minecraft;