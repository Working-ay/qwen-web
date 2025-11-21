import React from 'react';
import { Cpu, HardDrive, Shield, Zap, Router } from 'lucide-react';
import { LOCATIONS } from '../constants';

const Infrastructure: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            Our <span className="text-white/50">Infrastructure</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            We don't cut corners. Our network is built on enterprise-grade hardware and protected by industry-leading security to ensure your servers never skip a beat.
          </p>
        </div>

        {/* Hardware Specs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
           <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-white/30 transition-colors">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/10">
                 <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AMD EPYC 9354P</h3>
              <p className="text-zinc-400 leading-relaxed">
                 We exclusively use AMD EPYC 9354P processors. With massive core counts and high efficiency, these CPUs crush multi-threaded workloads.
              </p>
           </div>
           <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-white/30 transition-colors">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/10">
                 <HardDrive className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Gen4 NVMe SSDs</h3>
              <p className="text-zinc-400 leading-relaxed">
                 Load chunks instantly. Our enterprise-grade NVMe storage delivers read/write speeds up to 7000MB/s, eliminating I/O bottlenecks completely.
              </p>
           </div>
           <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:border-white/30 transition-colors">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/10">
                 <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">DDR5 ECC RAM</h3>
              <p className="text-zinc-400 leading-relaxed">
                 We use high-frequency DDR5 ECC memory to prevent data corruption and ensure stability. Your server's memory is dedicated, not oversold.
              </p>
           </div>
        </div>

        {/* Network Section */}
        <div className="mb-32">
           <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                 <h2 className="text-4xl font-black text-white mb-6">Protected by Path.net</h2>
                 <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                    Attacks happen, but they shouldn't affect your gameplay. We partner with Path.net to provide 12+ Tbps of DDoS mitigation capacity.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-zinc-300">
                       <Shield className="w-5 h-5 text-white" /> Always-on mitigation
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300">
                       <Shield className="w-5 h-5 text-white" /> L3/L4 & L7 Protection
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300">
                       <Shield className="w-5 h-5 text-white" /> &lt; 1ms mitigation latency
                    </li>
                 </ul>
              </div>
              <div className="flex-1 relative">
                 <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full opacity-20"></div>
                 <div className="relative bg-black/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-6">
                       <Router className="w-10 h-10 text-white" />
                       <div>
                          <div className="font-bold text-white">Network Status</div>
                          <div className="text-green-400 text-sm flex items-center gap-1">
                             <span className="relative flex h-2 w-2 mr-1">
                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                             </span>
                             All Systems Operational
                          </div>
                       </div>
                    </div>
                    <div className="space-y-4 font-mono text-sm">
                       <div className="flex justify-between text-zinc-400 border-b border-white/10 pb-2">
                          <span>Uptime (30d)</span>
                          <span className="text-white">99.99%</span>
                       </div>
                       <div className="flex justify-between text-zinc-400 border-b border-white/10 pb-2">
                          <span>Packet Loss</span>
                          <span className="text-white">0.0%</span>
                       </div>
                       <div className="flex justify-between text-zinc-400">
                          <span>Network Capacity</span>
                          <span className="text-white">10 Gbps</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Locations */}
        <div>
           <h2 className="text-4xl font-black text-white mb-12 text-center">Data Center Locations</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LOCATIONS.map((loc, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/5 p-8 rounded-3xl flex items-center gap-6 hover:border-white/20 transition-colors backdrop-blur-sm">
                    <div className="text-4xl">{loc.flag}</div>
                    <div>
                       <h3 className="text-2xl font-bold text-white">{loc.city}, {loc.code}</h3>
                       <p className="text-zinc-400 text-sm mb-2">{loc.country}</p>
                       <code className="text-xs bg-black/50 px-2 py-1 rounded text-zinc-300 border border-white/10">ping.{loc.city.toLowerCase()}.kscloud.net</code>
                    </div>
                 </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Infrastructure;