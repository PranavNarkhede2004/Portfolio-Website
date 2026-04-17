import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 relative overflow-hidden">
        <CustomCursor />
        <Navbar />
        <main className="max-w-[1280px] mx-auto">
          <Hero />
          <div className="w-full section-divider"></div>
          <About />
          <div className="w-full section-divider"></div>
          <Skills />
          <div className="w-full section-divider"></div>
          <Projects />
          <div className="w-full section-divider"></div>
          <Experience />
          <div className="w-full section-divider"></div>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
