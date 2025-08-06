'use client';

import { useState, useEffect } from 'react';
import Preloader from '@/components/preloader';
import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/resume';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
