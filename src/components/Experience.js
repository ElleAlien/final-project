import React from 'react';
import { Activity, PenTool, Terminal, Code2, Globe, ExternalLink, ArrowRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Digital Operations Specialist",
      company: "Freelance Collaboration",
      period: "2020 – Present",
      icon: <Terminal className="w-6 h-6 text-blue-500" />,
      tag: "Operations",
      description: "Managing end-to-end digital logistics and client engagement. Expertly handling remote collaboration tools to maintain high-efficiency workflows.",
      skills: ["Logistics", "Dispatching", "CRM Tools", "Digital Communication"]
    },
    {
      title: "Creative Writer & Journalist",
      company: "The Alternative",
      period: "2024 – Current",
      icon: <PenTool className="w-6 h-6 text-indigo-500" />,
      tag: "Journalism",
      description: "Translating complex academic and technical concepts into engaging narratives for the university's official student publication.",
      skills: ["Editorial Writing", "Creative Design", "Storytelling", "Journalism"]
    },
    {
      title: "Tic-Tac-Toe Game",
      company: "GitHub Project",
      period: "2024", 
      icon: <Code2 className="w-6 h-6 text-emerald-500" />,
      tag: "Web Development",
      description: "Developed a classic Tic-Tac-Toe game focusing on state management and game logic. Implemented a clean UI to ensure a smooth user experience.",
      skills: ["JavaScript", "HTML/CSS", "Logic Building", "GitHub"],
      link: "https://github.com/ElleAlien/Tic-Tac-Toe-Game"
    },
    {
      title: "Axion Project",
      company: "GitHub Project",
      period: "2024", 
      icon: <Globe className="w-6 h-6 text-amber-500" />,
      tag: "Web Application",
      description: "A specialized web project exploring front-end architecture. Focused on modular components and responsive design principles.",
      skills: ["Frontend", "Web Design", "Git Workflow", "Architecture"],
      link: "https://github.com/ElleAlien/axion-project"
    },
    {
      title: "UI/UX Researcher",
      company: "Materna-Kiosk",
      period: "In-Progress", 
      icon: <Activity className="w-6 h-6 text-rose-500" />,
      tag: "Health-Tech",
      description: "Conceptualizing a kiosk solution for maternal health. Leading the research and abstract development for expectant mothers.",
      skills: ["UX Research", "Abstract Development", "Health-Tech"]
    }
  ];

  return (
    <section id="experience" className="py-24 border-t border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-500">
      
      {/* Header Section */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="text-left">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 transition-colors">
            Experience
          </h2>
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
            <p className="text-slate-500 dark:text-slate-400 font-medium tracking-widest uppercase text-xs">
              Professional Milestones & Projects
            </p>
          </div>
        </div>
        <p className="text-slate-400 dark:text-slate-500 text-sm italic max-w-xs text-left md:text-right transition-colors">
          "Bridging the gap between technical operations and creative storytelling."
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="group relative bg-white dark:bg-slate-900/50 backdrop-blur-sm p-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-blue-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
          >
            {/* Card Header: Icon and Tag */}
            <div className="flex justify-between items-start mb-8">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors duration-500">
                {exp.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 dark:border-slate-700 px-3 py-1 rounded-full bg-white dark:bg-slate-800 transition-colors">
                {exp.tag}
              </span>
            </div>

            {/* Main Content */}
            <div className="space-y-4 text-left">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium mt-1 transition-colors">
                  <span>{exp.company}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                  <span className="text-sm italic">{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base pt-2 transition-colors">
                {exp.description}
              </p>

              {/* GitHub Link Button */}
              {exp.link && (
                <div className="pt-2">
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
                  >
                    View Project <ArrowRight size={14} />
                  </a>
                </div>
              )}

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 pt-4">
                {exp.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-100 dark:border-slate-700 group-hover:border-blue-100 dark:group-hover:border-blue-900 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Subtle Background Glow on Hover */}
            <div className="absolute top-0 right-0 -z-10 h-32 w-32 bg-blue-50/30 dark:bg-blue-900/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;