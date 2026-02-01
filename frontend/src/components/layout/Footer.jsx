import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer 
      ref={ref}
      className="bg-slate-50 border-t border-slate-100"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Section */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-slate-900">
              {personalInfo.name}
            </h3>
            <p className="text-slate-500 text-sm max-w-xs">
              {personalInfo.tagline}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 group"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <motion.span
                  initial={{ opacity: 0, x: -5, y: 5 }}
                  whileHover={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={14} />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-slate-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <motion.p 
            className="text-sm text-slate-400 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            Crafted with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-400" />
            </motion.span> 
            and intention
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
