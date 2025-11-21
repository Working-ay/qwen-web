import React, { useState } from 'react';
import { TECH_LOGOS, LOCATIONS, PANEL_IMAGES } from '../constants';
import { ArrowRight, ChevronDown, Server, Gamepad2, Shield, MapPin, Clock, Zap, Headset, Box, Monitor, Tag, Copy, Check, Globe, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedIpIndex, setCopiedIpIndex] = useState<number | null>(null);

  const copyDiscount = () => {
    navigator.clipboard.writeText("WEBKS");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyIp = (ip: string, index: number) => {
    navigator.clipboard.writeText(ip);
    setCopiedIpIndex(index);
    setTimeout(() => setCopiedIpIndex(null), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden font-sans relative">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 rounded-full blur-[120px] opacity-30 pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-fade-in-up hover:border-white/20 transition-all cursor-default shadow-lg mb-8 group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-zinc-300 font-medium text-xs tracking-wider uppercase group-hover:text-white transition-colors">Operational & Ready to Deploy</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.9] drop-shadow-2xl select-none">
            Elevate Your <br />
            <span className="text-zinc-500">Experience</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
            Premium Minecraft & Game Server Hosting powered by <span className="text-white font-bold">AMD EPYC 9354P</span> processors. Unmatched performance, DDoS protection, and 24/7 support starting at just <span className="text-white font-bold">$1.99/mo</span>.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none">
              <Link to="/minecraft" className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  Get Started
                </span>
              </Link>
              <Link to="/discord-bots" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                <Server className="w-5 h-5" />
                View Services
              </Link>
            </div>

            {/* Promo Code */}
            <button 
              onClick={copyDiscount}
              className="group flex items-center gap-2 px-5 py-2.5 bg-black/50 hover:bg-white/5 border border-white/10 hover:border-white/30 rounded-xl backdrop-blur-md transition-all duration-300 cursor-pointer mt-4"
            >
              <Tag className={`w-4 h-4 ${copied ? 'text-green-400' : 'text-white'}`} />
              <span className="text-zinc-400 text-sm font-mono">
                CODE: <span className="text-white font-bold mx-1">WEBKS</span> (10% OFF)
              </span>
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />}
            </button>
          </div>
        </div>
        
        {/* Tech Stack Marquee */}
        <div className="absolute bottom-0 w-full border-t border-white/5 bg-black/50 backdrop-blur-sm py-8">
           <div className="flex gap-24 animate-marquee whitespace-nowrap items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
              {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((tech, idx) => (
                <img key={idx} src={tech.url} alt={tech.name} className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all" />
              ))}
           </div>
        </div>
      </section>

      {/* Bento Grid Section - The "Stacked" Look */}
      <section className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex items-end justify-between">
             <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">WHY <span className="text-zinc-600">KSCLOUD?</span></h2>
                <p className="text-zinc-400 text-lg max-w-xl">Engineered for performance. We don't just host servers; we provide a premium infrastructure stack.</p>
             </div>
             <div className="hidden md:block">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                   <Globe className="w-8 h-8 text-white" />
                </div>
             </div>
          </div>

          <div className="bento-grid">
             {/* Card 1: Hardware (Large) */}
             <div className="stacked-card md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                      <Cpu className="w-6 h-6 text-white" />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-2">AMD EPYC™ Power</h3>
                   <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                      We utilize enterprise-grade AMD EPYC 9354P processors coupled with DDR5 RAM and NVMe Gen4 storage. This ensures consistent, high-tickrate performance for Minecraft and heavy compute tasks.
                   </p>
                </div>
                <div className="mt-8">
                   <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Geekbench 6 Single-Core</span>
                      <div className="flex-1 h-px bg-white/10"></div>
                   </div>
                   <div className="flex items-center gap-4 text-sm font-mono text-zinc-300">
                      <span className="text-white font-bold">AMD EPYC 9354P</span>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-white w-[95%]"></div>
                      </div>
                      <span>2450+</span>
                   </div>
                </div>
             </div>

             {/* Card 2: DDoS */}
             <div className="stacked-card p-8 group">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                      <Shield className="w-6 h-6 text-white" />
                   </div>
                   <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider rounded">
                      Active
                   </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">12Tbps+ Mitigation</h3>
                <p className="text-zinc-400 text-sm">Always-on protection via Path.net. L3/L4/L7 filtering included.</p>
             </div>

             {/* Card 3: Uptime */}
             <div className="stacked-card p-8 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 mb-6">
                   <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">99.9% Uptime</h3>
                <p className="text-zinc-400 text-sm">Redundant power and networking ensures your service stays online.</p>
             </div>

             {/* Card 4: Panel (Wide) */}
             <div className="stacked-card md:col-span-2 p-8 flex items-center gap-8 group overflow-hidden">
                 <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Custom Pterodactyl Panel</h3>
                    <p className="text-zinc-400 mb-6">
                       Manage files, console, databases, and backups from a single, beautiful interface.
                    </p>
                    <a href={PANEL_IMAGES[0].src} target="_blank" rel="noreferrer" className="text-white text-sm font-bold border-b border-white pb-1 hover:text-zinc-300 transition-colors">
                       View Preview
                    </a>
                 </div>
                 <div className="hidden sm:block w-1/3 h-full relative">
                    <Terminal className="w-32 h-32 text-white/5 absolute right-0 top-1/2 -translate-y-1/2 transform group-hover:scale-110 transition-transform duration-500" />
                 </div>
             </div>

             {/* Card 5: Instant Setup */}
             <div className="stacked-card p-8 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 mb-6">
                   <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">60s Deployment</h3>
                <p className="text-zinc-400 text-sm">Automated provisioning system installs your server instantly.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Radar DDoS Section */}
      <section className="py-32 border-y border-white/5 bg-black relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                  <div className="radar-container mx-auto lg:mx-0">
                     <div className="radar-circle w-[33%] h-[33%]"></div>
                     <div className="radar-circle w-[66%] h-[66%]"></div>
                     <div className="radar-scanner"></div>
                     <div className="radar-dot top-[20%] left-[30%] animate-[radar-dot-blink_4s_infinite]"></div>
                     <div className="radar-dot top-[70%] left-[60%] animate-[radar-dot-blink_3s_infinite_1s]"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Shield className="w-10 h-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                     </div>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-2 block">Security Layer</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">ADVANCED <br /> THREAT MITIGATION</h2>
                  <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                     Our proprietary filtering system sits in front of your server, analyzing traffic patterns in real-time. 
                     Legitimate player traffic is passed through instantly, while malicious packets are dropped at the edge.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">100+</div>
                        <div className="text-xs text-zinc-500 uppercase">Tbps Capacity</div>
                     </div>
                     <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">&lt; 1ms</div>
                        <div className="text-xs text-zinc-500 uppercase">Filtering Latency</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Global Infrastructure Section */}
      <section className="py-32 px-4 relative z-10 bg-black">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Global Infrastructure</h2>
              <p className="text-zinc-400 max-w-xl text-lg">We strategically place our servers in top-tier data centers to ensure the lowest latency for you and your players.</p>
           </div>
           <Link to="/infrastructure" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors group">
              Network Info <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
           {LOCATIONS.map((loc, idx) => (
              <div key={idx} className="stacked-card p-10 group relative overflow-hidden min-h-[320px] flex flex-col justify-between border border-white/10 bg-white/5">
                 {/* Map Background Texture - Increased Opacity for Visibility */}
                 <div className="absolute inset-0 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/2/2f/World_map_dots_white_bg.svg')] bg-cover bg-center pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out" style={{ filter: 'invert(1) brightness(0.7)' }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>
                 
                 <div className="relative z-10 flex justify-between items-start">
                    <div>
                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-bold text-white mb-4 uppercase tracking-wider backdrop-blur-md">
                          {loc.flag} {loc.code}
                       </div>
                       <h3 className="text-5xl font-black text-white mb-2 tracking-tight">{loc.city}</h3>
                       <p className="text-zinc-400 font-medium text-lg">{loc.country}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-2xl backdrop-blur-md">
                       <MapPin className="w-6 h-6" />
                    </div>
                 </div>

                 <div className="relative z-10 mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-8">
                    <div className="flex-1">
                       <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Ping Test</div>
                       <button 
                          onClick={() => copyIp(loc.hostname, idx)}
                          className="w-full flex items-center gap-2 bg-black/60 border border-white/10 rounded-xl px-4 py-3 hover:border-white/30 hover:bg-black/80 transition-all group/btn cursor-pointer text-left"
                       >
                          <div className="flex-1 overflow-hidden">
                            <code className={`text-sm font-mono block truncate transition-colors ${copiedIpIndex === idx ? 'text-green-400' : 'text-zinc-300'}`}>
                               {copiedIpIndex === idx ? 'IP Address Copied!' : loc.hostname}
                            </code>
                          </div>
                          {copiedIpIndex === idx ? (
                             <Check className="w-4 h-4 text-green-400 shrink-0" />
                          ) : (
                             <Copy className="w-4 h-4 text-zinc-500 group-hover/btn:text-white transition-colors shrink-0" />
                          )}
                       </button>
                    </div>
                    <div className="min-w-[100px]">
                       <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2">Latency</div>
                       <div className="flex items-center gap-2 text-green-400 font-bold font-mono text-lg">
                          <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </div>
                          ~{loc.ping}
                       </div>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">READY TO DEPLOY?</h2>
            <p className="text-xl text-zinc-400 mb-10">Join the thousands of communities trusting KSCloud.</p>
            <Link to="/minecraft" className="inline-flex items-center gap-3 bg-white text-black font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.15)]">
               View Pricing <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Home;