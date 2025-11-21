import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, Server, Gamepad2, Bot, Terminal, Info, 
  ChevronDown, Network, Newspaper, Briefcase, ExternalLink, HeadphonesIcon, Book, ArrowUpRight, Lock, Star
} from 'lucide-react';
import { LINKS, LOGO_URL } from '../constants';
import { ExtendedTeamMember } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<ExtendedTeamMember | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    setIsOpen(false);
    setActiveDropdown(null);

    const userStr = localStorage.getItem('admin_user');
    if (userStr) {
      try {
        setAdminUser(JSON.parse(userStr));
      } catch (e) {
        setAdminUser(null);
      }
    } else {
      setAdminUser(null);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (path: string) => location.pathname === path;
  const isGroupActive = (paths: string[]) => paths.includes(location.pathname);

  return (
    <nav ref={navRef} className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled || isOpen || activeDropdown
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' 
        : 'bg-transparent border-b border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center z-50 relative">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={LOGO_URL} 
                alt="KSCloud Logo" 
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              />
              <span className="text-white font-bold text-xl tracking-tight group-hover:tracking-normal transition-all hidden sm:block">
                KS<span className="text-zinc-500">Cloud</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
            <Link 
              to="/" 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('company')}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isGroupActive(['/about', '/infrastructure', '/blog', '/careers', '/documentation', '/testimonials']) 
                    ? 'bg-white text-black shadow-lg' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                } ${activeDropdown === 'company' ? 'bg-white text-black' : ''}`}
              >
                Company <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-4 w-72 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl shadow-black overflow-hidden animate-fade-in-up origin-top-left p-2 backdrop-blur-2xl ring-1 ring-white/5">
                  <div className="space-y-1">
                    <Link to="/about" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all">
                      <div className="bg-white/5 p-2.5 rounded-lg text-zinc-400 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <Info className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-white transition-colors">About Us</div>
                        <div className="text-[11px] text-zinc-500 leading-tight">Our story & mission</div>
                      </div>
                    </Link>
                    <Link to="/testimonials" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all">
                      <div className="bg-white/5 p-2.5 rounded-lg text-zinc-400 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <Star className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-white transition-colors">Testimonials</div>
                        <div className="text-[11px] text-zinc-500 leading-tight">Client Reviews</div>
                      </div>
                    </Link>
                    <Link to="/infrastructure" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all">
                      <div className="bg-white/5 p-2.5 rounded-lg text-zinc-400 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <Network className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-white transition-colors">Infrastructure</div>
                        <div className="text-[11px] text-zinc-500 leading-tight">Network & Hardware</div>
                      </div>
                    </Link>
                    <Link to="/documentation" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all">
                      <div className="bg-white/5 p-2.5 rounded-lg text-zinc-400 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <Book className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-white transition-colors">Documentation</div>
                        <div className="text-[11px] text-zinc-500 leading-tight">Guides & Tutorials</div>
                      </div>
                    </Link>
                    <Link to="/blog" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all">
                      <div className="bg-white/5 p-2.5 rounded-lg text-zinc-400 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <Newspaper className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-white transition-colors">Blog</div>
                        <div className="text-[11px] text-zinc-500 leading-tight">Latest news & updates</div>
                      </div>
                    </Link>
                    <Link to="/careers" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all">
                      <div className="bg-white/5 p-2.5 rounded-lg text-zinc-400 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-white transition-colors">Careers</div>
                        <div className="text-[11px] text-zinc-500 leading-tight">Join our team</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('services')}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isGroupActive(['/minecraft', '/discord-bots', '/vps'])
                    ? 'bg-white text-black shadow-lg' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                } ${activeDropdown === 'services' ? 'bg-white text-black' : ''}`}
              >
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-4 w-80 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl shadow-black overflow-hidden animate-fade-in-up origin-top-left p-2 backdrop-blur-2xl ring-1 ring-white/5">
                  <div className="space-y-1">
                    <Link to="/minecraft" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all">
                      <div className="bg-white/5 p-2.5 rounded-lg text-zinc-400 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <Gamepad2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-white transition-colors">Minecraft Hosting</div>
                        <div className="text-[11px] text-zinc-500 leading-tight">EPYC 9354P powered servers</div>
                      </div>
                    </Link>
                    <Link to="/discord-bots" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all">
                      <div className="bg-white/5 p-2.5 rounded-lg text-zinc-400 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-white transition-colors">Discord Bots</div>
                        <div className="text-[11px] text-zinc-500 leading-tight">24/7 Node.js & Python</div>
                      </div>
                    </Link>
                    <Link to="/vps" className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 group transition-all">
                      <div className="bg-white/5 p-2.5 rounded-lg text-zinc-400 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm group-hover:text-white transition-colors">VPS Hosting</div>
                        <div className="text-[11px] text-zinc-500 leading-tight">Coming 2026</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/support" 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive('/support') 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Support
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
             <a 
               href={LINKS.billing} 
               target="_blank"
               rel="noopener noreferrer"
               className="text-zinc-400 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5 hover:tracking-wide"
             >
               Billing Area
             </a>
             <div className="flex items-center gap-2">
               <a 
                 href={LINKS.panel} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-white hover:bg-zinc-200 text-black font-bold px-6 py-2.5 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
               >
                 Console
               </a>
               
               {adminUser ? (
                 <Link
                   to="/admin"
                   className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full pl-1 pr-4 py-1 hover:bg-white/20 transition-all"
                   title="Go to Admin Dashboard"
                 >
                   <div className="w-8 h-8 rounded-full overflow-hidden bg-black border border-white/10">
                      <img src={adminUser.avatar} alt={adminUser.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="text-xs text-left">
                      <div className="text-white font-bold leading-none">{adminUser.name}</div>
                   </div>
                 </Link>
               ) : (
                 <Link
                   to="/login"
                   className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-all"
                   title="Admin Console"
                 >
                   <Lock className="w-4 h-4" />
                 </Link>
               )}
             </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col animate-fade-in-up h-screen w-screen overflow-y-auto">
          <div className="flex-1 px-6 pt-24 pb-12 flex flex-col relative">
            {/* Background Noise for Mobile Menu */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            
            <div className="flex flex-col gap-8 relative z-10">
              <Link to="/" className="text-4xl font-bold text-white hover:text-zinc-400 transition-colors tracking-tight">Home</Link>
              
              <div className="space-y-4">
                <div className="text-xs font-bold text-zinc-600 uppercase tracking-[0.2em] mb-2">Services</div>
                <Link to="/minecraft" className="block text-3xl font-bold text-white hover:text-zinc-400 transition-colors pl-2 border-l-2 border-transparent hover:border-white">Minecraft</Link>
                <Link to="/discord-bots" className="block text-3xl font-bold text-white hover:text-zinc-400 transition-colors pl-2 border-l-2 border-transparent hover:border-white">Discord Bots</Link>
                <Link to="/vps" className="block text-3xl font-bold text-white/50 hover:text-white transition-colors pl-2 border-l-2 border-transparent hover:border-white">VPS (Soon)</Link>
              </div>

              <div className="space-y-4">
                <div className="text-xs font-bold text-zinc-600 uppercase tracking-[0.2em] mb-2">Company</div>
                <Link to="/about" className="block text-2xl font-bold text-white hover:text-zinc-400 transition-colors pl-2">About</Link>
                <Link to="/testimonials" className="block text-2xl font-bold text-white hover:text-zinc-400 transition-colors pl-2">Testimonials</Link>
                <Link to="/blog" className="block text-2xl font-bold text-white hover:text-zinc-400 transition-colors pl-2">Blog</Link>
                <Link to="/support" className="block text-2xl font-bold text-white hover:text-zinc-400 transition-colors pl-2">Support</Link>
              </div>
            </div>

            <div className="mt-auto pt-12 space-y-4 relative z-10">
               <a 
                 href={LINKS.billing} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-xl text-zinc-400 hover:text-white font-medium block"
               >
                 Billing Area
               </a>
               <div className="flex gap-4">
                 <a 
                   href={LINKS.panel} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex-1 text-xl text-white font-bold flex items-center gap-2 group p-4 bg-white/10 border border-white/10 rounded-2xl justify-center"
                 >
                   Sign into Console <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
                 {adminUser ? (
                   <Link to="/admin" className="w-16 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                      <img src={adminUser.avatar} alt={adminUser.name} className="w-full h-full object-cover opacity-80" />
                   </Link>
                 ) : (
                   <Link
                     to="/login"
                     className="w-16 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white"
                   >
                     <Lock className="w-6 h-6" />
                   </Link>
                 )}
               </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;