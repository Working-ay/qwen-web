import React, { useState, useEffect } from 'react';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TEAM } from '../constants';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem('admin_session')) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulated authentication delay
    setTimeout(() => {
      // Credentials checks
      if (email === 'admin@kscloudhost.net' && password === 'ayrixmc') {
        // Find AyrixMC's data for the profile, or fallback to generic admin
        const staffProfile = TEAM.find(m => m.name === 'AyrixMC') || {
          name: 'Administrator',
          role: 'Staff',
          avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Admin'
        };

        // Set session and user data
        localStorage.setItem('admin_session', 'true');
        localStorage.setItem('admin_user', JSON.stringify(staffProfile));
        
        navigate('/admin');
      } else {
        setError('Invalid credentials. Access denied.');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-black relative z-10">
        <div className="text-center mb-8">
           <div className="w-16 h-16 bg-black/50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
              <Lock className="w-8 h-8 text-white" />
           </div>
           <h1 className="text-2xl font-bold text-white">Admin Console</h1>
           <p className="text-zinc-500 text-sm">Restricted Access. Authorized Personnel Only.</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-xl mb-6 flex items-center gap-3 text-sm">
            <AlertCircle className="w-4 h-4" /> {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
           <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700"
                placeholder="name@example.com"
                required
              />
           </div>
           <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-zinc-700"
                placeholder="Enter your password"
                required
              />
           </div>

           <button 
             type="submit" 
             disabled={loading}
             className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
           >
             {loading ? (
               <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Authenticating...
               </>
             ) : (
               <>
                 Secure Login <ArrowRight className="w-4 h-4" />
               </>
             )}
           </button>
        </form>
      </div>
    </div>
  );
};

export default Login;