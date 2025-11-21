import React from 'react';
import { LINKS, LOGO_URL } from '../constants';
import { Link } from 'react-router-dom';
import { Twitter, Disc, Mail, ExternalLink, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO_URL} alt="KSCloud" className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
              <span className="text-2xl font-bold text-white">KS<span className="text-zinc-500">Cloud</span></span>
            </div>
            <p className="text-zinc-500 mb-6 max-w-md leading-relaxed">
              The Ultimate Minecraft and Game Server Hosting Solution. 
              Powered by high-performance AMD EPYC hardware, instant setup, and DDoS protection.
              <br/>
              Founded by Frontman & AyrixMC.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href={LINKS.discord} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-all duration-300">
                <Disc className="w-5 h-5" />
              </a>
              <a href={LINKS.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={`mailto:${LINKS.email}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/minecraft" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-white"></span>Minecraft Hosting</Link></li>
              <li><Link to="/discord-bots" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-white"></span>Discord Bot Hosting</Link></li>
              <li><Link to="/vps" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-white"></span>VPS (Coming Soon)</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Client Area</h3>
            <ul className="space-y-3">
              <li><a href={LINKS.panel} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" /> Control Panel</a></li>
              <li><a href={LINKS.billing} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2"><ExternalLink className="w-3 h-3" /> Billing & Support</a></li>
              <li><a href={LINKS.status} className="text-zinc-500 hover:text-white transition-colors">System Status</a></li>
              <li><Link to="/about" className="text-zinc-500 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} KSCloud Hosting. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-600 font-medium">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;