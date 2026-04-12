'use client';

import { useEffect, useRef, useState } from 'react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const skillGroups = [
  {
    group: 'Mobile & Frontend',
    items: [
      { name: 'Flutter / Dart', level: 70 },
      { name: 'HTML & CSS', level: 80 },
      { name: 'Bootstrap', level: 65 },
      { name: 'JavaScript', level: 45 },
    ],
  },
  {
    group: 'Data Science & Machine Learning',
    items: [
      { name: 'Python', level: 75 },
      { name: 'Pandas & NumPy', level: 70 },
      { name: 'Scikit-learn', level: 65 },
      { name: 'Streamlit & Django', level: 72 },
    ],
  },
  {
    group: 'Tools & Other',
    items: [
      { name: 'Git & GitHub', level: 70 },
      { name: 'VS Code / Jupyter', level: 85 },
      { name: 'SQL / DBMS', level: 60 },
      { name: 'Communication', level: 90 },
    ],
  },
];

const techBadges = [
  'Flutter', 'Dart', 'Python', 'Streamlit', 'Scikit-learn',
  'YOLOv8', 'OpenCV', 'Pandas', 'Matplotlib', 'HTML', 'CSS',
  'JavaScript', 'Bootstrap', 'Django', 'SQL', 'Git', 'GitHub',
  'Jupyter', 'VS Code', 'Ubuntu',
];

function SkillBar({ name, level, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[#D0CEC8]">{name}</span>
        <span className="text-xs text-accent font-medium">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-28 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          label="Skills"
          title="What I work with."
          subtitle="Self-taught across multiple domains — always learning, always building."
        />

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map(({ group, items }) => (
            <div key={group} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-white font-semibold text-sm mb-5 pb-4 border-b border-white/5">
                {group}
              </h3>
              {items.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={visible} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#4A4845] mb-6">Technologies & Tools</p>
          <div className="flex flex-wrap gap-2.5">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="text-xs text-[#A09E98] border border-white/8 bg-white/[0.03] px-3 py-1.5 rounded-lg hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
