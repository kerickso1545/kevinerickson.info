import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProjectShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Kevin Erickson | Technology Leader & Innovation Architect";
    
    // Add scroll reveal functionality
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal:not(.visible)');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;