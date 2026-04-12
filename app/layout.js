import './globals.css';

export const metadata = {
  title: 'Muhammad Qaseem — AI Engineer & ML Enthusiast',
  description:
    'Portfolio of Muhammad Qaseem — AI Engineer, Data Scientist, Flutter Developer, and Aspiring ML Engineer based in Karachi, Pakistan.',
  keywords: ['Flutter', 'Web Developer', 'Machine Learning', 'Python', 'Karachi'],
  openGraph: {
    title: 'Muhammad Qaseem — AI Engineer & ML Enthusiast',
    description: 'Portfolio showcasing projects in AI, Flutter, Web, and Machine Learning.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
