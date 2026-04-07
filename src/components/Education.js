import React from 'react';
import ucBg from './assets/uc.png';
import lacoBg from './assets/laco.jpg';

const Education = () => {
  const educData = [
    {
      school: "University of the Cordilleras",
      degree: "Bachelor of Science in Information Technology",
      major: "Major in Network and Security",
      years: "2024 – Present",
      status: "Current Enrollment",
      details: "Actively involved in creative and journalistic writing as part of The Alternative, the official student publication.",
      bgImage: ucBg
    },
    {
      school: "La Consolacion College of Daet",
      degree: "Senior High School – STEM Strand",
      years: "Graduated 2024",
      status: "Completed",
      details: "Graduated with Highest Honors. joined several clubs and received various Academic Excellence Awards.",
      bgImage: lacoBg
    }
  ];

  return (
    /* DITO: Nilagyan ng dark:bg-slate-950 at dark:border-slate-800 */
    <section id="education" className="py-24 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Section Header */}
      <div className="mb-12">
        {/* DITO: Nilagyan ng dark:text-white */}
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter text-left transition-colors">
          Education
        </h2>
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-12 bg-blue-500"></div>
          <p className="text-blue-500 font-semibold text-lg italic tracking-wide">
            Academic background and institutional milestones
          </p>
        </div>
      </div>

      {/* Education Cards */}
      <div className="space-y-8">
        {educData.map((item, index) => (
          <div 
            key={index} 
            /* DITO: dark:bg-slate-900 at dark:border-slate-800 */
            className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 dark:border-slate-800 transition-all hover:border-blue-300 dark:hover:border-blue-500"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img 
                src={item.bgImage} 
                alt={item.school} 
                /* DITO: Binabaan natin opacity sa dark mode (opacity-10) para di masakit sa mata */
                className="w-full h-full object-cover object-center opacity-30 dark:opacity-10 group-hover:opacity-45 dark:group-hover:opacity-20 transition-opacity duration-500"
              />
              {/* DITO: Gradient Overlay - pinalitan natin ng dark colors pag dark mode */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-slate-900/95 dark:via-slate-900/80 dark:to-transparent"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 p-10 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="space-y-1 text-left">
                {/* DITO: dark:bg-blue-900/30 at dark:text-blue-300 */}
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300 bg-blue-50/80 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-3 border border-blue-100 dark:border-blue-800">
                  {item.status}
                </span>
                {/* DITO: dark:text-white */}
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  {item.school}
                </h3>
                {/* DITO: dark:text-slate-300 */}
                <p className="text-xl text-slate-700 dark:text-slate-300 font-medium">{item.degree}</p>
                {item.major && (
                  <p className="text-blue-600 dark:text-blue-400 text-lg font-medium italic">{item.major}</p>
                )}
                
                {/* DITO: dark:text-slate-400 at dark:border-slate-800 */}
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl text-lg">
                  {item.details}
                </div>
              </div>
              
              <div className="text-left md:text-right shrink-0">
                {/* DITO: dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700 */}
                <p className="text-slate-500 dark:text-slate-300 font-black text-sm uppercase tracking-widest bg-white/90 dark:bg-slate-800 px-5 py-2.5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  {item.years}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;