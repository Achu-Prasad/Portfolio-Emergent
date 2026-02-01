import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { personalInfo, socialLinks } from '../../data/mock';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <span className="text-sm text-slate-500 tracking-wide uppercase">Contact</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mt-2 tracking-tight">
              Let's work together
            </h2>
            <p className="text-lg text-slate-600 mt-6 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <Mail size={18} />
                </div>
                <span>{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Find me online</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors px-4 py-2 bg-white rounded-full border border-slate-200 hover:border-slate-300 hover:shadow-sm group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - CTA Card */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-light text-slate-900 mb-4">
              Ready to start a project?
            </h3>
            <p className="text-slate-600 mb-8">
              I'm currently accepting new projects. Let's discuss how I can help
              bring your vision to life.
            </p>

            <Button
              asChild
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-base rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <a href={`mailto:${personalInfo.email}`}>
                Send me an email
              </a>
            </Button>

            <p className="text-center text-sm text-slate-400 mt-6">
              I typically respond within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
