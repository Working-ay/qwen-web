import React, { useState } from 'react';
import { Clock, Mail, MessageSquare, Send, MapPin, CheckCircle, Disc, Plus, Minus, Hash } from 'lucide-react';
import { LINKS, FAQ_DATA } from '../constants';

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discord: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // --- BACKEND SIMULATION ---
    // Save ticket to local storage so Admin Dashboard can see it
    const newTicket = {
      id: Math.floor(Math.random() * 10000),
      ...formData,
      timestamp: new Date().toLocaleString(),
      status: 'Open'
    };
    
    const existingTickets = JSON.parse(localStorage.getItem('ks_support_tickets') || '[]');
    localStorage.setItem('ks_support_tickets', JSON.stringify([...existingTickets, newTicket]));
    // --------------------------

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', discord: '', subject: '', message: '' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Support Team Online
           </div>
           <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
             We're Here to <span className="text-white/50">Help</span>
           </h1>
           <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
             Have a question or running into an issue? Our expert team is ready to assist you.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
           
           {/* Contact Information Side */}
           <div className="space-y-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden backdrop-blur-md">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-white" /> Business Hours
                 </h3>
                 <div className="space-y-4 text-zinc-300">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                       <span>Monday - Sunday</span>
                       <span className="font-bold text-white">Everyday</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       <div className="flex justify-between items-center">
                          <span className="text-sm text-zinc-500">European Time (CET)</span>
                          <span className="font-mono text-white">10:00 AM - 10:00 PM</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm text-zinc-500">Indian Time (IST)</span>
                          <span className="font-mono text-white">02:30 PM - 02:30 AM</span>
                       </div>
                    </div>
                    <p className="text-xs text-zinc-500 mt-4 pt-4 border-t border-white/10 italic">
                       *Critical infrastructure issues are monitored 24/7/365.
                    </p>
                 </div>
              </div>

              <div className="bg-[#5865F2] rounded-3xl p-8 text-white text-center relative overflow-hidden group hover:bg-[#4752C4] transition-colors shadow-lg shadow-[#5865F2]/20">
                 <div className="relative z-10">
                    <Disc className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Join our Discord</h3>
                    <p className="text-white/80 mb-6">Get the fastest support from our community and staff team.</p>
                    <a 
                       href={LINKS.discord} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-block bg-white text-[#5865F2] font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
                    >
                       Join Server
                    </a>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-white" /> Email Support
                 </h3>
                 <p className="text-zinc-400 mb-4">Prefer email? Send us a message and we'll get back to you within 24 hours.</p>
                 <a href={`mailto:${LINKS.email}`} className="text-white hover:text-zinc-300 transition-colors font-mono">
                    {LINKS.email}
                 </a>
              </div>
           </div>

           {/* Contact Form Side */}
           <div className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative backdrop-blur-md">
                 {submitted ? (
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-xl rounded-[2.5rem] flex flex-col items-center justify-center text-center p-8 z-20 animate-fade-in-up">
                       <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                          <CheckCircle className="w-10 h-10 text-green-500" />
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                       <p className="text-zinc-400 max-w-md">Thank you for contacting us. A support representative will review your message and get back to you shortly.</p>
                    </div>
                 ) : null}

                 <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
                 
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Your Name</label>
                          <input 
                             type="text" 
                             name="name"
                             required
                             value={formData.name}
                             onChange={handleChange}
                             className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600"
                             placeholder="John Doe"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Email Address</label>
                          <input 
                             type="email" 
                             name="email"
                             required
                             value={formData.email}
                             onChange={handleChange}
                             className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600"
                             placeholder="john@example.com"
                          />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Discord Username <span className="text-zinc-600 normal-case font-normal">(Optional)</span></label>
                       <div className="relative">
                          <Hash className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                          <input 
                             type="text" 
                             name="discord"
                             value={formData.discord}
                             onChange={handleChange}
                             className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600"
                             placeholder="username"
                          />
                       </div>
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Subject</label>
                       <div className="relative">
                          <MessageSquare className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                          <input 
                             type="text" 
                             name="subject"
                             required
                             value={formData.subject}
                             onChange={handleChange}
                             className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600"
                             placeholder="How can we help you?"
                          />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Message</label>
                       <textarea 
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-600 resize-none"
                          placeholder="Describe your issue or question in detail..."
                       ></textarea>
                    </div>

                    <button 
                       type="submit" 
                       className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-xl"
                    >
                       <Send className="w-5 h-5" /> Send Message
                    </button>
                 </form>
              </div>
           </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold text-white mb-8 text-center">General Questions</h2>
           <div className="space-y-4">
             {FAQ_DATA.support.map((faq, idx) => (
               <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                 <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                 >
                    <span className="font-bold text-white text-lg">{faq.question}</span>
                    {openFaq === idx ? <Minus className="w-5 h-5 text-zinc-400" /> : <Plus className="w-5 h-5 text-zinc-400" />}
                 </button>
                 {openFaq === idx && (
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed animate-fade-in-up">
                       {faq.answer}
                    </div>
                 )}
               </div>
             ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Support;