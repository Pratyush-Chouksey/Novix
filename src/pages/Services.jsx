import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiGlobe, 
  FiCpu, 
  FiLayers, 
  FiSmartphone, 
  FiBarChart2, 
  FiMessageSquare, 
  FiCheck,
  FiArrowRight
} from 'react-icons/fi';
import Button from '../components/ui/Button';

const SERVICES_DATA = [
  {
    id: "web-development",
    name: "Web Development",
    icon: <FiGlobe size={28} className="text-accent" />,
    description: "We engineer high-performance web products, secure client portals, and bespoke SaaS systems. By leveraging server-side architectures, we optimize loading cycles, core web vitals, and index-readiness.",
    included: [
      "Custom React and Next.js Single Page & SSR Applications",
      "Robust REST & GraphQL APIs integrated with serverless functions",
      "Pixel-perfect responsive design based on shared design systems",
      "Fully containerized hosting setup and auto-scaling cloud deploys",
      "Integrated analytics, search indexing, and metadata audits"
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "AWS"]
  },
  {
    id: "agentic-ai",
    name: "Agentic AI Solutions",
    icon: <FiCpu size={28} className="text-accent" />,
    description: "We orchestrate autonomous AI agents that handle multi-step business logic, context retrieval, and software execution. We build workflows that enable models to plan, execute, and adapt.",
    included: [
      "Multi-agent autonomous systems using frameworks like CrewAI & Autogen",
      "Context-rich RAG (Retrieval-Augmented Generation) databases",
      "Integrations with Claude API, OpenAI GPT, and open-weights models",
      "Automated prompt-chaining and custom cognitive architectures",
      "Structured output parsers, LLM guardrails, and usage logging"
    ],
    tech: ["LangChain", "OpenAI", "Claude API", "FastAPI", "Python", "RAG"]
  },
  {
    id: "ai-model-training",
    name: "AI Model Training",
    icon: <FiLayers size={28} className="text-accent" />,
    description: "We specialize in fine-tuning open-weights models to perform highly specialized operations. By cleaning proprietary datasets and leveraging adapters, we train local intelligence at a fraction of standard API costs.",
    included: [
      "Supervised Fine-Tuning (SFT) and QLoRA adapter training",
      "Model quantization and conversion for edge deployment (GGUF, AWQ)",
      "Proprietary dataset cleaning, tokenization, and evaluation sets",
      "Hosting configurations on serverless GPU runner fleets (Replicate/Runpod)",
      "Validation metrics reporting and bias testing audits"
    ],
    tech: ["PyTorch", "HuggingFace", "LoRA", "GGUF", "Replicate", "Python"]
  },
  {
    id: "app-development",
    name: "App Development",
    icon: <FiSmartphone size={28} className="text-accent" />,
    description: "We build native and cross-platform mobile apps focused on fluid touch animations, clean state updates, and reliable background synchronization.",
    included: [
      "Cross-platform applications utilizing React Native or Flutter",
      "Offline-first databases with real-time local cache synchronization",
      "Native device API integrations (GPS, camera, bluetooth, push)",
      "App Store & Google Play automated release pipelines (Fastlane)",
      "Intuitive layouts and physics-based gesture navigation"
    ],
    tech: ["React Native", "Expo", "Flutter", "Firebase", "Node.js"]
  },
  {
    id: "data-analytics",
    name: "Data Analytics & Reporting",
    icon: <FiBarChart2 size={28} className="text-accent" />,
    description: "We transform distributed logs and databases into intuitive, actionable executive dashboards. By optimizing queries, we build real-time reporting pipelines.",
    included: [
      "ETL data pipelines and warehousing architectures",
      "Interactive enterprise business intelligence dashboards",
      "Fast data app prototyping with Streamlit and Pandas",
      "SQL query tuning and database indexing optimization",
      "Automated scheduled reports and anomalies warning logs"
    ],
    tech: ["Python", "Pandas", "Tableau", "Power BI", "SQL", "Streamlit"]
  },
  {
    id: "whatsapp-chatbot",
    name: "WhatsApp Chatbot",
    icon: <FiMessageSquare size={28} className="text-accent" />,
    description: "We configure certified WhatsApp API nodes to enable instant customer support, lead engagement, and transaction flows directly within messages.",
    included: [
      "Official WhatsApp Cloud API verification and phone provisioning",
      "Natural Language Processing (NLP) intent matching logic",
      "Interactive menus, product catalogs, and list components",
      "CRM syncing and live human-agent handoff alerts",
      "Scalable webhooks hosted in secure sandbox networks"
    ],
    tech: ["WhatsApp Business API", "Node.js", "Twilio", "Dialogflow", "MongoDB"]
  }
];

const Services = () => {
  const [activeSection, setActiveSection] = useState(SERVICES_DATA[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const service of SERVICES_DATA) {
        const el = document.getElementById(service.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(service.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#080810] text-white overflow-hidden">

      {/* HERO STRIP */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 text-center overflow-hidden border-b border-neutral-900/60">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, #2A2A35 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col gap-4 relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent">Solutions Suite</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Our <span className="text-gradient-accent bg-gradient-to-r from-[#7C6BFF] to-[#00E5C4] bg-clip-text text-fill-transparent">Services</span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From intelligence models to custom code architectures — explore the technical divisions Novix manages for partners.
          </p>
        </div>
      </section>

      {/* SERVICES CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* STICKY SIDEBAR (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 z-10 bg-transparent py-0">
            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest font-extrabold text-neutral-600 mb-4 px-3">Index</span>
              {SERVICES_DATA.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === service.id
                      ? 'bg-accent/10 text-accent border-l-2 border-accent'
                      : 'text-neutral-500 hover:text-white hover:bg-neutral-900/40'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="w-full lg:col-span-9 flex flex-col gap-20 md:gap-28">
            {/* Mobile/Tablet Index Navigation Strip (Non-sticky) */}
            <div className="lg:hidden flex w-full max-w-full overflow-x-auto gap-2 pb-6 border-b border-neutral-900/40 select-none no-scrollbar scroll-smooth">
              {SERVICES_DATA.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeSection === service.id
                      ? 'bg-accent text-white'
                      : 'bg-[#0F0F1A] text-neutral-400 border border-neutral-800'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                id={service.id}
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="scroll-mt-32 border-b border-neutral-900/40 pb-16 md:pb-24 last:border-none last:pb-0 flex flex-col gap-8"
              >
                {/* Icon + Name */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    {service.name}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {service.description}
                </p>

                {/* What's Included */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500">
                    What's included
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.included.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-neutral-400">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#0F0F1A] border border-neutral-800 flex items-center justify-center text-accent">
                          <FiCheck size={11} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-neutral-900/40">
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="px-3 py-1 bg-[#0F0F1A] border border-neutral-800 text-neutral-300 text-xs font-semibold rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.name)}`}
                    state={{ preselectedService: service.name }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline whitespace-nowrap self-start sm:self-auto group"
                  >
                    Get a quote for this
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA — matches Home page CTA strip */}
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
              Not sure which service fits?
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Schedule a technical consult with our architecture lead. We'll analyze your workflow and propose an optimized implementation plan.
            </p>
          </div>
          <Link to="/contact" className="relative z-10 w-full md:w-auto">
            <Button variant="accent" className="w-full md:w-auto !px-8 !py-3 font-bold shadow-lg shadow-accent/20">
              Contact Tech Lead
            </Button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Services;
