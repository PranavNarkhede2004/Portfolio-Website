import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const words = ["Full Stack Developer", "MERN Stack Engineer", "Problem Solver", "Open to SDE Intern Roles"];
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setCurrentWord((prev) => 
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && currentWord === fullText) {
        setIsDeleting(true);
        setTypingSpeed(2000); // Wait before deleting
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Wait before typing new word
      }
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-20 px-4 sm:px-6 lg:px-8">
      {/* Background radial gradient blob */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full mix-blend-screen opacity-20 blur-[100px] animate-pulse z-0 bg-primary-500"></div>
      
      <div className="max-w-3xl relative z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-500 font-mono mb-4 text-lg"
        >
          {'> Initializing system...'}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-mono font-bold textMain mb-2 relative inline-block group"
        >
          Pranav Narkhede.
          <span className="absolute bottom-[-5px] left-0 h-[4px] bg-primary-500 w-0 group-hover:w-full transition-all duration-700"></span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-4xl textMuted mb-6 min-h-[3rem] font-mono"
        >
          {'>'} <span className="textMain text-3xl font-mono">{currentWord}</span>
          <span className="text-primary-500 font-mono animate-pulse">_</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl textMuted mb-10 max-w-2xl"
        >
          B.Tech CSE @ IIIT Nagpur | Building scalable, data-driven systems.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-md bg-primary-500 text-[#0a0f1e] font-mono font-bold hover:-translate-y-1 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            View My Work
          </a>
          <a
            href="/PranavNarkhede_Resume.pdf"
            download
            className="px-8 py-3 rounded-md bg-transparent border border-primary-500 text-primary-500 font-mono font-bold hover:bg-primary-500/10 hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex gap-6"
        >
          <a href="https://github.com/PranavNarkhede2004" target="_blank" rel="noreferrer" className="textMuted hover:text-primary-500 hover:-translate-y-1 transition-all">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pranav-narkhede2004" target="_blank" rel="noreferrer" className="textMuted hover:text-primary-500 hover:-translate-y-1 transition-all">
            <FaLinkedin size={24} />
          </a>
          <a href="https://leetcode.com/u/pnarkhede2023/" target="_blank" rel="noreferrer" className="textMuted hover:text-primary-500 hover:-translate-y-1 transition-all">
            <span className="font-mono font-bold text-lg">LC.</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
