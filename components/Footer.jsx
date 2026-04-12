import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-[#4A4845]">
          <span className="font-display font-bold text-white text-base">MQ<span className="text-accent">.</span></span>
          <span>—</span>
          <span>© {year} Muhammad Qaseem. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#4A4845]">
          Built with
          <span className="text-white">Next.js</span>
          &
          <span className="text-accent">Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-4">
          {[
            { Icon: Github, href: 'https://github.com/qaseem2109', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-qaseem-75839b290/', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:qaseem2109@gmail.com', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#4A4845] hover:text-accent transition-colors duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
