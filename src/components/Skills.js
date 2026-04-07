import React from 'react';
import { Code2, Palette, Terminal, Cpu, NotebookPen, Globe } from 'lucide-react';

const Skills = () => {
  const allSkills = [
    { 
      name: "Academic & Literary", 
      level: "96%", 
      color: "bg-amber-400", 
      icon: <NotebookPen className="w-5 h-5 text-amber-400" />,
      subSkills: ["Journalism", "Abstract Dev", "Technical Docs", "Copywriting"]
    },
    { 
      name: "Design & Creative", 
      level: "95%", 
      color: "bg-rose-400", 
      icon: <Palette className="w-5 h-5 text-rose-400" />,
      subSkills: ["UI/UX Design", "Figma", "Canva", "Editorial Design"]
    },
    { 
      name: "Specialization", 
      level: "78%", 
      color: "bg-cyan-400", 
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      subSkills: ["Network Security", "Information Technology", "Research"]
    },
    { 
      name: "Technical Stack", 
      level: "76%", 
      color: "bg-blue-500", 
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      subSkills: ["React.js", "Tailwind CSS", "JavaScript", "GitHub"]
    },
    { 
      name: "Professional Tools", 
      level: "67%", 
      color: "bg-indigo-400", 
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
      subSkills: ["Dialpad", "RingCentral", "Skype", "CRM Systems"]
    },
    { 
      name: "Digital Operations", 
      level: "59%", 
      color: "bg-emerald-400", 
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      subSkills: ["Dispatching", "Track & Trace", "Cold Calling"]
    },
  ];

  return (
    /* DITO: Nilagyan ng dark:bg-slate-950 at dark:border-slate-800 */
    <section id="skills" className="py-24 border-t border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      
      {/* Header with Sidebar Quote */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="text-left">
          {/* DITO: dark:text-white */}
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
            Skills
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
            <p className="text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase text-[10px]">
              Expertise & Toolbox
            </p>
          </div>
        </div>

        {/* DITO: dark:border-slate-800 */}
        <div className="text-left md:text-right max-w-sm shrink-0 border-l md:border-l-0 md:border-r border-blue-100 dark:border-slate-800 pl-6 md:pl-0 md:pr-6 py-2">
          <p className="text-slate-400 dark:text-slate-500 text-sm italic leading-relaxed">
            "Combining technical logic with creative intuition to build meaningful digital experiences."
          </p>
        </div>
      </div>

      {/* Grid for Individual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allSkills.map((category) => (
          <div 
            key={category.name} 
            /* DITO: Naka-slate-900 na siya so okay na, pero nilagyan natin ng dark:hover:border-blue-500 para mas cool */
            className="group relative bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-blue-900/10 border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 dark:hover:border-blue-500/50 overflow-hidden"
          >
            {/* Subtle glow for each card */}
            <div className={`absolute -top-10 -right-10 h-32 w-32 ${category.color} opacity-[0.03] blur-3xl rounded-full group-hover:opacity-[0.08] transition-opacity`}></div>

            <div className="relative z-10 space-y-6">
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-all duration-300">
                  {category.icon}
                </div>
                <span className="text-[10px] font-mono font-black text-blue-400 tracking-tighter">
                  {category.level}
                </span>
              </div>

              {/* Title & Progress */}
              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-white transition-colors">
                  {category.name}
                </h3>
                {/* Thin Sleek Progress Bar */}
                <div className="h-[4px] w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${category.color} rounded-full transition-all duration-[1500ms] ease-out`} 
                    style={{ width: category.level }}
                  ></div>
                </div>
              </div>

              {/* Sub-skills Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.subSkills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-[9px] font-bold text-slate-500 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 group-hover:text-slate-300 group-hover:border-white/10 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;