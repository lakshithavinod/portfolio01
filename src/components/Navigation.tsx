import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isLight, setIsLight] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const initial = stored === 'light';
      setIsLight(initial);
      document.documentElement.setAttribute('data-theme', initial ? 'light' : 'dark');
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">LV</span>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button
            className="theme-toggle-btn"
            onClick={() => {
              const next = isLight ? 'dark' : 'light';
              setIsLight(!isLight);
              try {
                localStorage.setItem('theme', next);
              } catch (e) {}
              document.documentElement.setAttribute('data-theme', next);
            }}
            aria-label="Toggle theme"
          >
            {isLight ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
