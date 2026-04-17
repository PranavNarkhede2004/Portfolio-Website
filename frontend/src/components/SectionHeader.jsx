import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, number }) => {
  return (
    <div className="mb-16">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-mono textMain mb-4 flex items-center gap-4"
      >
        <span className="text-primary-500">{number}.</span> {title}
        <div className="flex-1 h-[1px] bg-border-color ml-4"></div>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="textMuted text-lg ml-12"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
