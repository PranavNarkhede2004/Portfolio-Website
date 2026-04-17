import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const projectsData = [
  {
    title: "CryptoArena",
    description: "Real-time crypto trading platform streaming 1000+ updates/min for 8+ coins with Binance WebSocket + REST fallback. Architected a paper trading engine with P&L tracking, 0.1% fees, global leaderboard caching, and API rate limiting.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Binance API"],
    github: "https://github.com/PranavNarkhede2004/CryptoArena",
    live: "https://crypto-arena-black.vercel.app/",
    featured: false
  },
  {
    title: "Movie Ticket Booking System",
    description: "Implemented atomic seat locking via Redis Lua scripts, handling 100+ concurrent bookings. Designed fault-tolerant pipeline (freeze → transaction → payment) with fallback. Reduced conflicts by 90%+ via Socket.io updates and managed expiry using Bull queues.",
    tech: ["React.js", "Node.js", "MongoDB", "Redis", "Bull", "Socket.io"],
    github: "https://github.com/PranavNarkhede2004/Movie_Ticket_Booking-",
    live: "",
    featured: false
  },
  {
    title: "TimeTableSync",
    description: "Automated timetable generation integrating Google Calendar API (OAuth2) for 30+ recurring events. Processed data with Pandas across 10+ branch combinations. Reduced scheduling manual effort by 80%+ with a sleek dashboard visualization.",
    tech: ["React.js", "Node.js", "MongoDB", "Python", "Pandas"],
    github: "https://github.com/PranavNarkhede2004/TimeTableSync",
    live: "",
    featured: false
  },
  {
    title: "AI Quiz Application",
    description: "Built an AI-driven quiz generator for 500+ quizzes using Gemini API. Added schema validation/retry logic, reducing malformed responses by 40%. Scaled API to support 1000+ attempts with analytics tracking.",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini API"],
    github: "https://github.com/PranavNarkhede2004/AI-Quiz-App",
    live: "",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader title="Featured Projects" number="03" />
      
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col glass glass-hover p-8 relative"
          >
            <div className="text-primary-500 font-mono text-sm mb-3">Featured Project</div>
            <h3 className="text-2xl font-bold textMain mb-5 flex-shrink-0">
              {project.title}
            </h3>
            
            <div className="bg-black/20 p-5 rounded-lg mb-6 flex-grow textMuted text-[0.95rem] leading-relaxed">
              {project.description}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="font-mono text-xs px-3 py-1 border border-border-color rounded-full text-primary-500">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 items-center mt-auto">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="textMuted hover:text-amber-500 transition-colors tooltip" aria-label="GitHub Repository">
                  <FiGithub size={22} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="textMuted hover:text-amber-500 transition-colors tooltip" aria-label="Live Demo">
                  <FiExternalLink size={22} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
