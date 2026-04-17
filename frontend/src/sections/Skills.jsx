import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const skillsData = [
  {
    category: "Languages & Core",
    icon: "💻",
    skills: ["C, C++", "Python", "JavaScript (ES6+)"]
  },
  {
    category: "Frontend Dev",
    icon: "🎨",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "HTML5, CSS3"]
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: ["Node.js, Express.js", "REST APIs", "JWT Authentication", "Socket.io"]
  },
  {
    category: "Databases & Tools",
    icon: "🗄️",
    skills: ["MongoDB, MySQL, Redis", "Git/GitHub", "Postman", "Bull (Job Queues)"]
  },
  {
    category: "Data Science & Cloud",
    icon: "☁️",
    skills: ["NumPy, Pandas", "Matplotlib, Seaborn", "scikit-learn", "Vercel, Render"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader title="Technical Skills" number="02" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass glass-hover p-8"
          >
            <div className="flex items-center gap-4 mb-6 text-amber-500">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-mono">{category.category}</h3>
            </div>
            
            <div className="flex flex-col gap-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 textMuted hover:textMain transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                  <span className="text-sm md:text-base">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
