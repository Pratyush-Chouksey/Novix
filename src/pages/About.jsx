import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiCompass, 
  FiZap, 
  FiCpu, 
  FiUsers, 
  FiTarget, 
  FiEye, 
  FiArrowRight, 
  FiLinkedin 
} from 'react-icons/fi';
import Button from '../components/ui/Button';

const About = () => {
  const values = [
    {
      icon: <FiCompass size={22} className="text-accent" />,
      title: "Clarity over complexity",
      description: "We write clean, readable code and design straightforward interfaces. Elegant simplicity over convoluted architectures."
    },
    {
      icon: <FiZap size={22} className="text-accent" />,
      title: "Speed with quality",
      description: "Rapid prototypes shipped fast, with strict unit testing and linting standards maintained throughout every sprint."
    },
    {
      icon: <FiCpu size={22} className="text-accent" />,
      title: "AI-first thinking",
      description: "Every workflow is analyzed for automation potential — cognitive models and intelligent pipelines built natively."
    },
    {
      icon: <FiUsers size={22} className="text-accent" />,
      title: "Long-term partnerships",
      description: "We align with your roadmap, ensuring codebases and database structures scale seamlessly as your business grows."
    }
  ];

  const founders = [
    {
      initials: "PC",
      name: "Pratyush Chouksey",
      role: "Founder & Tech Lead",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#080810] text-white overflow-hidden">

      {/* 1. HERO STRIP */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 text-center overflow-hidden border-b border-neutral-900/60">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, #2A2A35 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col gap-4 relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent">Our Identity</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Built by builders,{' '}
            <span className="bg-gradient-to-r from-[#7C6BFF] to-[#00E5C4] bg-clip-text text-fill-transparent text-gradient-accent">
              for builders
            </span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Novix is a technology solutions agency from India, helping startups and businesses ship smarter with AI and modern web tech.
          </p>
        </div>
      </section>

      {/* 2. STORY SECTION — all dark, 2 columns */}
      <section className="py-24 px-6 md:px-12 w-full border-b border-neutral-900/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="border-l-2 border-accent pl-5">
              <span className="text-xs uppercase tracking-widest font-extrabold text-accent">Our Origin</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-1">
                Bridging AI and Real-World Scale
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              <p>
                Novix was established with a singular focus: to bridge the vast gap between powerful cognitive models and practical enterprise engineering. We noticed that while research laboratories were shipping advanced neural networks, businesses struggled to deploy them reliably.
              </p>
              <p>
                Our founders wanted to create an agency that combines rigorous software engineering with the latest in agentic artificial intelligence. We avoid bloated frameworks and build modular architectures that are fast, clear, and secure.
              </p>
              <p>
                Today, we work with ambitious teams across India and globally. Whether you are bootstrapping your first prototype or migrating legacy databases into cloud pipelines, we bring the tools, patterns, and velocity required to ship successfully.
              </p>
            </div>
          </motion.div>

          {/* Right Visual — circuit SVG, dark themed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md aspect-square bg-[#0F0F1A] border border-neutral-900/60 rounded-2xl p-8 flex items-center justify-center">
              <svg className="w-full h-full max-h-[300px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="50" y1="50" x2="100" y2="100" stroke="#7C6BFF" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="150" y1="50" x2="100" y2="100" stroke="#7C6BFF" strokeWidth="1.5" />
                <line x1="100" y1="100" x2="100" y2="160" stroke="#00E5C4" strokeWidth="1.5" strokeDasharray="2 3" />
                <line x1="50" y1="50" x2="150" y2="50" stroke="#7C6BFF" strokeWidth="1" opacity="0.4" />
                <line x1="30" y1="130" x2="100" y2="100" stroke="#00E5C4" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <line x1="170" y1="130" x2="100" y2="100" stroke="#7C6BFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                
                <circle cx="50" cy="50" r="10" fill="#0F0F1A" stroke="#7C6BFF" strokeWidth="1.5" />
                <circle cx="150" cy="50" r="10" fill="#0F0F1A" stroke="#7C6BFF" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="16" fill="#7C6BFF" opacity="0.9" />
                <circle cx="100" cy="160" r="8" fill="#0F0F1A" stroke="#00E5C4" strokeWidth="1.5" />
                <circle cx="30" cy="130" r="6" fill="#0F0F1A" stroke="#00E5C4" strokeWidth="1.5" opacity="0.7" />
                <circle cx="170" cy="130" r="6" fill="#0F0F1A" stroke="#7C6BFF" strokeWidth="1.5" opacity="0.7" />
                
                <circle cx="100" cy="100" r="6" fill="white" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION & VISION — bento style matching home */}
      <section className="py-24 px-6 md:px-12 w-full border-b border-neutral-900/40 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="border-l-2 border-accent pl-5 mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent">Purpose</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-1">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#7C6BFF]/10 border border-[#7C6BFF]/20 rounded-xl p-8 flex flex-col gap-5 min-h-[200px]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#7C6BFF]/20 flex items-center justify-center text-accent">
                <FiTarget size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                To deliver intelligent, scalable digital products that create real business value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#00E5C4]/5 border border-[#00E5C4]/15 rounded-xl p-8 flex flex-col gap-5 min-h-[200px]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00E5C4]/10 flex items-center justify-center text-[#00E5C4]">
                <FiEye size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                To be the go-to technology partner for ambitious businesses across India and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VALUES — 4 dark surface cards */}
      <section className="py-24 px-6 md:px-12 w-full border-b border-neutral-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="border-l-2 border-accent pl-5 mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent">Ethics</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-1">
              What we stand for
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0F0F1A] border border-neutral-900/60 rounded-xl p-6 flex flex-col gap-4 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-white">{val.title}</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM PLACEHOLDER */}
      <section className="py-24 px-6 md:px-12 w-full border-b border-neutral-900/40">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              The people behind Novix
            </h2>
          </div>

          <div className="flex justify-center w-full max-w-sm">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#0F0F1A] border border-neutral-900/60 rounded-xl p-8 flex flex-col items-center gap-4 group hover:border-accent/30 transition-colors duration-300 w-full"
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-2xl font-black group-hover:bg-accent/15 transition-colors duration-300">
                  {founder.initials}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{founder.name}</h3>
                  <p className="text-neutral-500 text-xs font-medium mt-1">{founder.role}</p>
                </div>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-accent transition-colors duration-200 p-2 bg-neutral-900 rounded-lg border border-neutral-800"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin size={16} />
                </a>
              </motion.div>
            ))}
          </div>

          <p className="text-neutral-600 text-sm font-medium italic">
            We're growing — check back soon for the full team.
          </p>
        </div>
      </section>

      {/* 6. BOTTOM CTA — matches Home page CTA strip */}
      <section className="py-16 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden bg-[#0A0A16] border border-neutral-900 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C6BFF]/8 via-transparent to-[#00E5C4]/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(124,107,255,0.12) 0%, transparent 70%)' }}
          />
          <div className="flex flex-col gap-3 relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Want to work with us? Let's talk.
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Reach out and tell us about your project — we'll respond within 24 hours.
            </p>
          </div>
          <Link to="/contact" className="relative z-10 w-full md:w-auto">
            <Button variant="accent" className="w-full md:w-auto !px-8 !py-3 font-bold shadow-lg shadow-accent/20 flex items-center gap-2">
              Contact Us <FiArrowRight />
            </Button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
