import React, { useEffect } from 'react';

export default function Analysis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px', background: 'var(--bg-secondary)', minHeight: '100vh' }}>
      <section className="analisis" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="analisis-header reveal visible">
            <div className="section-label" style={{ justifyContent: 'center' }}>Análisis</div>
            <h2 className="section-title">Cuellos de Botella Identificados</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Mediante un estudio técnico exhaustivo, se identificaron tres causas principales 
              de fallas durante las sesiones de docencia virtual.
            </p>
          </div>

          <div className="cards-grid stagger reveal visible">
            {/* Card 1: RAM */}
            <div className="analysis-card">
              <div className="card-icon ram">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 6V4M10 6V4M14 6V4M18 6V4M6 18v2M10 18v2M14 18v2M18 18v2"/></svg>
              </div>
              <h3 className="card-title">Saturación de RAM</h3>
              <p className="card-text">
                Múltiples aplicaciones abiertas simultáneamente (Zoom, Chrome, Office) 
                consumen la memoria disponible, causando congelamiento y lentitud extrema.
              </p>
              <div className="metric-bar">
                <div className="metric-bar-header">
                  <span className="metric-bar-label">Uso promedio detectado</span>
                  <span className="metric-bar-value">87%</span>
                </div>
                <div className="metric-bar-track">
                  <div className="metric-bar-fill cyan" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div className="metric-bar">
                <div className="metric-bar-header">
                  <span className="metric-bar-label">Umbral crítico</span>
                  <span className="metric-bar-value">75%</span>
                </div>
                <div className="metric-bar-track">
                  <div className="metric-bar-fill cyan" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            {/* Card 2: Red */}
            <div className="analysis-card">
              <div className="card-icon network">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>
              </div>
              <h3 className="card-title">Latencia de Red</h3>
              <p className="card-text">
                Conexiones Wi-Fi inestables, saturación de ancho de banda en el hogar 
                y picos de latencia que degradan la calidad del audio y video en tiempo real.
              </p>
              <div className="metric-bar">
                <div className="metric-bar-header">
                  <span className="metric-bar-label">Latencia media</span>
                  <span className="metric-bar-value">180ms</span>
                </div>
                <div className="metric-bar-track">
                  <div className="metric-bar-fill green" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div className="metric-bar">
                <div className="metric-bar-header">
                  <span className="metric-bar-label">Pérdida de paquetes</span>
                  <span className="metric-bar-value">4.2%</span>
                </div>
                <div className="metric-bar-track">
                  <div className="metric-bar-fill green" style={{ width: '42%' }}></div>
                </div>
              </div>
            </div>

            {/* Card 3: Software */}
            <div className="analysis-card">
              <div className="card-icon software">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9l3 3-3 3M15 15h-3"/></svg>
              </div>
              <h3 className="card-title">Conflictos de Software</h3>
              <p className="card-text">
                Drivers desactualizados, antivirus que bloquean puertos, 
                actualizaciones de Windows en segundo plano y conflictos entre aplicaciones.
              </p>
              <div className="metric-bar">
                <div className="metric-bar-header">
                  <span className="metric-bar-label">Procesos en segundo plano</span>
                  <span className="metric-bar-value">142</span>
                </div>
                <div className="metric-bar-track">
                  <div className="metric-bar-fill purple" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div className="metric-bar">
                <div className="metric-bar-header">
                  <span className="metric-bar-label">Drivers desactualizados</span>
                  <span className="metric-bar-value">6</span>
                </div>
                <div className="metric-bar-track">
                  <div className="metric-bar-fill purple" style={{ width: '38%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="hardware-showcase reveal visible">
            <img src="assets/img/hardware.png" alt="Componentes de hardware" />
            <div className="overlay-text">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              Análisis a nivel de hardware — CPU, RAM, almacenamiento y conectividad
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
