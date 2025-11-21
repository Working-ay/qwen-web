import React from 'react';
import { Search, Book, Server, Code, Shield, HelpCircle, FileText, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documentation: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Search */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8">
            KSCloud <span className="text-zinc-500">Docs</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
            Everything you need to know about managing your server, billing, and account.
          </p>
          
          <div className="max-w-2xl mx-auto relative group">
             <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center p-2 pl-6 shadow-2xl">
                <Search className="w-6 h-6 text-zinc-500 mr-4" />
                <input 
                   type="text" 
                   placeholder="Search documentation..." 
                   className="bg-transparent w-full text-white placeholder:text-zinc-600 focus:outline-none text-lg py-2"
                />
                <button className="bg-white text-black font-bold px-6 py-2.5 rounded-xl hover:bg-zinc-200 transition-colors">
                   Search
                </button>
             </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           <Link to="#" className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all group backdrop-blur-sm">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                 <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Minecraft Servers</h3>
              <p className="text-zinc-400 mb-6">Guides on installing plugins, changing versions, and optimizing performance.</p>
              <span className="text-white font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">View Guides <div className="w-4 h-px bg-white"></div></span>
           </Link>

           <Link to="#" className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all group backdrop-blur-sm">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                 <Terminal className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Discord Bots</h3>
              <p className="text-zinc-400 mb-6">How to deploy Node.js, Python, and Java bots using our panel.</p>
              <span className="text-white font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">View Guides <div className="w-4 h-px bg-white"></div></span>
           </Link>

           <Link to="#" className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-all group backdrop-blur-sm">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                 <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Billing & Account</h3>
              <p className="text-zinc-400 mb-6">Managing invoices, upgrading plans, and account security.</p>
              <span className="text-white font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">View Guides <div className="w-4 h-px bg-white"></div></span>
           </Link>
        </div>

        {/* Popular Articles */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-12 backdrop-blur-md">
           <h2 className="text-3xl font-bold text-white mb-8">Popular Articles</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              <Link to="#" className="flex items-start gap-4 group">
                 <div className="mt-1"><Book className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" /></div>
                 <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">How to install Plugins via SFTP</h4>
                    <p className="text-sm text-zinc-500">Updated 2 days ago</p>
                 </div>
              </Link>
              <Link to="#" className="flex items-start gap-4 group">
                 <div className="mt-1"><Book className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" /></div>
                 <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">Setting up a MySQL Database</h4>
                    <p className="text-sm text-zinc-500">Updated 1 week ago</p>
                 </div>
              </Link>
              <Link to="#" className="flex items-start gap-4 group">
                 <div className="mt-1"><Book className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" /></div>
                 <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">Optimizing Server Performance</h4>
                    <p className="text-sm text-zinc-500">Updated 3 days ago</p>
                 </div>
              </Link>
              <Link to="#" className="flex items-start gap-4 group">
                 <div className="mt-1"><Book className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" /></div>
                 <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors">How to upgrade your plan</h4>
                    <p className="text-sm text-zinc-500">Updated 1 month ago</p>
                 </div>
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Documentation;