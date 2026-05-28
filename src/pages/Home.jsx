import React from 'react';
import { Link } from 'react-router-dom';
import LatencyMeter from '../components/LatencyMeter';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img src="assets/img/hero-bg.png" alt="" loading="eager" />
        </div>
        <div className="hero-particles">
          {[...Array(10)].map((_, i) => <div key={i} className="particle"></div>)}
        </div>
        <div className="hero-grid"></div>

        <div className="hero-content" style={{ marginTop: '80px' }}>
          <div className="hero-badge">
            <span className="dot"></span>
            Proyecto de Informática — 2026
          </div>
          <h1 className="hero-title">
            Asistente de<br/>
            <span className="gradient-text">Diagnóstico Técnico</span><br/>
            para Docencia Virtual
          </h1>
          <p className="hero-subtitle">
            Herramienta automatizada que identifica cuellos de botella en hardware, software y red, 
            reduciendo el tiempo perdido por fallas técnicas en clases virtuales.
          </p>
          <div className="hero-actions">
            <a href="#demostracion" className="btn btn-primary">Ver Demostración</a>
            <Link to="/presentacion" className="btn btn-secondary">Conocer Más</Link>
          </div>
        </div>
      </section>

      <section id="demostracion" style={{ padding: "60px 0 40px 0", background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Demostración Interactiva</div>
            <h2 className="section-title">Medidor de Latencia en Tiempo Real</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Pequeña demostración del proyecto: Mide la latencia en vivo y recibe recomendaciones al instante según la estabilidad simulada de tu conexión.
            </p>
          </div>
          <LatencyMeter />
        </div>
      </section>
    </>
  );
}
