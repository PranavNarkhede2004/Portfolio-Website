import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 border-b' : 'bg-transparent py-5 border-transparent'} px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-primary-500 rounded-lg text-primary-500 font-bold font-mono shadow-[0_0_10px_rgba(0,212,255,0.4)]">
            PN
          </div>
          <a href="#" className="font-bold font-mono hidden sm:block tracking-widest textMain hover:text-primary-500 transition">
            Pranav Narkhede
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
           {navLinks.map((link) => (
             <a key={link.name} href={link.href} className="textMuted hover:text-primary-500 font-medium transition-colors duration-200">
               {link.name}
             </a>
           ))}
           <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
             {isDarkMode ? <FiSun className="text-yellow-400" size={20} /> : <FiMoon className="text-slate-700" size={20} />}
           </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
             {isDarkMode ? <FiSun className="text-yellow-400" size={20} /> : <FiMoon className="text-slate-700" size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="textMain focus:outline-none">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden glass mt-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map((link) => (
               <a 
                 key={link.name} 
                 href={link.href} 
                 className="block px-3 py-2 rounded-md text-base font-medium textMain hover:text-primary-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {link.name}
               </a>
             ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
