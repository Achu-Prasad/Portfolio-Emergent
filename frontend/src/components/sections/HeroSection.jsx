import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ArrowRight, FileText } from '@phosphor-icons/react';
import { Button } from '../ui/button';
import { personalInfo, projects } from '../../data/mock';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../Assets/nature bg.jpg';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load Unicorn Studio script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      !function(){
        var u=window.UnicornStudio;
        if(u&&u.init){
          if(document.readyState==="loading"){
            document.addEventListener("DOMContentLoaded",function(){u.init()})
          }else{
            u.init()
          }
        }else{
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js";
          i.onload=function(){
            if(document.readyState==="loading"){
              document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})
            }else{
              UnicornStudio.init()
            }
          };
          (document.head||document.body).appendChild(i)
        }
      }();
    `;
    document.body.appendChild(script);

    return () => {
      // Small cleanup - though the external script might have added things to window
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Unicorn Studio Background */}
      <div
        className="absolute inset-0 z-0 opacity-100"
        data-us-project="9hmDeXdrrNmE7gG6uBee"
      ></div>

      <style>{`
        #unicorn-studio-canvas { opacity: 1 !important; transform: scale(1.01); }
        [class*="unicorn-studio-badge"], .unicorn-studio-badge { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }
      `}</style>






      {/* Glassmorphism Container */}
      <div className="max-w-6xl w-full mx-auto px-6 lg:px-12 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            {/* Subtle Tag */}
            <motion.div
              className="inline-flex items-center gap-2 text-slate-500 text-sm mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles size={14} />
              <span>Available for new opportunities</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 mt-2 tracking-tight leading-[1.1] mb-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-lg sm:text-lg text-slate-600 font-light mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {personalInfo.role}
            </motion.p>

            {/* Personal Statement */}
            <motion.p
              className="text-lg text-slate-600 leading-relaxed max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              {personalInfo.statement}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={scrollToProjects}
                  className="w-full flex items-center justify-center gap-2 px-6 py-6 text-sm rounded-xl transition-all duration-300 hover:shadow-lg bg-slate-800 hover:bg-slate-700 text-white font-medium"
                >
                  View My Work
                  <ArrowDown size={16} weight="bold" />
                </Button>
              </motion.div>
              <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full block">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 border-slate-300 bg-white text-slate-700 hover:bg-slate-50 px-6 py-6 text-sm rounded-xl transition-all duration-300"
                  >
                    Download CV
                    <FileText size={16} weight="bold" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Project Preview with Image (Hidden) */}
          {/* 
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-lg cursor-pointer group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={currentProject.thumbnail}
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="group"
                  >
                    <div className={`w-8 h-1.5 rounded-sm transition-all duration-300 ${index === currentIndex ? 'bg-slate-900' : 'bg-slate-300 hover:bg-slate-500'}`} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
          */}
        </motion.div>
      </div>


    </section>
  );
};

export default HeroSection;
