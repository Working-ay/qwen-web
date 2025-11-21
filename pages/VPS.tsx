import React, { useState, useEffect } from 'react';
import { Timer, Cloud, Terminal, Shield, Zap, Server, ChevronRight, Disc } from 'lucide-react';
import { LINKS } from '../constants';

const VPS: React.FC = () => {
  // Set launch target: Jan 1, 2026
  const targetDate = new Date('2026-01-01T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen bg-black flex flex-col pt-20 relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 flex flex-col items-center justify-center flex-1">
        
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
          <Timer className="w-4 h-4 text-white" /> Launch Sequence Initiated
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 text-center tracking-tight">
          VPS <span className="text-zinc-500">Hosting</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 mb-16 text-center max-w-2xl leading-relaxed">
          We are building the next generation of high-performance cloud computing. Root access, dedicated resources, and instant scalability are coming.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 w-full max-w-4xl">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 text-center backdrop-blur-md shadow-2xl shadow-black/50 group hover:border-white/20 transition-all duration-500">
              <div className="text-4xl md:text-7xl font-black text-white mb-2 font-mono tabular-nums group-hover:scale-110 transition-transform duration-300">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-bold">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Anticipated Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 w-full max-w-5xl">
           <div className="bg-black/50 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl text-white"><Terminal className="w-6 h-6" /></div>
              <div>
                 <h3 className="font-bold text-white">Full Root Access</h3>
                 <p className="text-xs text-zinc-500">Complete control over your OS</p>
              </div>
           </div>
           <div className="bg-black/50 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl text-white"><Zap className="w-6 h-6" /></div>
              <div>
                 <h3 className="font-bold text-white">Dedicated Ryzen Cores</h3>
                 <p className="text-xs text-zinc-500">No noisy neighbors, pure power</p>
              </div>
           </div>
           <div className="bg-black/50 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
              <div className="bg-white/10 p-3 rounded-xl text-white"><Shield className="w-6 h-6" /></div>
              <div>
                 <h3 className="font-bold text-white">DDoS Protected</h3>
                 <p className="text-xs text-zinc-500">Path.net mitigation included</p>
              </div>
           </div>
        </div>

        {/* Discord CTA */}
        <div className="bg-[#5865F2] w-full max-w-3xl rounded-[2.5rem] p-1 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-2xl shadow-[#5865F2]/20">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="bg-black/20 backdrop-blur-sm h-full w-full rounded-[2.3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
             <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                   <Disc className="w-8 h-8" /> Join the Waitlist
                </h3>
                <p className="text-white/80 text-lg">
                   Get exclusive early access and development updates in our Discord.
                </p>
             </div>
             <a 
               href={LINKS.discord}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white text-[#5865F2] font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-zinc-100 transition-colors shadow-xl whitespace-nowrap"
             >
                Join Discord Server <ChevronRight className="w-5 h-5" />
             </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VPS;