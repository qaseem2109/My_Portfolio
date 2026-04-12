'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';


const roles = ['AI Engineer', 'Data Scientist', 'Flutter Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-48 h-48 bg-accent/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full pt-24 pb-16">
        {/* Label */}
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-accent font-medium">
            Available for Opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="font-display font-black leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          <span className="block text-white">Muhammad</span>
          <span className="block text-gradient">Qaseem.</span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[#A09E98] text-lg md:text-xl font-light">
            {displayed}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>

        {/* Short bio */}
        <p className="text-[#7A7875] max-w-xl text-base md:text-lg leading-relaxed mb-10">
          A dedicated developer from{' '}
          <span className="text-white font-medium">Karachi, Pakistan</span>, building mobile apps
          with Flutter and exploring the intersection of data science and real-world problems.
          Currently studying Software Engineering at{' '}
          <span className="text-white font-medium">University of Karachi</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-accent text-black font-semibold px-6 py-3 rounded-full hover:bg-accent-light transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-accent/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 border border-white/10 text-white font-medium px-6 py-3 rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5">
          <span className="text-xs text-[#4A4845] uppercase tracking-widest">Find me on</span>
          <div className="flex gap-4">
            {[
              { Icon: Github, href: 'https://github.com/qaseem2109', label: 'GitHub' },
              {
                Icon: Linkedin,
                href: 'https://www.linkedin.com/in/muhammad-qaseem-75839b290/',
                label: 'LinkedIn',
              },
              { Icon: Mail, href: 'mailto:qaseem2109@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#A09E98] hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4A4845] hover:text-accent transition-colors duration-200 animate-bounce"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
