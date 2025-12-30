import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { initScrollAnimations, initSmoothScroll } from './utils/animations';
import './styles/App.css';

function App() {
  useEffect(() => {
    initSmoothScroll();
    initScrollAnimations();
  }, []);

  return (
    <div className="portfolio">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
