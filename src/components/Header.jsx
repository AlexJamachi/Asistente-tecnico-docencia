import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
            <div className="logo-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </div>
            <div className="logo-text">Asistente<span>Técnico</span></div>
          </Link>
          
          <nav>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li><Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Inicio</Link></li>
              <li><Link to="/presentacion" className={isActive('/presentacion')} onClick={() => setMenuOpen(false)}>Presentación</Link></li>
              <li><Link to="/analisis" className={isActive('/analisis')} onClick={() => setMenuOpen(false)}>Análisis</Link></li>
              <li><Link to="/investigacion" className={isActive('/investigacion')} onClick={() => setMenuOpen(false)}>Investigación</Link></li>
              <li><Link to="/propuesta" className={isActive('/propuesta')} onClick={() => setMenuOpen(false)}>Propuesta</Link></li>
            </ul>
          </nav>
          
          <button className={`nav-toggle ${menuOpen ? 'active' : ''}`} aria-label="Menú de navegación" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {menuOpen && <div className={`nav-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>}
    </>
  );
}
