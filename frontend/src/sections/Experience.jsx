import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const achievementsData = [
  {
    title: "LeetCode",
    target: 290,
    desc: "Problems solved (Arrays, Trees, Graphs, DP)",
    colorClass: "text-[#f97316]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
  },
  {
    title: "CodeChef",
    target: 1462,
    desc: "Max Rating, 2-Star Coder",
    colorClass: "text-[#3b82f6]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    )
  },
  {
    title: "Codeforces",
    target: 1174,
    desc: "Max rating, focus on math & greedy ops.",
    colorClass: "text-[#ef4444]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    )
  },
  {
    title: "GeeksforGeeks",
    target: 210,
    desc: "DSA problems solved, solidifying fundamentals",
    colorClass: "text-[#22c55e]",
    icon: (
       <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
    )
  }
];

const Counter = ({ target, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let current = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / target));
    const increment = Math.ceil(target / 50);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return <>{count}+</>;
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader title="Achievements" number="04" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievementsData.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass glass-hover p-8 text-center flex flex-col items-center justify-center`}
          >
            <div className={`mb-4 ${ach.colorClass}`}>
              {ach.icon}
            </div>
            
            <div className={`text-4xl md:text-5xl font-bold font-mono mb-2 ${ach.colorClass}`}>
              <Counter target={ach.target} isInView={isInView} />
            </div>
            
            <h3 className="text-xl font-bold textMain mb-2">{ach.title}</h3>
            <p className="text-sm textMuted">{ach.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
