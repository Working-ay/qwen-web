
import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight, Tag, Search, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LINKS } from '../constants';
import { BlogPost, BlogCategory } from '../types';

// Default posts to show if no custom data exists
const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "🇺🇸 AMERICAN NODE ARRIVAL!",
    image: "https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=2086&auto=format&fit=crop",
    content: `<p class="mb-4 font-bold text-lg text-white">⭐ Greetings @everyone !</p>
    <p class="mb-4">We’re thrilled to announce that our <strong class="text-white">American location (Boston, NA)</strong> is officially live! This upgrade is part of our ongoing effort to deliver better performance, lower latency and a smoother hosting experience for all our users worldwide.</p>
    <p class="mb-4">As part of this expansion we’ll be closing our Indian node and focusing on strengthening our global infrastructure. All servers currently hosted on the Indian node will be transferred to our new American node (Boston, NA) to ensure improved stability and connection speeds.</p>
    <p class="mb-4">We also want to thank our amazing community, you voted for the American location and we listened + those who are interested in American Node so please open a ticket on our <a href="${LINKS.billing}" target="_blank" rel="noreferrer" class="text-blue-400 hover:underline">Billing Panel</a>.</p>
    <p class="italic text-zinc-400 border-l-4 border-white/20 pl-4 mt-6">⭐ Happy hosting y'all and thank you for being part of <a href="${LINKS.billing}" target="_blank" rel="noreferrer" class="text-white hover:underline">KSCloud Hosting Services.</a></p>`,
    date: "Oct 27, 2025",
    author: "AyrixMC",
    role: "COO / Director",
    tag: "Announcement"
  },
  {
    id: 2,
    title: "Welcome to KSCloud Hosting",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    content: `<p class="mb-4">Hello everyone! I am Frontman, Founder of KSCloud Hosting.</p>
    <p class="mb-4">We founded KSCloud with a simple mission: to provide enterprise-grade hosting at prices that don't break the bank. We were tired of seeing hosts charge premium rates for outdated hardware.</p>
    <p>With the help of AyrixMC and our amazing staff team, we have built a platform powered by <strong>AMD EPYC</strong> processors and <strong>NVMe SSDs</strong>. We are just getting started. Stay tuned for more updates!</p>`,
    date: "Oct 25, 2025",
    author: "Frontman",
    role: "Founder",
    tag: "General"
  }
];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All posts');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedPosts = localStorage.getItem('ks_blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(DEFAULT_POSTS);
      localStorage.setItem('ks_blog_posts', JSON.stringify(DEFAULT_POSTS));
    }
  }, []);

  const categories = ['All posts', 'Announcement', 'Update', 'Report', 'Blog', 'General'];

  // Filter posts based on category and search
  const filteredPosts = posts
    .filter(post => {
      const matchesCategory = activeCategory === 'All posts' || post.tag === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => b.id - a.id);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0 pt-8">
            <div className="sticky top-32">
              <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>

              <div className="mb-4 text-xs font-bold text-zinc-600 uppercase tracking-widest">Browse</div>
              <nav className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeCategory === cat 
                        ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </nav>

              <div className="mt-12 pt-12 border-t border-white/5">
                <div className="mb-4 text-xs font-bold text-zinc-600 uppercase tracking-widest">Resources</div>
                <div className="space-y-3">
                   <Link to="/documentation" className="block text-sm text-zinc-400 hover:text-white transition-colors">Documentation</Link>
                   <Link to="/support" className="block text-sm text-zinc-400 hover:text-white transition-colors">Support Center</Link>
                   <a href={LINKS.status} className="block text-sm text-zinc-400 hover:text-white transition-colors">System Status</a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Mobile Header (Back Link) */}
            <div className="lg:hidden mb-8">
               <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
            </div>

            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/5 pb-10">
              <div>
                <h1 className="text-5xl font-black text-white mb-3 tracking-tight">Blog</h1>
                <p className="text-zinc-400 text-lg">Notes from the KSCloud product, dev, and community teams.</p>
              </div>
              
              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search posts..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#09090b] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all placeholder:text-zinc-600"
                />
              </div>
            </div>
            
            {/* Mobile Category Filter */}
            <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                    activeCategory === cat 
                      ? 'bg-white text-black' 
                      : 'bg-white/5 text-zinc-400 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="group bg-[#09090b] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col"
                  >
                    {/* Image */}
                    <div className="w-full aspect-[16/9] relative overflow-hidden p-2">
                       <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                         <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                         />
                       </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 pt-4 flex flex-col flex-1">
                       <div className="flex items-center gap-3 mb-4 text-xs font-medium">
                          <span className={`uppercase tracking-wider ${
                            post.tag === 'Announcement' ? 'text-yellow-500' : 
                            post.tag === 'Update' ? 'text-blue-400' : 
                            'text-zinc-500'
                          }`}>
                            {post.tag}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                          <span className="text-zinc-500 uppercase tracking-wider">{post.date}</span>
                       </div>

                       <h2 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-zinc-300 transition-colors">
                          {post.title}
                       </h2>

                       {/* Show snippet for preview, full content handled if we had a detailed view */}
                       <div className="text-zinc-400 text-sm line-clamp-3 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                       <div className="mt-auto flex items-center gap-3 pt-6 border-t border-white/5">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                             {post.author.charAt(0)}
                          </div>
                          <div className="text-xs">
                             <div className="text-white font-medium">{post.author}</div>
                             <div className="text-zinc-600">{post.role}</div>
                          </div>
                       </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-white/5 rounded-3xl bg-white/[0.02]">
                <p className="text-zinc-500">No posts found matching your criteria.</p>
                <button onClick={() => {setActiveCategory('All posts'); setSearchQuery('')}} className="mt-4 text-white text-sm hover:underline">Clear filters</button>
              </div>
            )}

            {/* Subscribe Footer */}
            <div className="bg-[#09090b] border border-white/10 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
               <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Subscribe to our changelog.</h3>
                  <p className="text-zinc-400 text-sm">We guarantee no spam. Only important updates.</p>
               </div>
               <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Your email..." 
                    className="bg-black border border-white/10 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-white/30 w-full md:w-64 transition-colors"
                  />
                  <button className="bg-white text-black font-bold px-6 py-3 rounded-xl text-sm hover:bg-zinc-200 transition-colors">
                     Subscribe
                  </button>
               </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
