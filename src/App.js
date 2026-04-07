import React from 'react';
// 1. Dito mo i-import lahat ng components na ginawa natin
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    /* 2. Itong main div ang mag-kokontrol ng Dark Mode background */
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
      
      {/* 3. Ang Navbar ay laging nasa labas ng main container para laging visible */}
      <Navbar /> 

      {/* 4. Dito sa loob lahat ng sections mo. 
          Nilagyan ko ng 'max-w-7xl mx-auto' para hindi dikit sa gilid sa malalaking monitor */}
      <main className="max-w-7xl mx-auto">
        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* 5. Footer (Optional pero para maganda tignan) */}
      <footer className="py-10 text-center border-t border-slate-100 dark:border-slate-800">
        <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">
          © 2026 ELLE ALARMA • All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;