import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [cgpaWidth, setCgpaWidth] = useState('0%');

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setCgpaWidth('90.3%');
      }, 500); // slight delay after section comes into view
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <SectionHeader title="About Me" number="01" />

      <div className="grid md:grid-cols-5 gap-12 items-center">
        
        {/* Left Side: Bio */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 textMuted text-lg leading-relaxed space-y-6"
        >
          <p>
            Hello! I'm <span className="text-primary-500 font-bold">Pranav Narkhede</span>, a passionate full-stack developer pursuing B.Tech in CSE at IIIT Nagpur (Aug 2023 – May 2027). I engineer robust, scalable platforms from start to finish, deeply focused on optimized, data-driven systems.
          </p>
          <p>
            Coursework: <span className="text-amber-500 font-medium">Data Structures, Algorithms, Operating Systems, OOP, Computer Networks, DBMS</span>
          </p>
          <p>
            I have built real-time platforms streaming thousands of concurrent updates, atomic booking systems preventing race conditions, and AI-driven applications utilizing LLMs.
          </p>
        </motion.div>

        {/* Right Side: Academics Card */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="md:col-span-2"
        >
          <div className="glass glass-hover p-8 relative overflow-hidden">
            <div className="text-primary-500 mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            
            <h3 className="text-amber-500 text-2xl font-mono mb-6">Academics</h3>
            <p className="font-bold textMain text-lg">B.Tech in Computer Science & Engineering</p>
            <p className="textMuted text-sm mt-2">Indian Institute of Information Technology (IIIT), Nagpur</p>
            
            <div className="mt-8">
              <div className="flex justify-between mb-2 font-bold textMain">
                <span>CGPA</span>
                <span className="text-amber-500 font-mono">9.03 / 10.0</span>
              </div>
              <div className="w-full h-2 bg-border-color rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary-500 to-amber-500 rounded-full transition-all duration-1500 ease-out"
                  style={{ width: cgpaWidth }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
