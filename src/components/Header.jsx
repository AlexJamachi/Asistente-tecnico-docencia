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
            <div className="logo-icon">⚡</div>
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
