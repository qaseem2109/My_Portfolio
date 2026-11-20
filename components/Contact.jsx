'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const socials = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'qaseem2109@gmail.com',
    href: 'mailto:qaseem2109@gmail.com',
  },
  {
    Icon: Github,
    label: 'GitHub',
    value: 'github.com/qaseem2109',
    href: 'https://github.com/qaseem2109',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    value: 'muhammad-qaseem',
    href: 'https://www.linkedin.com/in/muhammad-qaseem-75839b290/',
  },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  /* 
    NOTE: This is a UI-only form. To make it functional, connect to
    a service like Formspree (https://formspree.io) or EmailJS.
    Replace the action URL in the fetch call below.
  */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          label="Contact"
          title="Let's work together."
          subtitle="Open to internships, freelance projects, and junior roles. Feel free to reach out."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Socials */}
          <div>
            <p className="text-[#7A7875] leading-relaxed mb-8">
              Whether you have a project in mind, a question, or just want to connect — my inbox is
              open. I typically respond within 24 hours.
            </p>

            <div className="space-y-4">
              {socials.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-accent/25 hover:bg-accent/[0.03] transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-[#4A4845] uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-sm text-[#D0CEC8] group-hover:text-white transition-colors">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle size={40} className="text-accent" />
                <h4 className="text-white font-semibold text-xl">Message Sent!</h4>
                <p className="text-[#7A7875] text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                  className="text-xs text-accent hover-underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs text-[#4A4845] uppercase tracking-wider mb-2 block">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A4845] focus:outline-none focus:border-accent/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#4A4845] uppercase tracking-wider mb-2 block">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A4845] focus:outline-none focus:border-accent/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#4A4845] uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A4845] focus:outline-none focus:border-accent/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-black font-semibold py-3 rounded-xl hover:bg-accent-light transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
                {/* <p className="text-[10px] text-[#4A4845] text-center">
                  * Connect this form to Formspree or EmailJS to enable actual email delivery.
                </p> */}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
