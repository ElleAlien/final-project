import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    /* DITO: dark:bg-slate-950 dark:border-slate-800 */
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-slate-950 border-t border-slate-50 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-left">
          {/* DITO: dark:text-white */}
          <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] dark:text-white tracking-tight mb-4">
            Have a project in mind? <span className="text-blue-600 dark:text-blue-400">Let's talk.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-bold tracking-widest uppercase text-[10px] flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            Let's build something together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Info & Aligned Cards */}
          <div className="space-y-10">
            {/* DITO: dark:text-slate-400 */}
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-lg text-left">
              I'm available for freelance work and open to discussing new opportunities. 
              Whether you have a project in mind or just want to say hello, my inbox is always open.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <a href="mailto:mariannealarma@gmail.com" className="flex items-center gap-4 group">
                {/* DITO: dark:bg-slate-900 */}
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Mail size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 tracking-wider uppercase">Email Me</p>
                  <p className="text-base md:text-lg font-bold text-[#0f172a] dark:text-white transition-colors">mariannealarma@gmail.com</p>
                </div>
              </a>

              <a href="tel:+639918734873" className="flex items-center gap-4 group">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 tracking-wider uppercase">Call Me</p>
                  <p className="text-base md:text-lg font-bold text-[#0f172a] dark:text-white transition-colors">+63 991 873 4873</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-rose-600 dark:text-rose-400 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 tracking-wider uppercase">Location</p>
                  <p className="text-base md:text-lg font-bold text-[#0f172a] dark:text-white transition-colors">Baguio, Philippines</p>
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div className="pt-4 text-left">
              <p className="text-[10px] font-black text-slate-400 tracking-widest mb-4">CONNECT WITH ME</p>
              <div className="flex gap-3">
                <a href="https://linkedin.com/in/marianne-alarma-11a116379" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-[#0f172a] dark:bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all text-xs font-bold flex items-center gap-2">
                  <Globe size={14} /> LinkedIn
                </a>
                <a href="https://www.facebook.com/alarma.elle" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-[#0f172a] dark:bg-slate-800 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-slate-700 transition-all text-xs font-bold flex items-center gap-2 border dark:border-slate-700">
                  <MessageSquare size={14} /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          {/* DITO: dark:bg-slate-900 dark:border-slate-800 */}
          <div className="bg-slate-50 dark:bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Name</label>
                  {/* DITO: dark:bg-slate-800 dark:border-slate-700 dark:text-white */}
                  <input type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Subject</label>
                <input type="text" placeholder="What's this about?" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Message</label>
                <textarea rows="4" placeholder="Your message here..." className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500"></textarea>
              </div>
              <button className="w-full py-4 bg-[#0f172a] dark:bg-blue-600 text-white font-bold uppercase tracking-widest text-[11px] rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/10">
                Send Message
                <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;