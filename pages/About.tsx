import React from 'react';
import { TEAM } from '../constants';
import { Shield, Users, Target, Globe, Zap, CheckCircle2, ArrowUpRight, Palette } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Uptime', value: '99.9%' },
    { label: 'Locations', value: '2' },
    { label: 'Support', value: '24/7' },
    { label: 'Happy Clients', value: '1000+' },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <Users className="w-4 h-4" /> Meet the team
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
            About <span className="text-zinc-500">KSCloud</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            We are a team of gamers and developers dedicated to providing high-performance hosting solutions without the corporate markup. Our mission is to make professional-grade server hosting accessible to everyone.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 rounded-3xl p-8 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-zinc-500 font-medium uppercase tracking-wider text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Grid - Stacked Bently Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
           <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group md:col-span-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="relative z-10">
                 <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                    <Target className="w-7 h-7 text-white" />
                 </div>
                 <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                 <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                    To democratize game server hosting by offering enterprise-level hardware at accessible prices. We believe that high performance shouldn't be a luxury reserved for the top 1% of communities.
                 </p>
              </div>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 group hover:border-white/20 transition-colors">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                 <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Promise</h3>
              <ul className="space-y-3 text-zinc-400">
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> 99.9% Uptime Guarantee</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> No Overselling Resources</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white" /> Transparent Pricing</li>
              </ul>
           </div>

           <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 group hover:border-white/20 transition-colors">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                 <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Hardware First</h3>
              <p className="text-zinc-400 leading-relaxed">
                 We own our hardware and colocate directly in top-tier datacenters. Powered by the latest Ryzen processors and NVMe storage, we ensure your server performs at its peak.
              </p>
           </div>
        </div>

        {/* Team Section */}
        <div className="mb-32">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-4">Leadership Team</h2>
              <p className="text-zinc-400">The minds behind the machine.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {TEAM.map((member, idx) => (
                 <div key={idx} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-8 hover:border-white/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="relative">
                       <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-colors shadow-2xl bg-zinc-900">
                          <img 
                             src={member.avatar} 
                             alt={member.name} 
                             className="w-full h-full object-cover"
                          />
                       </div>
                       <div className="absolute -bottom-3 -right-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-zinc-200">
                          {member.role}
                       </div>
                    </div>
                    
                    <div className="text-center sm:text-left flex-1">
                       <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                       <p className="text-zinc-400 mb-6 leading-relaxed text-sm">
                          {member.bio || "Dedicated to building the best hosting platform for gamers worldwide."}
                       </p>
                       <div className="flex items-center justify-center sm:justify-start gap-4">
                          {/* Only Render Links if Website Exists */}
                          {member.website && (
                            <a 
                              href={member.website} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer group/icon"
                              title="Personal Website"
                            >
                               <Globe className="w-5 h-5" />
                            </a>
                          )}
                          
                          {member.website && (
                             <a 
                               href={member.website} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-xs font-bold hover:bg-white hover:text-black transition-colors cursor-pointer"
                             >
                                Visit Website <ArrowUpRight className="w-3 h-3" />
                             </a>
                          )}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Partners Section */}
        <div className="mb-20">
           <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">Strategic Partners</h2>
              <p className="text-zinc-400">Working together with industry leaders.</p>
           </div>
           
           <div className="max-w-md mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center gap-6 hover:border-white/30 transition-colors group backdrop-blur-sm">
                 <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Palette className="w-8 h-8 text-white" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-1">K Studio</h3>
                    <p className="text-zinc-400 text-sm">Official Design & Creative Partner</p>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;