import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTerminal, FiCpu, FiCheck, FiLayers } from 'react-icons/fi';
import Button from '../components/ui/Button';

const SERVICES = [
  {
    id: "01",
    emoji: "🌐",
    name: "Web Development",
    description: "High-performance enterprise platforms and SPAs built using React, Node.js, and serverless backends."
  },
  {
    id: "02",
    emoji: "🤖",
    name: "Agentic AI Solutions",
    description: "Multi-agent systems and cognitive LLM chains designed to automate complex, multi-step workflows."
  },
  {
    id: "03",
    emoji: "🧠",
    name: "AI Model Training",
    description: "Fine-tuning weights and adapters on private datasets to optimize specialized intelligence pipelines."
  },
  {
    id: "04",
    emoji: "📱",
    name: "App Development",
    description: "Fast, responsive native mobile applications for iOS & Android, featuring offline caching structures."
  },
  {
    id: "05",
    emoji: "📊",
    name: "Data Analytics & Reporting",
    description: "Constructing SQL pipelines, cleaning databases, and launching interactive business intelligence dashboards."
  },
  {
    id: "06",
    emoji: "💬",
    name: "WhatsApp Chatbot",
    description: "Automating conversational customer flows and sales routing utilizing the official Cloud APIs."
  }
];

const Home = () => {
  const canvasRef = useRef(null);
  const [activeTab, setActiveTab] = useState('agent');
  const [agentLogs, setAgentLogs] = useState([
    'System initialized on port 8080.',
    'Agent "Novix-A1" spawned.'
  ]);

  // Simulated agent terminal outputs
  useEffect(() => {
    const outputs = [
      'Retrieving user context...',
      'Context loaded successfully.',
      'Analyzing repository architecture...',
      'Detected Next.js & PyTorch pipelines.',
      'Optimizing rendering cycles...',
      'Deploying LLM cognitive model...',
      'System status: 100% active.'
    ];
    let index = 0;
    const interval = setInterval(() => {
      if (index < outputs.length) {
        setAgentLogs(prev => [...prev, outputs[index]]);
        index++;
      } else {
        setAgentLogs([
          'System initialized on port 8080.',
          'Agent "Novix-A1" spawned.'
        ]);
        index = 0;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Particle & Constellation Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const numParticles = 80;
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(124, 107, 255, 0.45)';
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 107, 255, ${0.16 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-primary text-secondary">
      
      {/* 1. HERO SECTION (Particle canvas + custom headers + terminal interactive demo) */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 pt-32 pb-24 select-none">
        {/* Constellation Canvas background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
        
        {/* Glow decoration */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/6 blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center z-10 flex flex-col items-center gap-8 relative">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-xs text-accent font-semibold tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5C4] animate-ping" />
            AI-first technology agency
          </motion.div>

          {/* Heading - Bigger text sizes */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-3px] leading-[1.05] text-white max-w-5xl"
          >
            We build what <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#7C6BFF] to-[#00E5C4] bg-clip-text text-fill-transparent text-gradient-accent">
              the future runs on.
            </span>
          </motion.h1>

          {/* Subtext - Slightly larger and wider */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px]"
          >
            From intelligent AI systems to scalable web products — Novix engineers digital solutions that move business forward.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link to="/services">
              <Button variant="accent" className="!px-8 !py-3.5 font-bold text-base shadow-lg shadow-accent/25 hover:shadow-accent/40">
                Explore our services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" className="!px-8 !py-3.5 font-semibold text-base border border-neutral-800 hover:border-neutral-600 bg-transparent hover:bg-neutral-900/25">
                Let's talk <FiArrowRight className="inline ml-1" />
              </Button>
            </Link>
          </motion.div>

          {/* INTERACTIVE GLOWING TERMINAL MOCKUP — fills empty space below content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="w-full max-w-3xl mt-12 rounded-xl bg-[#090914] border border-neutral-900 shadow-[0_0_50px_-15px_rgba(124,107,255,0.25)] text-left overflow-hidden flex flex-col h-[320px]"
          >
            {/* Header / Tabs */}
            <div className="bg-[#0c0c1b] border-b border-neutral-900 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTab('agent')}
                  className={`text-xs font-bold transition-colors duration-200 flex items-center gap-1.5 ${activeTab === 'agent' ? 'text-accent' : 'text-neutral-500'}`}
                >
                  <FiCpu size={12} /> Agent Shell
                </button>
                <button 
                  onClick={() => setActiveTab('schema')}
                  className={`text-xs font-bold transition-colors duration-200 flex items-center gap-1.5 ${activeTab === 'schema' ? 'text-accent' : 'text-neutral-500'}`}
                >
                  <FiLayers size={12} /> config.json
                </button>
              </div>
              <div className="text-[10px] font-mono text-neutral-600">novix_agent_core.sh</div>
            </div>

            {/* Content Display */}
            <div className="p-5 font-mono text-xs overflow-y-auto flex-1 flex flex-col gap-2 bg-[#080810]/50">
              {activeTab === 'agent' ? (
                <>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <span className="text-[#00E5C4] font-black">$</span>
                    <span>novix-agent --init</span>
                  </div>
                  {agentLogs.map((log, i) => (
                    <div key={i} className="flex gap-2 text-neutral-300">
                      <span className="text-accent select-none font-bold">»</span>
                      <span>{log}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-accent animate-pulse mt-1">
                    <span>█</span>
                  </div>
                </>
              ) : (
                <pre className="text-neutral-400 leading-relaxed font-mono select-text whitespace-pre-wrap">
{`{
  "client": "novix.in",
  "engine": "Agentic AI Orchestrator v2.4",
  "hosting": {
    "provider": "AWS serverless node clusters",
    "region": "ap-south-1"
  },
  "modules": [
    "Cognitive chains (Claude 3.5 Sonnet)",
    "Fine-tuned PyTorch weight adapters",
    "Real-time RAG context sync"
  ],
  "latency": "< 45ms",
  "status": "fully-optimized"
}`}
                </pre>
              )}
            </div>
          </motion.div>
        </div>

        {/* Scrolling Marquee strip below hero */}
        <div className="absolute bottom-0 left-0 w-full border-t border-b border-neutral-900/80 bg-[#080810]/80 py-4.5 z-10 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            <div className="flex gap-12 text-xs md:text-sm font-bold tracking-widest text-neutral-500 uppercase px-6">
              <span>Web Development</span><span>✦</span>
              <span>Agentic AI Solutions</span><span>✦</span>
              <span>AI Model Training</span><span>✦</span>
              <span>App Development</span><span>✦</span>
              <span>Data Analytics & Reporting</span><span>✦</span>
              <span>WhatsApp Chatbot</span><span>✦</span>
            </div>
            <div className="flex gap-12 text-xs md:text-sm font-bold tracking-widest text-neutral-500 uppercase px-6">
              <span>Web Development</span><span>✦</span>
              <span>Agentic AI Solutions</span><span>✦</span>
              <span>AI Model Training</span><span>✦</span>
              <span>App Development</span><span>✦</span>
              <span>Data Analytics & Reporting</span><span>✦</span>
              <span>WhatsApp Chatbot</span><span>✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION (Collapse Border 1px Divider layout) */}
      <section className="bg-primary py-24 md:py-32 px-6 md:px-12 w-full relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Headers */}
          <div className="flex flex-col gap-3 mb-16 border-l-2 border-accent pl-6">
            <span className="text-xs tracking-widest font-extrabold text-accent uppercase">
              WHAT WE BUILD
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Six ways we <br />
              <span className="text-neutral-500 font-bold">accelerate your business</span>
            </h2>
          </div>

          {/* Grid Container with Collapse Border lines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-900/60 bg-neutral-950/10">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="border-b border-r border-neutral-900/60 p-8 flex flex-col justify-between relative overflow-hidden group min-h-[260px] bg-transparent hover:bg-neutral-900/15 transition-colors duration-300"
              >
                {/* Accent top gradient line on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent via-indigo-400 to-[#00E5C4] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                
                <div className="flex flex-col gap-6">
                  {/* Top Header */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs text-neutral-600 font-bold tracking-widest uppercase">
                      {service.id}
                    </span>
                    <span className="text-3xl filter saturate-75">
                      {service.emoji}
                    </span>
                  </div>
                  
                  {/* Service Metadata */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {service.name}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Explore button overlay on hover */}
                <Link 
                  to="/services" 
                  state={{ preselectedService: service.name }}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Explore ↗
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY NOVIX BENTO GRID SECTION */}
      <section className="bg-primary py-24 md:py-32 px-6 md:px-12 w-full relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs tracking-widest font-extrabold text-accent uppercase">Advantages</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-white">
              Why teams choose Novix
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
            
            {/* Card 1: Stat Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0F0F1A] border border-neutral-900/60 rounded-xl p-8 flex flex-col justify-between gap-6 min-h-[200px]"
            >
              <span className="text-4xl md:text-[56px] font-black text-white leading-none">6+ Services</span>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Comprehensive technological solutions from web products to dataset fine-tuning.
              </p>
            </motion.div>

            {/* Card 2: Stat Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0F0F1A] border border-neutral-900/60 rounded-xl p-8 flex flex-col justify-between gap-6 min-h-[200px]"
            >
              <span className="text-4xl md:text-[56px] font-black text-white leading-none">10+ Tech Stacks</span>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Mastery of React, Next.js, LangChain, PyTorch, Node, and multi-cloud serverless networks.
              </p>
            </motion.div>

            {/* Card 3: 2-Col Wide Accent Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 bg-[#7C6BFF]/10 border border-[#7C6BFF]/20 rounded-xl p-8 md:p-10 flex flex-col justify-between gap-6 min-h-[220px]"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-[#7C6BFF] tracking-tight">
                AI-first — everything we build
              </span>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl">
                We integrate cognitive capabilities directly into database nodes and rendering pipelines. Every digital product we engineer leverages automation loops to optimize speed, costs, and customer experiences.
              </p>
            </motion.div>

            {/* Card 4: 2-Col Wide Teal Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 bg-[#00E5C4]/5 border border-[#00E5C4]/15 rounded-xl p-8 md:p-10 flex flex-col justify-between gap-6 min-h-[220px]"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-[#00E5C4] tracking-tight">
                India-based. Global mindset.
              </span>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl">
                Operating out of New Delhi, India, we scale products for founders worldwide. We maintain standard security controls, reliable sprint communications, and robust cloud configurations matching Silicon Valley engineering standards.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. CTA STRIP SECTION (Gradient & radial pseudo glows) */}
      <section className="py-16 md:py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden bg-[#0A0A16] border border-neutral-900 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-glow"
        >
          {/* Diagonal gradient overlay and radial glowing orb */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C6BFF]/10 via-transparent to-[#00E5C4]/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-radial-glow pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(124,107,255,0.15) 0%, transparent 70%)'
            }}
          />

          {/* Left Text */}
          <div className="flex flex-col gap-4 text-left relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to build something <br className="hidden sm:inline" />
              the world hasn't seen yet?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Schedule an architecture call with our technical lead to mapping out timelines, GPU pipelines, or backend dependencies.
            </p>
          </div>

          {/* Right Button */}
          <div className="relative z-10 w-full lg:w-auto">
            <Link to="/contact">
              <Button variant="accent" className="w-full lg:w-auto !px-8 !py-4 font-bold text-base shadow-lg shadow-accent/25 hover:shadow-glow-strong">
                Tell us about your project
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
      
    </div>
  );
};

export default Home;
