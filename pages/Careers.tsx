import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Disc, Shield, Users, Server, ChevronRight } from 'lucide-react';
import { LINKS } from '../constants';

const Careers: React.FC = () => {
  const jobs = [
    {
      title: "Chat Moderator",
      type: "Volunteer / Part-time",
      location: "Remote",
      department: "Community Team",
      icon: Users,
      description: "Keep our Discord community safe, helpful, and engaging. You will enforce rules, answer basic questions, and foster a welcoming environment for thousands of gamers."
    },
    {
      title: "Support Staff Team",
      type: "Rotational Shifts (24/7)",
      location: "Remote",
      department: "Customer Success",
      icon: Shield,
      description: "The frontline of KSCloud. You will handle billing inquiries, technical support tickets for Minecraft/Bots, and ensure customer satisfaction around the clock."
    },
    {
      title: "System Administrator",
      type: "Contract / Full-time",
      location: "Remote",
      department: "Engineering",
      icon: Server,
      description: "Manage our bare metal AMD EPYC nodes, maintain Pterodactyl panel integrity, and optimize network routing for low latency. Deep Linux knowledge required."
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
              <Briefcase className="w-4 h-4" /> We are hiring!
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Build the <span className="text-zinc-500">Future</span> of Hosting
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            We're looking for passionate individuals to help us provide the best hosting experience in the industry. If you love gaming, tech, and helping others, you belong here.
          </p>
        </div>

        {/* Application Process - Stacked Card */}
        <div className="mb-20 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-md group hover:border-white/20 transition-colors">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#5865F2]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                 <h2 className="text-3xl font-bold text-white mb-4">How to Apply</h2>
                 <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    We handle all our recruitment through our Discord server. This allows us to get to know you better and process applications faster.
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center">1</div>
                       <span className="text-white font-medium">Join our Discord Server</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded-full bg-white/10 text-white font-bold flex items-center justify-center border border-white/10">2</div>
                       <span className="text-zinc-300">Navigate to <code className="bg-black/50 px-2 py-1 rounded text-sm">#applications</code> channel</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded-full bg-white/10 text-white font-bold flex items-center justify-center border border-white/10">3</div>
                       <span className="text-zinc-300">Open a ticket or submit the application form</span>
                    </div>
                 </div>
              </div>
              <div className="flex-shrink-0">
                 <a 
                   href={LINKS.discord} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex flex-col items-center gap-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-10 py-8 rounded-3xl transition-all shadow-2xl shadow-[#5865F2]/20 hover:scale-105 group/btn"
                 >
                    <Disc className="w-12 h-12" />
                    <span className="text-xl">Apply on Discord</span>
                    <div className="flex items-center gap-2 text-sm opacity-80 font-medium bg-black/20 px-4 py-1.5 rounded-full">
                       Join Server <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                 </a>
              </div>
           </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-10 pl-4 border-l-4 border-white">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:border-white/20 hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm">
                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex items-start gap-6">
                       <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                          <job.icon className="w-8 h-8 text-white" />
                       </div>
                       <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-4">
                             <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5"><Briefcase className="w-3.5 h-3.5" /> {job.department}</span>
                             <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5"><Clock className="w-3.5 h-3.5" /> {job.type}</span>
                             <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                          </div>
                          <p className="text-zinc-400 leading-relaxed max-w-3xl">
                             {job.description}
                          </p>
                       </div>
                    </div>
                    
                    <div className="flex-shrink-0 mt-4 md:mt-0">
                       <a 
                         href={LINKS.discord} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="inline-flex items-center gap-2 text-white font-bold bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition-all"
                       >
                          Apply Now <ArrowRight className="w-4 h-4" />
                       </a>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Teaser */}
        <div className="mt-20 text-center p-12 bg-white/5 rounded-[2.5rem] border border-white/10">
           <h3 className="text-2xl font-bold text-white mb-4">Why work with us?</h3>
           <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              We are a remote-first team that values performance, transparency, and gaming. 
              We offer competitive perks, free server hosting for staff, and a relaxed environment.
           </p>
        </div>

      </div>
    </div>
  );
};

export default Careers;