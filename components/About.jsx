'use client';

import useReveal from './useReveal';
import SectionHeading from './SectionHeading';
import { GraduationCap, Briefcase, Code2 } from 'lucide-react';

const highlights = [
  {
    Icon: GraduationCap,
    title: 'Education',
    text: 'BS Software Engineering at University of Karachi (2024–2027). Also enrolled in Saylani Mass IT Training — AI & Data Science.',
  },
  {
    Icon: Code2,
    title: 'AI Engineering',
    text: 'Building end-to-end AI systems — from regression models and deep learning pipelines to computer vision with YOLOv8 and OCR. Projects span fare prediction, number plate detection, and data analysis, all deployed with Python and Streamlit.',
  },
  {
    Icon: Briefcase,
    title: 'Experience',
    text: 'Marketing Manager at a Firm, sharpening communication and problem-solving skills across diverse markets.',
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Subtle divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-accent/30" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}
      >
        <SectionHeading
          label="About Me"
          title="The person behind the code."
          subtitle="I'm a developer who bridges two worlds — the precision of engineering and the empathy of customer-facing work."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div className="space-y-5">
            <p className="text-[#A09E98] leading-relaxed">
              I'm <span className="text-white font-medium">Muhammad Qaseem</span>, a Software
              Engineering student from Karachi building intelligent systems at the intersection of
              <span className="text-accent"> Machine Learning</span>,{' '}
              <span className="text-accent">Deep Learning</span>, and{' '}
              <span className="text-accent">Computer Vision</span> — from training custom YOLOv8
              models to deploying end-to-end ML pipelines with Python and Streamlit.
            </p>
            <p className="text-[#A09E98] leading-relaxed">
              My experience as a <span className="text-white font-medium">Marketing Manager</span> gave
              me something most AI engineers lack — sharp strategic thinking and the ability to
              communicate complex technical ideas to non-technical audiences. I bring that clarity into
              every model, pipeline, and product I build.
            </p>
            <p className="text-[#A09E98] leading-relaxed">
              I'm actively seeking internships, freelance work, and junior roles where I can grow
              fast and contribute meaningfully.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {['Karachi, Pakistan', 'Open to Remote', 'Available Now'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-accent border border-accent/20 bg-accent/5 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-4">
            {highlights.map(({ Icon, title, text }, i) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
                  <p className="text-[#7A7875] text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
