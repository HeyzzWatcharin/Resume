import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const sections = [
  { id: 'about', title: 'About', content: 'This is a demo interactive resume.' },
  { id: 'skills', title: 'Skills', content: 'TypeScript, React, Next.js, CSS' },
  { id: 'experience', title: 'Experience', content: '5+ years building web apps' },
  { id: 'contact', title: 'Contact', content: 'email@example.com' },
];

export default function Home() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setPosition((p) => Math.min(p + 1, sections.length - 1));
      if (e.key === 'ArrowLeft') setPosition((p) => Math.max(p - 1, 0));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.character} style={{ left: `${position * 25}%` }}>
        🚀
      </div>
      {sections.map((sec, i) => (
        <section key={sec.id} className={styles.section} style={{ transform: `translateX(${(i - position) * 100}%)` }}>
          <h2>{sec.title}</h2>
          <p>{sec.content}</p>
        </section>
      ))}
    </div>
  );
}
