import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Minecraft from './pages/Minecraft';
import DiscordBots from './pages/DiscordBots';
import VPS from './pages/VPS';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Infrastructure from './pages/Infrastructure';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Support from './pages/Support';
import Documentation from './pages/Documentation';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Testimonials from './pages/Testimonials';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-slate-200 font-sans selection:bg-brand-accent selection:text-black min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/minecraft" element={<Minecraft />} />
            <Route path="/discord-bots" element={<DiscordBots />} />
            <Route path="/vps" element={<VPS />} />
            <Route path="/about" element={<About />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/support" element={<Support />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;