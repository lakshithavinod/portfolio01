import { useEffect, useRef } from 'react';
import { Github, Linkedin, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import profilePic from '../../image1.jpeg';

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = "Hii, I am Lakshitha Vinod";
    const element = textRef.current;
    if (!element) return;

    let index = 0;
    element.textContent = '';

    const typeWriter = () => {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      }
    };

    const initialDelay = setTimeout(typeWriter, 500);

    return () => clearTimeout(initialDelay);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 ref={textRef} className="hero-title"></h1>
          <p className="hero-subtitle">
            Undergraduate in Biomedical Technology
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Contact with Me
            </button>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>

          <div className="hero-contact">
            <a href="mailto:lakshithavinod25@gmail.com" className="contact-item">
              <Mail size={18} />
              <span>lakshithavinod25@gmail.com</span>
            </a>
            <a href="tel:0762075906" className="contact-item">
              <Phone size={18} />
              <span>0762075906</span>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profilePic} alt="Lakshitha Vinod" className="profile-pic" />
        </div>

        <div className="hero-social">
          <a href="https://m.facebook.com/profile.php?id=61560126956619" className="social-link" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="social-link" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
