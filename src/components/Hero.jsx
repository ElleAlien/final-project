import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start px-6 lg:px-12 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Decorative Blur Background */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-400/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-400/10 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl z-10">
        <p className="text-blue-600 dark:text-blue-400 font-black tracking-[0.3em] uppercase text-xs mb-6 animate-pulse">
          Welcome to my digital space
        </p>
        
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
          Hi, I'm <span className="text-blue-600">Elle.</span><br />
          <span className="text-slate-400 dark:text-slate-500 italic font-medium text-4xl md:text-6xl">
            I build & write things.
          </span>
        </h1>

        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
          A BSIT student at the University of the Cordilleras majoring in Network and Security. 
          I bridge the gap between technical logic and creative storytelling.
        </p>

        <div className="flex flex-wrap gap-6">
          <a href="#about" className="px-8 py-4 bg-[#0f172a] dark:bg-blue-600 text-white rounded-2xl font-bold hover:-translate-y-1 transition-all shadow-xl shadow-blue-900/10">
            About Me
          </a>
          <a href="#contact" className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            Let's Talk
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-300 dark:text-slate-700">
        <ArrowDown size={30} />
      </div>
    </section>
  );
};

export default Hero;