import React, { useEffect, useState } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { LINKS } from '../constants';
import { BlogPost } from '../types';

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

  useEffect(() => {
    // Load posts from local storage or use defaults
    const savedPosts = localStorage.getItem('ks_blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(DEFAULT_POSTS);
      // Save defaults to storage so admin can see them too
      localStorage.setItem('ks_blog_posts', JSON.stringify(DEFAULT_POSTS));
    }
  }, []);

  // Sort posts: newest (highest ID) first, though in a real app use date
  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            KSCloud <span className="text-zinc-500">Blog</span>
          </h1>
          <p className="text-xl text-zinc-400">Updates, announcements, and news from the team.</p>
        </div>

        {/* Grid with items-start to allow cards to size according to content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {sortedPosts.map((post) => (
            <article key={post.id} className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md hover:border-white/20 transition-all duration-500 flex flex-col shadow-2xl shadow-black/50 group">
              {/* Image Section */}
              <div className="w-full h-56 relative overflow-hidden flex-shrink-0">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                 <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                 />
                 <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white text-black font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[10px] flex items-center gap-1.5 shadow-lg">
                       <Tag className="w-3 h-3" /> {post.tag}
                    </span>
                 </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col">
                 <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mb-6 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
                          <User className="w-3 h-3" />
                       </div>
                       <div>
                          <span className="text-white block leading-none">{post.author}</span>
                          <span className="text-xs opacity-70">{post.role}</span>
                       </div>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5">
                       <Calendar className="w-3 h-3" /> {post.date}
                    </div>
                 </div>

                 <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {post.title}
                 </h2>
                 
                 {/* Render HTML content safely since this is admin-controlled */}
                 <div 
                    className="text-zinc-300 leading-relaxed text-sm space-y-3 mb-6 prose prose-invert prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                 />

                 <div className="mt-auto pt-6 border-t border-white/5 flex justify-end">
                    <a 
                       href={LINKS.billing} 
                       target="_blank" 
                       rel="noreferrer"
                       className="inline-flex items-center gap-2 text-white text-sm font-bold hover:text-zinc-300 transition-colors"
                    >
                       Visit Billing Panel <ArrowRight className="w-4 h-4" />
                    </a>
                 </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;