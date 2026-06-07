import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiLoader, 
  FiArrowRight 
} from 'react-icons/fi';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';

const SERVICES = [
  'Web Development',
  'Agentic AI Solutions',
  'AI Model Training',
  'App Development',
  'Data Analytics & Reporting',
  'WhatsApp Chatbot'
];

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    let selectedService = '';
    if (location.state && location.state.preselectedService) {
      selectedService = location.state.preselectedService;
    } else {
      const params = new URLSearchParams(location.search);
      const queryService = params.get('service');
      if (queryService) selectedService = decodeURIComponent(queryService);
    }
    if (selectedService) {
      const matched = SERVICES.find(
        (s) => s.toLowerCase() === selectedService.toLowerCase()
      );
      if (matched) setFormData((prev) => ({ ...prev, service: matched }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (formData.phone.trim() && !/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.service) tempErrors.service = 'Please select a service interested in';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    setSuccess(false);
    if (!validateForm()) return;
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setServerError('Inquiry service is not fully configured. Please define EmailJS environment variables in the client configuration.');
      setLoading(false);
      return;
    }

    try {
      const emailData = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'N/A',
          service: formData.service,
          message: formData.message
        }
      };

      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData);
      
      if (response.status === 200 || response.data === 'OK') {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }
    } catch (err) {
      console.error('Error submitting contact form via EmailJS:', err);
      setServerError(
        typeof err.response?.data === 'string'
          ? err.response.data
          : 'Failed to send message. Please verify your EmailJS settings or internet connection.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#080810] text-white min-h-screen">

      {/* HERO STRIP */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 text-center overflow-hidden border-b border-neutral-900/60">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, #2A2A35 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[130px] pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col gap-4 relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Let's build something{' '}
            <span className="bg-gradient-to-r from-[#7C6BFF] to-[#00E5C4] bg-clip-text text-fill-transparent text-gradient-accent">
              together
            </span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Collaborate with us to design high-performance architectures, develop AI workflows, or scale your next web product.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 w-full relative">
        {/* Background orbs */}
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accent/6 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-[#00E5C4]/5 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="border-l-2 border-accent pl-5">
                <span className="text-xs uppercase tracking-widest font-extrabold text-accent">Direct line</span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
                  Reach out directly
                </h2>
              </div>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md">
                Whether you have a project scope in mind or you're still exploring — we're here to help you figure out the best path forward.
              </p>
            </motion.div>

            {/* Info blocks */}
            <div className="flex flex-col gap-4 max-w-sm">
              {[
                { icon: <FiMail size={18} />, label: 'Email Us', value: 'hello@novix.in', href: 'mailto:hello@novix.in', isLink: true },
                { icon: <FiMapPin size={18} />, label: 'Location', value: 'India — Remote friendly', isLink: false },
                { icon: <FiClock size={18} />, label: 'Response Time', value: 'We reply within 24 hours', isLink: false }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-center p-4 bg-[#0F0F1A] rounded-xl border border-neutral-900/60 hover:border-accent/25 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">{item.label}</h4>
                    {item.isLink ? (
                      <a href={item.href} className="text-neutral-300 text-sm hover:text-accent transition-colors duration-200 font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-neutral-300 text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative SVG */}
            <div className="hidden lg:block w-full max-w-[180px] mt-2 opacity-25">
              <svg viewBox="0 0 100 100" fill="none" className="w-full" strokeWidth="1.5">
                <line x1="10" y1="10" x2="90" y2="10" stroke="#7C6BFF" strokeDasharray="3 3" />
                <line x1="90" y1="10" x2="90" y2="90" stroke="#00E5C4" strokeDasharray="6 6" />
                <line x1="90" y1="90" x2="10" y2="90" stroke="#7C6BFF" strokeDasharray="3 3" />
                <line x1="10" y1="90" x2="10" y2="10" stroke="#00E5C4" strokeDasharray="1 2" />
                <circle cx="10" cy="10" r="3" fill="#7C6BFF" />
                <circle cx="90" cy="10" r="3" fill="#7C6BFF" />
                <circle cx="90" cy="90" r="3" fill="#00E5C4" />
                <circle cx="10" cy="90" r="3" fill="#00E5C4" />
                <circle cx="50" cy="50" r="8" stroke="#7C6BFF" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* RIGHT COLUMN — Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0F0F1A] border border-neutral-900/60 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/40 relative overflow-hidden"
            >
              {/* Subtle gradient overlay on form card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C6BFF]/4 via-transparent to-[#00E5C4]/3 pointer-events-none rounded-2xl" />

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center justify-center text-center py-16 gap-5"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <FiCheckCircle size={40} className="text-emerald-400" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-black text-white">We got your message!</h3>
                        <p className="text-neutral-400 text-sm max-w-sm">
                          We'll be in touch within 24 hours. Let's build something great together.
                        </p>
                      </div>
                      <Button variant="accent" onClick={() => setSuccess(false)} className="mt-4">
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="mb-2">
                        <h2 className="text-xl font-bold text-white">Send us a message</h2>
                        <p className="text-neutral-500 text-sm mt-1">Fill in the details below and we'll get back to you.</p>
                      </div>

                      {serverError && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-sm">
                          <FiAlertCircle className="flex-shrink-0" size={18} />
                          <span>{serverError}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Input
                          label="Full Name"
                          id="name"
                          placeholder="e.g., John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          error={errors.name}
                          required
                        />
                        <Input
                          label="Email Address"
                          id="email"
                          type="email"
                          placeholder="e.g., john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          error={errors.email}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Input
                          label="Phone Number (Optional)"
                          id="phone"
                          type="tel"
                          placeholder="e.g., +91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          error={errors.phone}
                        />
                        <Select
                          label="Service Interested In"
                          id="service"
                          options={SERVICES}
                          value={formData.service}
                          onChange={handleChange}
                          error={errors.service}
                          placeholder="Choose service option"
                          required
                        />
                      </div>

                      <Textarea
                        label="Project Details"
                        id="message"
                        placeholder="Describe your project, objectives, requirements, timelines..."
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        rows={4}
                        required
                      />

                      <Button variant="accent" type="submit" className="w-full mt-2 group !py-3.5 font-bold shadow-lg shadow-accent/20" disabled={loading}>
                        {loading ? (
                          <>
                            <FiLoader className="animate-spin text-lg" />
                            Sending message...
                          </>
                        ) : (
                          <>
                            Send message <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
