import React from 'react';
import ellePic from './assets/elle.jpg';

const AboutMe = () => {
  return (
    /* DITO: Nilagyan natin ng dark:bg-slate-950 para mag-dark yung background ng section */
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 bg-blue-100/20 blur-3xl rounded-full"></div>
      
      {/* Header Section */}
      <div className="mb-12">
        {/* DITO: Nilagyan natin ng dark:text-white para pumuti yung "About Me" title */}
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter">
          About Me
        </h2>
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-12 bg-blue-500"></div>
          <p className="text-blue-500 font-semibold text-lg italic tracking-wide">
            A little about who I am and what I do
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Profile Card (Left Side) */}
        <div className="lg:col-span-4 space-y-8">
          {/* DITO: Nilagyan ng dark:bg-slate-900 at dark:border-slate-800 para mag-blend yung card sa dark mode */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 dark:border-slate-800 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="aspect-square overflow-hidden rounded-[2rem] mb-6 bg-slate-100 dark:bg-slate-800">
               <img 
                src={ellePic} 
                alt="Elle Alarma" 
                className="w-full h-full object-cover"
               />
            </div>
            <div className="text-center pb-4">
              {/* DITO: Nilagyan ng dark:text-slate-100 para mabasa yung pangalan mo */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Marianne Meryll M. Alarma</h3>
              <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mt-1">BSIT-NS 2nd Year</p>
            </div>
          </div>

          {/* Emojis Aligned under the PFP */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {[
              { text: 'HIKER', emoji: '🏔️' },
              { text: 'JOURNALIST', emoji: '✍️' },
              { text: 'DESIGNER', emoji: '🎨' },
              { text: 'TECHIE', emoji: '☁️' }
            ].map((tag) => (
              /* DITO: dark:bg-blue-900/20 para hindi masyadong maliwanag yung tag badges */
              <span key={tag.text} className="px-4 py-2 bg-blue-50/50 dark:bg-blue-900/20 rounded-full text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 flex items-center gap-2">
                {tag.emoji} {tag.text}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative Section (Right Side) */}
        <div className="lg:col-span-8">
          {/* DITO: dark:text-slate-300 para maging light gray yung mahabang text, mas madaling basahin sa black background */}
          <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-left">
            <p>
              I am a passionate BSIT student with a unique background that blends technical precision with creative storytelling. 
              Currently majoring in Network and Security at the University of the Cordilleras, I focus on understanding 
              how digital infrastructures work and how to keep them secure.
            </p>
            
            <p>
              Beyond the classroom, I’ve gained real-world experience in digital operations—handling roles like 
              dispatching, track & trace, and social media engagement. This early exposure to freelance work taught 
              me how to thrive in fast-paced environments and solve problems efficiently.
            </p>

            <p>
              When I'm not configuring networks or coding, you'll find me writing for The Alternative, 
              our university's official student publication. I love merging the logic of IT with my lifelong 
              passion for journalism and creative design.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;