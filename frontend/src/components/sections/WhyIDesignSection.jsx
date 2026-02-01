import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { whyIDesign } from '../../data/mock';
import { FadeUp, FadeIn } from '../animations/MotionWrapper';

const WhyIDesignSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <FadeUp>
          <div className="mb-16">
            <span className="text-sm text-slate-500 tracking-wide uppercase">Philosophy</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
              Why I Design
            </h2>
          </div>
        </FadeUp>

        {/* Quote Block */}
        <div className="max-w-4xl">
          <div className="relative">
            <FadeIn delay={0.2}>
              <Quote size={48} className="text-slate-200 absolute -top-6 -left-4" />
            </FadeIn>
            <blockquote className="relative z-10">
              <motion.p 
                className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-800 leading-relaxed tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {whyIDesign.quote}
              </motion.p>
              <motion.footer 
                className="mt-6 text-slate-500 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {whyIDesign.author}
              </motion.footer>
            </blockquote>
          </div>

          <motion.div 
            className="h-px bg-slate-200 w-24 my-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p 
            className="text-lg text-slate-600 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {whyIDesign.personal}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyIDesignSection;
