import React, { useEffect } from 'react';

export default function Proposal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px', background: 'var(--bg-secondary)', minHeight: '100vh' }}>
      <section className="propuesta" style={{ background: 'transparent' }}>
        <div className="container">
          <div className="reveal visible" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Propuesta</div>
            <h2 className="section-title">El Asistente en Acción</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Un script de diagnóstico que el docente ejecuta antes o durante la clase, 
              obteniendo un reporte completo con soluciones sugeridas en segundos.
            </p>
          </div>

          <div className="propuesta-content">
            {/* Dashboard Preview */}
            <div className="dashboard-preview reveal-left visible">
              <img src="assets/img/dashboard.png" alt="Dashboard del diagnóstico" />
              <div className="preview-label">● Objetivo visual de la aplicación</div>
            </div>

            {/* Benefits */}
            <div className="reveal-right visible">
              <ul className="benefits-list">
                <li className="benefit-item">
                  <div className="benefit-icon">⚡</div>
                  <div>
                    <div className="benefit-title">Soluciones Rápidas</div>
                    <div className="benefit-desc">
                      Diagnóstico completo en menos de 30 segundos con recomendaciones 
                      accionables para cada problema detectado.
                    </div>
                  </div>
                </li>
                <li className="benefit-item">
                  <div className="benefit-icon">⏱️</div>
                  <div>
                    <div className="benefit-title">Ahorro de Tiempo</div>
                    <div className="benefit-desc">
                      Reducción drástica del tiempo perdido por fallas técnicas, 
                      recuperando minutos valiosos de clase.
                    </div>
                  </div>
                </li>
                <li className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div>
                    <div className="benefit-title">Facilidad de Uso</div>
                    <div className="benefit-desc">
                      Interfaz intuitiva con colores y barras de progreso. 
                      Un solo clic para ejecutar el diagnóstico completo.
                    </div>
                  </div>
                </li>
                <li className="benefit-item">
                  <div className="benefit-icon">🔒</div>
                  <div>
                    <div className="benefit-title">Sin Dependencias Externas</div>
                    <div className="benefit-desc">
                      Funciona completamente offline, sin enviar datos a servidores externos. 
                      100% privacidad del equipo del docente.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Comparison Chart */}
          <div className="chart-section reveal visible" style={{ marginTop: '80px' }}>
            <h3 className="section-title" style={{ textAlign: "center" }}>Impacto Estadístico: Antes vs. Después del Asistente</h3>
            
            <div className="chart-container" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Background Grid for realism */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '100% 40px',
                pointerEvents: 'none',
                opacity: 0.5,
                zIndex: 0
              }}></div>

              <div className="chart-wrapper" style={{ position: 'relative', zIndex: 1 }}>
                
                <div className="chart-bar-group">
                  <div className="chart-bars">
                    <div className="chart-bar before" style={{ height: '72%', background: 'linear-gradient(to top, rgba(239, 68, 68, 0.4), rgba(239, 68, 68, 0.9))' }}>
                      <span className="bar-value">18 min</span>
                    </div>
                    <div className="chart-bar after" style={{ height: '16%', background: 'linear-gradient(to top, rgba(0, 255, 136, 0.4), rgba(0, 255, 136, 0.9))' }}>
                      <span className="bar-value">4 min</span>
                    </div>
                  </div>
                  <span className="chart-bar-label">Tiempo Perdido<br/>por Sesión</span>
                </div>

                <div className="chart-bar-group">
                  <div className="chart-bars">
                    <div className="chart-bar before" style={{ height: '62%', background: 'linear-gradient(to top, rgba(239, 68, 68, 0.4), rgba(239, 68, 68, 0.9))' }}>
                      <span className="bar-value">62%</span>
                    </div>
                    <div className="chart-bar after" style={{ height: '15%', background: 'linear-gradient(to top, rgba(0, 255, 136, 0.4), rgba(0, 255, 136, 0.9))' }}>
                      <span className="bar-value">15%</span>
                    </div>
                  </div>
                  <span className="chart-bar-label">Docentes con<br/>Interrupciones</span>
                </div>

                <div className="chart-bar-group">
                  <div className="chart-bars">
                    <div className="chart-bar before" style={{ height: '45%', background: 'linear-gradient(to top, rgba(239, 68, 68, 0.4), rgba(239, 68, 68, 0.9))' }}>
                      <span className="bar-value">45%</span>
                    </div>
                    <div className="chart-bar after" style={{ height: '88%', background: 'linear-gradient(to top, rgba(0, 255, 136, 0.4), rgba(0, 255, 136, 0.9))' }}>
                      <span className="bar-value">88%</span>
                    </div>
                  </div>
                  <span className="chart-bar-label">Nivel de<br/>Satisfacción</span>
                </div>

                <div className="chart-bar-group">
                  <div className="chart-bars">
                    <div className="chart-bar before" style={{ height: '12%', background: 'linear-gradient(to top, rgba(239, 68, 68, 0.4), rgba(239, 68, 68, 0.9))' }}>
                      <span className="bar-value">12%</span>
                    </div>
                    <div className="chart-bar after" style={{ height: '85%', background: 'linear-gradient(to top, rgba(0, 255, 136, 0.4), rgba(0, 255, 136, 0.9))' }}>
                      <span className="bar-value">85%</span>
                    </div>
                  </div>
                  <span className="chart-bar-label">Problemas<br/>Resueltos a tiempo</span>
                </div>

              </div>
              <div className="chart-legend" style={{ position: 'relative', zIndex: 1, marginTop: '40px' }}>
                <div className="legend-item"><span className="legend-dot red" style={{boxShadow: '0 0 10px rgba(239,68,68,0.5)'}}></span>Metodología Tradicional</div>
                <div className="legend-item"><span className="legend-dot green" style={{boxShadow: '0 0 10px rgba(0,255,136,0.5)'}}></span>Con el Asistente Técnico</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
