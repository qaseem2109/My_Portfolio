'use client';

import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    role: 'Marketing Manager',
    company: 'Quality Supply USA',
    type: 'US-Based Hotel Supplier',
    period: 'May 2025 – Present',
    duration: '1+ year',
    location: 'Karachi, Pakistan',
    points: [
      'Develop and execute end - to - end marketing strategies to drive brand awareness and lead generation.',
      'Manage inbound and outbound calling campaigns, qualifying leads and converting prospects into clients.',
      'Craft targeted messaging and campaigns tailored to specific customer segments and market needs.',
      'Collaborate cross-functionally to align marketing efforts with business goals and growth targets.',
    ],
  },
];

const education = [
  {
    degree: 'BS Software Engineering',
    institute: 'University of Karachi (UBIT)',
    period: '2024 – 2027',
    detail: 'Currently enrolled. Focused on software development, data structures, and engineering principles.',
  },
  {
    degree: 'AI & Data Science',
    institute: 'Saylani Mass IT Training',
    period: 'Feb 2025 – Dec 2025',
    detail: 'Intensive program covering machine learning, deep learning, and data analysis with Python.',
  },
  {
    degree: 'Pre-Engineering',
    institute: 'Government Islamia Science College',
    period: '2021 – 2023',
    detail: 'Completed with 80% marks. Strong foundation in mathematics and physics.',
  },
];

export default function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-28 px-6 bg-white/[0.01]">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          label="Experience & Education"
          title="My journey so far."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#4A4845] mb-8">Work</h3>
            {experiences.map((exp) => (
              <div key={exp.role} className="relative pl-6 border-l border-white/10">
                {/* Dot */}
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent" />

                <div className="mb-3">
                  <span className="text-[10px] text-accent border border-accent/20 bg-accent/5 px-2 py-0.5 rounded-full">
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-white font-semibold text-lg">{exp.role}</h4>
                <p className="text-accent text-sm font-medium mb-0.5">{exp.company}</p>
                <p className="text-[#4A4845] text-xs mb-1">{exp.type}</p>
                <p className="text-[#4A4845] text-xs mb-5">{exp.period} · {exp.location}</p>

                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-[#7A7875] leading-relaxed">
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#4A4845] mb-8">Education</h3>
            <div className="space-y-0">
              {education.map((edu, i) => (
                <div key={edu.degree} className="relative pl-6 border-l border-white/10 pb-8 last:pb-0">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full border-2 border-accent bg-[#0D0D0D]" />

                  <p className="text-[#4A4845] text-xs mb-2">{edu.period}</p>
                  <h4 className="text-white font-semibold">{edu.degree}</h4>
                  <p className="text-accent text-sm mb-2">{edu.institute}</p>
                  <p className="text-[#7A7875] text-sm leading-relaxed">{edu.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
