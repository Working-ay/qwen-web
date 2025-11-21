import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Server, Users, Clock, Shield, LogOut, MessageSquare, Newspaper, Plus, Trash2, Edit, Save, X, LayoutDashboard, CheckCircle, AlertCircle } from 'lucide-react';
import { BlogPost, BlogCategory } from '../types';

interface Ticket {
  id: number;
  name: string;
  email: string;
  discord?: string;
  subject: string;
  message: string;
  timestamp: string;
  status: string;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const activeTabState = useState<'dashboard' | 'blogs'>('dashboard');
  const activeTab = activeTabState[0];
  const setActiveTab = activeTabState[1];
  
  // Dashboard Stats State
  const [ping, setPing] = useState(12);
  const [cpuLoad, setCpuLoad] = useState(24);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  // Blog Manager State
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    image: '',
    author: 'Admin',
    role: 'Staff',
    tag: 'Announcement'
  });

  useEffect(() => {
    // Auth Check
    if (!localStorage.getItem('admin_session')) {
      navigate('/login');
    }

    // Load Tickets
    const savedTickets = JSON.parse(localStorage.getItem('ks_support_tickets') || '[]');
    // We reverse to show newest first
    setTickets(savedTickets.reverse());

    // Load Blog Posts
    const savedPosts = JSON.parse(localStorage.getItem('ks_blog_posts') || '[]');
    if (savedPosts.length > 0) {
       setBlogPosts(savedPosts);
    } else {
      // Fallback to defaults if local storage is empty
      const defaultPosts = [
          {
            id: 1,
            title: "Welcome to KSCloud",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
            content: "<p>Welcome to our new blog system!</p>",
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            author: "System",
            role: "Admin",
            tag: "General" as BlogCategory
          }
      ];
      setBlogPosts(defaultPosts);
      localStorage.setItem('ks_blog_posts', JSON.stringify(defaultPosts));
    }

    // Simulate Live Data
    const interval = setInterval(() => {
      setPing(Math.floor(Math.random() * (25 - 10 + 1) + 10));
      setCpuLoad(Math.floor(Math.random() * (45 - 15 + 1) + 15));
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_session');
    localStorage.removeItem('admin_user'); // Clear user data
    navigate('/login');
  };

  // --- Ticket Management Functions ---

  const handleUpdateTicketStatus = (id: number, newStatus: string) => {
    const updatedTickets = tickets.map(t => 
      t.id === id ? { ...t, status: newStatus } : t
    );
    setTickets(updatedTickets);
    // Save back to localStorage (reversing to restore chronological order for storage)
    localStorage.setItem('ks_support_tickets', JSON.stringify([...updatedTickets].reverse()));
  };

  const handleDeleteTicket = (id: number) => {
    if (window.confirm("Are you sure you want to remove this ticket permanently?")) {
      const updatedTickets = tickets.filter(t => t.id !== id);
      setTickets(updatedTickets);
      localStorage.setItem('ks_support_tickets', JSON.stringify([...updatedTickets].reverse()));
    }
  };

  // --- Blog Management Functions ---

  const handleSavePost = () => {
    if (!currentPost.title || !currentPost.content) {
      alert("Title and Content are required!");
      return;
    }

    let updatedPosts: BlogPost[];

    if (currentPost.id) {
      // Edit existing
      updatedPosts = blogPosts.map(p => (p.id === currentPost.id ? { ...p, ...currentPost } as BlogPost : p));
    } else {
      // Create new
      const newPost: BlogPost = {
        id: Date.now(), // Simple ID gen
        title: currentPost.title!,
        content: currentPost.content!,
        image: currentPost.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Default placeholder
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        author: currentPost.author || 'Admin',
        role: currentPost.role || 'Staff',
        tag: (currentPost.tag as BlogCategory) || 'Update'
      };
      updatedPosts = [...blogPosts, newPost];
    }

    setBlogPosts(updatedPosts);
    localStorage.setItem('ks_blog_posts', JSON.stringify(updatedPosts));
    
    // Reset form
    setIsEditing(false);
    setCurrentPost({ title: '', content: '', image: '', author: 'Admin', role: 'Staff', tag: 'Announcement' });
  };

  const handleEditClick = (post: BlogPost) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleDeleteClick = (id: number) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = blogPosts.filter(p => p.id !== id);
      setBlogPosts(updatedPosts);
      localStorage.setItem('ks_blog_posts', JSON.stringify(updatedPosts));
    }
  };

  const handleNewClick = () => {
    setCurrentPost({ title: '', content: '', image: '', author: 'Admin', role: 'Staff', tag: 'Announcement' });
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
       
       {/* Sidebar */}
       <aside className="w-64 bg-white/5 border-r border-white/10 flex-shrink-0 hidden md:flex flex-col pt-24 pb-6 px-4">
          <div className="space-y-2">
             <button 
               onClick={() => setActiveTab('dashboard')}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'dashboard' ? 'bg-white text-black' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
             >
                <LayoutDashboard className="w-5 h-5" /> Dashboard
             </button>
             <button 
               onClick={() => setActiveTab('blogs')}
               className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'blogs' ? 'bg-white text-black' : 'text-zinc-400 hover:bg-white/5 hover:text-white'}`}
             >
                <Newspaper className="w-5 h-5" /> Blog Manager
             </button>
          </div>
          
          <div className="mt-auto">
            <button onClick={handleLogout} className="w-full flex items-center gap-3 text-red-400 hover:text-red-300 font-bold px-4 py-3 rounded-xl hover:bg-red-500/10 transition-colors">
               <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>
       </aside>

       {/* Main Content */}
       <main className="flex-1 pt-24 pb-12 px-4 sm:px-8 overflow-y-auto h-screen">
          
          {/* Mobile Header & Tab Switcher (visible only on small screens) */}
          <div className="md:hidden mb-8 flex flex-col gap-4">
             <div className="flex gap-2 bg-white/5 p-1 rounded-xl">
                <button 
                   onClick={() => setActiveTab('dashboard')}
                   className={`flex-1 py-2 rounded-lg text-sm font-bold ${activeTab === 'dashboard' ? 'bg-white text-black' : 'text-zinc-400'}`}
                >
                   Dashboard
                </button>
                <button 
                   onClick={() => setActiveTab('blogs')}
                   className={`flex-1 py-2 rounded-lg text-sm font-bold ${activeTab === 'blogs' ? 'bg-white text-black' : 'text-zinc-400'}`}
                >
                   Blog Manager
                </button>
             </div>
             <button onClick={handleLogout} className="text-red-400 text-sm font-bold flex items-center gap-2">
                <LogOut className="w-4 h-4" /> Logout
             </button>
          </div>

          {activeTab === 'dashboard' && (
            <div className="animate-fade-in-up">
                {/* Header */}
                <div className="mb-8 border-b border-white/10 pb-6">
                    <h1 className="text-3xl font-black flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        System Overview
                    </h1>
                    <p className="text-zinc-500 font-mono text-sm mt-1">Real-time Node Metrics</p>
                </div>

                {/* Live Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-black border border-green-500/30 p-6 rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                            <div className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1">Network Latency</div>
                            <div className="text-4xl font-mono font-bold text-green-400">{ping}ms</div>
                            </div>
                            <Activity className="w-6 h-6 text-green-500" />
                        </div>
                        <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 transition-all duration-500" style={{ width: `${(ping / 50) * 100}%` }}></div>
                        </div>
                    </div>

                    <div className="bg-black border border-white/10 p-6 rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                            <div className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1">CPU Load (EPYC)</div>
                            <div className="text-4xl font-mono font-bold text-white">{cpuLoad}%</div>
                            </div>
                            <Server className="w-6 h-6 text-zinc-500" />
                        </div>
                        <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                            <div className="h-full bg-white transition-all duration-500" style={{ width: `${cpuLoad}%` }}></div>
                        </div>
                    </div>

                    <div className="bg-black border border-white/10 p-6 rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                            <div className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1">Active Nodes</div>
                            <div className="text-4xl font-mono font-bold text-white">8/8</div>
                            </div>
                            <Shield className="w-6 h-6 text-zinc-500" />
                        </div>
                        <div className="text-xs text-green-500 mt-2 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> 100% Uptime (30d)
                        </div>
                    </div>

                    <div className="bg-black border border-white/10 p-6 rounded-2xl">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                            <div className="text-zinc-500 text-xs uppercase font-bold tracking-wider mb-1">Pending Tickets</div>
                            <div className="text-4xl font-mono font-bold text-white">{tickets.length}</div>
                            </div>
                            <Users className="w-6 h-6 text-zinc-500" />
                        </div>
                    </div>
                </div>

                {/* Support Tickets Section */}
                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <MessageSquare className="w-5 h-5" /> Support Inquiries
                        </h2>
                        <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-zinc-400">
                            Live Feed
                        </span>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                            <tr className="bg-black/40 border-b border-white/10">
                                <th className="p-4 text-xs font-bold text-zinc-500 uppercase">ID</th>
                                <th className="p-4 text-xs font-bold text-zinc-500 uppercase">User</th>
                                <th className="p-4 text-xs font-bold text-zinc-500 uppercase">Subject</th>
                                <th className="p-4 text-xs font-bold text-zinc-500 uppercase">Message</th>
                                <th className="p-4 text-xs font-bold text-zinc-500 uppercase">Date</th>
                                <th className="p-4 text-xs font-bold text-zinc-500 uppercase">Status</th>
                                <th className="p-4 text-xs font-bold text-zinc-500 uppercase text-right">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                            {tickets.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="p-8 text-center text-zinc-500 italic">
                                        No support tickets found.
                                    </td>
                                </tr>
                            ) : (
                                tickets.map((ticket) => (
                                    <tr key={ticket.id} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-4 font-mono text-xs text-zinc-500">#{ticket.id}</td>
                                        <td className="p-4">
                                        <div className="font-bold text-white text-sm">{ticket.name}</div>
                                        <div className="text-xs text-zinc-500">{ticket.email}</div>
                                        {ticket.discord && <div className="text-xs text-[#5865F2] mt-1 font-medium">@{ticket.discord}</div>}
                                        </td>
                                        <td className="p-4 text-sm text-zinc-300">{ticket.subject}</td>
                                        <td className="p-4 text-sm text-zinc-400 max-w-xs truncate" title={ticket.message}>{ticket.message}</td>
                                        <td className="p-4 text-xs text-zinc-500">{ticket.timestamp}</td>
                                        <td className="p-4">
                                          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-bold ${
                                              ticket.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                              ticket.status === 'Pending' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                                              'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                          }`}>
                                              {ticket.status === 'Completed' ? <CheckCircle className="w-3 h-3" /> : 
                                               ticket.status === 'Pending' ? <Clock className="w-3 h-3" /> : 
                                               <AlertCircle className="w-3 h-3" />}
                                              
                                              <select 
                                                 value={ticket.status}
                                                 onChange={(e) => handleUpdateTicketStatus(ticket.id, e.target.value)}
                                                 className="bg-transparent border-none text-xs font-bold focus:ring-0 cursor-pointer appearance-none pr-2 outline-none"
                                              >
                                                  <option value="Open" className="bg-zinc-900 text-white">Open</option>
                                                  <option value="Pending" className="bg-zinc-900 text-white">Pending</option>
                                                  <option value="Completed" className="bg-zinc-900 text-white">Completed</option>
                                              </select>
                                          </div>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button 
                                              onClick={() => handleDeleteTicket(ticket.id)}
                                              className="p-2 bg-white/5 rounded-lg hover:bg-red-500/20 hover:text-red-400 text-zinc-500 transition-colors"
                                              title="Remove Ticket"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          )}

          {activeTab === 'blogs' && (
             <div className="animate-fade-in-up">
                <div className="mb-8 border-b border-white/10 pb-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-black flex items-center gap-3">
                            <Newspaper className="w-8 h-8 text-white" />
                            Blog Manager
                        </h1>
                        <p className="text-zinc-500 font-mono text-sm mt-1">Create and Edit Announcements</p>
                    </div>
                    <button 
                       onClick={handleNewClick}
                       className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-lg"
                    >
                       <Plus className="w-5 h-5" /> New Post
                    </button>
                </div>

                {isEditing ? (
                   <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                      <div className="flex justify-between items-center mb-8">
                         <h2 className="text-2xl font-bold text-white">
                            {currentPost.id ? 'Edit Post' : 'Create New Post'}
                         </h2>
                         <button onClick={() => setIsEditing(false)} className="p-2 bg-white/10 rounded-lg hover:bg-white/20 text-white">
                            <X className="w-5 h-5" />
                         </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Title</label>
                            <input 
                               type="text" 
                               value={currentPost.title}
                               onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
                               className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                               placeholder="e.g. New Server Location!"
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Image URL</label>
                            <input 
                               type="text" 
                               value={currentPost.image}
                               onChange={(e) => setCurrentPost({...currentPost, image: e.target.value})}
                               className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                               placeholder="https://..."
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Author Name</label>
                            <input 
                               type="text" 
                               value={currentPost.author}
                               onChange={(e) => setCurrentPost({...currentPost, author: e.target.value})}
                               className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Category</label>
                            <select 
                               value={currentPost.tag}
                               onChange={(e) => setCurrentPost({...currentPost, tag: e.target.value as BlogCategory})}
                               className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                            >
                               <option value="Announcement">Announcement</option>
                               <option value="Update">Update</option>
                               <option value="Report">Report</option>
                               <option value="Blog">Blog</option>
                            </select>
                         </div>
                      </div>

                      <div className="space-y-2 mb-8">
                         <label className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Content (HTML Supported)</label>
                         <textarea 
                            value={currentPost.content}
                            onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                            rows={8}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors font-mono text-sm"
                            placeholder="<p>Write your update here...</p>"
                         />
                         <p className="text-xs text-zinc-500">Tip: You can use HTML tags like &lt;strong&gt;, &lt;p&gt;, &lt;a&gt; for formatting.</p>
                      </div>

                      <div className="flex gap-4">
                         <button 
                            onClick={handleSavePost}
                            className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 rounded-xl transition-colors flex items-center gap-2"
                         >
                            <Save className="w-5 h-5" /> {currentPost.id ? 'Update Post' : 'Publish Post'}
                         </button>
                         <button 
                            onClick={() => setIsEditing(false)}
                            className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                         >
                            Cancel
                         </button>
                      </div>
                   </div>
                ) : (
                   <div className="grid grid-cols-1 gap-6">
                      {blogPosts.length === 0 ? (
                          <div className="text-center py-12 bg-white/5 rounded-3xl border border-white/10 text-zinc-500">
                              No blog posts found. Create one to get started.
                          </div>
                      ) : (
                          blogPosts.map((post) => (
                            <div key={post.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white/10 transition-colors">
                                <div className="w-24 h-24 rounded-xl overflow-hidden bg-black flex-shrink-0">
                                   <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                   <div className="flex items-center gap-3 mb-1">
                                      <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${
                                         post.tag === 'Announcement' ? 'bg-red-500/20 text-red-400' : 
                                         post.tag === 'Update' ? 'bg-blue-500/20 text-blue-400' : 
                                         'bg-zinc-500/20 text-zinc-400'
                                      }`}>
                                         {post.tag}
                                      </span>
                                      <span className="text-zinc-500 text-xs">{post.date}</span>
                                   </div>
                                   <h3 className="text-xl font-bold text-white mb-1">{post.title}</h3>
                                   <p className="text-sm text-zinc-400">By {post.author} ({post.role})</p>
                                </div>
                                <div className="flex gap-3">
                                   <button 
                                     onClick={() => handleEditClick(post)}
                                     className="p-3 bg-white/10 rounded-xl text-white hover:bg-white hover:text-black transition-colors"
                                     title="Edit"
                                   >
                                      <Edit className="w-5 h-5" />
                                   </button>
                                   <button 
                                     onClick={() => handleDeleteClick(post.id)}
                                     className="p-3 bg-red-500/10 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                                     title="Delete"
                                   >
                                      <Trash2 className="w-5 h-5" />
                                   </button>
                                </div>
                            </div>
                          )).reverse()
                      )}
                   </div>
                )}
             </div>
          )}
       </main>
    </div>
  );
};

export default AdminDashboard;