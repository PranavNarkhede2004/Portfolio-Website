import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    
    try {
      // Assuming your backend is running on the same domain or configured properly for CORS
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      await axios.post(`${API_URL}/contact`, formData);
      
      setSubmitStatus({
        type: 'success',
        message: "Thank you for your message! I'll get back to you soon."
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeader title="Get In Touch" number="05" />

      <div className="grid md:grid-cols-5 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-8"
        >
          <div className="textMuted text-lg">
            I'm currently looking for SDE Intern opportunities. Whether you have a question, project idea, or just want to say hi, I'll try my best to get back to you!
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-primary-500 mt-1">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <a href="mailto:pnarkhede2023@gmail.com" className="textMain font-mono font-medium hover:text-primary-500 transition-colors">
                  pnarkhede2023@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary-500 mt-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <span className="textMain font-mono font-medium">Nagpur, India</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 glass p-8 relative z-[5]"
        >
          {submitStatus.type === 'success' ? (
            <div className="bg-primary-500/10 border border-primary-500 text-primary-500 p-6 rounded-lg text-center font-mono">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
              <p>{submitStatus.message}</p>
              <button 
                onClick={() => setSubmitStatus({ type: '', message: '' })}
                className="mt-6 px-6 py-2 border border-primary-500 rounded text-primary-500 hover:bg-primary-500 hover:text-[#0a0f1e] transition"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {submitStatus.type === 'error' && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded text-sm mb-4">
                  {submitStatus.message}
                </div>
              )}
              
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="relative z-10 w-full px-5 py-4 bg-transparent border border-border-color rounded-lg textMain focus:outline-none focus:border-primary-500 font-mono text-sm transition-all shadow-[0_0_0_rgba(0,212,255,0)] focus:shadow-[0_0_10px_rgba(0,212,255,0.2)]"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="relative z-10 w-full px-5 py-4 bg-transparent border border-border-color rounded-lg textMain focus:outline-none focus:border-primary-500 font-mono text-sm transition-all shadow-[0_0_0_rgba(0,212,255,0)] focus:shadow-[0_0_10px_rgba(0,212,255,0.2)]"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your Message"
                  className="relative z-10 w-full px-5 py-4 bg-transparent border border-border-color rounded-lg textMain focus:outline-none focus:border-primary-500 font-mono text-sm resize-y transition-all shadow-[0_0_0_rgba(0,212,255,0)] focus:shadow-[0_0_10px_rgba(0,212,255,0.2)]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative z-10 w-full py-4 rounded-lg bg-primary-500 text-[#0a0f1e] font-mono font-bold flex justify-center items-center gap-2 hover:bg-primary-600 transition-colors shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
