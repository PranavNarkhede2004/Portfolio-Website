import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 pt-16 pb-8 border-t border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-primary-500 rounded-lg text-primary-500 font-bold font-mono shadow-[0_0_10px_rgba(0,212,255,0.4)]">
              PN
            </div>
            <div className="text-left">
              <strong className="font-mono textMain tracking-widest text-lg">Pranav Narkhede</strong>
              <div className="textMuted text-sm">Building digital experiences that matter.</div>
            </div>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/PranavNarkhede2004" target="_blank" rel="noreferrer" className="textMuted hover:text-primary-500 transition-all hover:-translate-y-1">
              <span className="sr-only">GitHub</span>
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pranav-narkhede2004" target="_blank" rel="noreferrer" className="textMuted hover:text-primary-500 transition-all hover:-translate-y-1">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/pnarkhede2023/" target="_blank" rel="noreferrer" className="textMuted hover:text-primary-500 transition-all hover:-translate-y-1">
              <span className="sr-only">LeetCode</span>
              <span className="font-bold font-mono text-lg">LC</span>
            </a>
          </div>
        </div>
        
        <div className="text-center textMuted font-mono text-sm pt-8 border-t border-border-color/50">
          <p>&copy; {currentYear} Pranav Narkhede &mdash; Crafted with ❤️ and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
