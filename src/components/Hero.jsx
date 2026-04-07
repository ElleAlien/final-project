import React from 'react';
import { Download, Eye } from 'lucide-react'; // Dagdag tayo icons para mas sosyal

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-start bg-white dark:bg-slate-950 px-6 md:px-24 transition-colors duration-500">
      <div className="max-w-4xl text-left">
        
        {/* IBALIK NATIN YUNG BADGE DITO */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
            Welcome to my digital space
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.8] mb-4">
          Hi, I'm <span className="text-blue-600">Elle.</span>
        </h1>

        <h2 className="text-5xl md:text-7xl font-medium text-slate-400 italic tracking-tighter leading-tight mb-8">
          I build & write things.
        </h2>

        <p className="max-w-xl text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-12">
          A BSIT student at the University of the Cordilleras majoring in Network 
          and Security. I bridge the gap between technical logic and creative storytelling.
        </p>

        <div className="flex flex-wrap gap-4">
          {/* VIEW BUTTON */}
          <a 
            href="/Alarma_CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-[#0f172a] text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center gap-2"
          >
            <Eye size={18} />
            View CV
          </a>

          {/* DOWNLOAD BUTTON */}
          <a 
            href="/Alarma_CV.pdf" 
            download="Alarma_Marianne_CV.pdf"
            className="group px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-all flex items-center gap-2"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;