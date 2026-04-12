'use client';

import { Github, ExternalLink } from 'lucide-react';
import useReveal from './useReveal';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Uber Fare Prediction',
    description:
      'End-to-end ML pipeline predicting Uber trip fares from historical data. Includes feature engineering, regression models, and a fully interactive Streamlit web app for live predictions.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
    category: 'Machine Learning',
    github: 'https://github.com/qaseem2109/Uber_Fare_Prediction_With_StreamLit',
    demo: null,
  },
  {
    title: 'Vehicle Number Plate Detection',
    description:
      'Custom-trained YOLOv8 model that detects and reads license plates from images, video files, and real-world noisy scenes using OCR for alphanumeric character extraction.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'OCR'],
    category: 'Deep Learning',
    github: 'https://github.com/qaseem2109/License_Number_Plate_Detector',
    demo: null,
  },
  {
    title: 'Netflix Data Analysis',
    description:
      'Exploratory data analysis on Netflix dataset — content trends, genre distribution, country-wise insights, and release year patterns. Visualized with heatmaps, count plots, and bar charts.',
    tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    category: 'Data Analysis',
    github: 'https://github.com/qaseem2109/Netflix_Data_Analysis',
    demo: null,
  },
  {
    title: 'Salary Prediction with CGPA',
    description:
      'Linear regression model trained on a synthetic CGPA-to-Salary dataset. Evaluates model performance with MSE and R² score, and visualizes the regression line over a scatter plot.',
    tech: ['Python', 'Scikit-learn', 'Matplotlib'],
    category: 'Machine Learning',
    github: 'https://github.com/qaseem2109/Linear_Regression_Model',
    demo: null,
  },
  {
    title: 'UBIT Student Hub Portal',
    description:
      'Flutter-based mobile app designed for University of Karachi students — centralizing academic resources, announcements, and campus information in one clean interface.',
    tech: ['Flutter', 'Dart', 'Firebase'],
    category: 'Mobile App',
    github: 'https://github.com/qaseem2109/UBIT_Student_Hub',
    demo: null,
  },
  {
    title: 'Weather App',
    description:
      'Cross-platform Flutter app that fetches live weather data via a public API, displaying current conditions, forecasts, and location-based updates with a clean UI.',
    tech: ['Flutter', 'Dart', 'REST API'],
    category: 'Mobile App',
    github: 'https://github.com/qaseem2109/Weather-App',
    demo: null,
  },
];

const categoryColors = {
  'Machine Learning': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Deep Learning': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Data Analysis': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Mobile App': 'bg-accent/10 text-accent border-accent/20',
};

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-28 px-6 bg-white/[0.01] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div ref={ref} className={`max-w-6xl mx-auto reveal ${visible ? 'visible' : ''}`}>
        <SectionHeading
          label="Projects"
          title="Things I've built."
          subtitle="A mix of machine learning pipelines, data explorations, and mobile apps — each solving a real problem."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className="group relative flex flex-col p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-accent/25 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Category badge */}
      <span
        className={`self-start text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-full border mb-5 ${
          categoryColors[project.category]
        }`}
      >
        {project.category}
      </span>

      <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-[#7A7875] text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span key={t} className="text-[11px] text-[#6A6865] bg-white/[0.04] px-2.5 py-1 rounded-md">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-[#A09E98] hover:text-white transition-colors"
        >
          <Github size={13} />
          Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#A09E98] hover:text-accent transition-colors"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
