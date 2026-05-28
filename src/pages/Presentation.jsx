import React, { useEffect } from 'react';

export default function Presentation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <section className="presentacion">
        <div className="container">
          <div className="presentacion-grid">
            {/* Left: Image */}
            <div className="presentacion-image reveal-left visible">
              <img src="assets/img/teacher.png" alt="Docente en clase virtual" />
              <div className="image-badge">
                <div className="badge-icon">🎓</div>
                <div>
                  <div className="badge-text">Clase Virtual en Curso</div>
                  <div className="badge-sub">Zoom · 32 participantes</div>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="presentacion-text reveal-right visible">
              <div className="section-label">Presentación</div>
              <h2 className="section-title">El Problema: Tiempo Perdido por Fallas Técnicas</h2>
              <p className="section-desc">
                Los docentes universitarios enfrentan interrupciones constantes durante sus clases virtuales 
                debido a problemas técnicos que no saben diagnosticar. Desde congelamiento de pantalla hasta 
                caídas de conexión, cada falla resta minutos valiosos de enseñanza.
              </p>

              <div className="highlight-box">
                <p>
                  "En promedio, un docente pierde entre <strong style={{color: "var(--accent-cyan)"}}>15 a 25 minutos</strong> 
                  por sesión intentando resolver problemas técnicos que podrían diagnosticarse automáticamente."
                </p>
              </div>

              <div className="stat-row">
                <div className="stat-item reveal visible">
                  <div className="stat-number">67%</div>
                  <div className="stat-label">Docentes afectados</div>
                </div>
                <div className="stat-item reveal visible">
                  <div className="stat-number">23 min</div>
                  <div className="stat-label">Tiempo perdido/clase</div>
                </div>
                <div className="stat-item reveal visible">
                  <div className="stat-number">89%</div>
                  <div className="stat-label">Fallas evitables</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
