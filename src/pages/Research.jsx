import React, { useEffect } from 'react';

export default function Research() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px', minHeight: '100vh' }}>
      <section className="investigacion">
        <div className="container">
          <div className="investigacion-grid">
            {/* Code Blocks */}
            <div className="code-blocks reveal-left visible">
              {/* Code Block 1: psutil */}
              <div className="code-block">
                <div className="code-header">
                  <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <span className="filename">diagnostico_ram.py</span>
                </div>
                <div className="code-body">
                  <span className="line-num"> 1</span> <span className="keyword">import</span> <span className="variable">psutil</span><br/>
                  <span className="line-num"> 2</span><br/>
                  <span className="line-num"> 3</span> <span className="keyword">def</span> <span className="function">diagnosticar_ram</span>():<br/>
                  <span className="line-num"> 4</span>     <span className="comment"># Obtener métricas de memoria RAM</span><br/>
                  <span className="line-num"> 5</span>     mem = <span className="variable">psutil</span>.virtual_memory()<br/>
                  <span className="line-num"> 6</span>     <span className="keyword">return</span> {'{'}<br/>
                  <span className="line-num"> 7</span>         <span className="string">"total"</span>:    mem.total <span className="operator">//</span> (<span className="number">1024</span> ** <span className="number">3</span>),<br/>
                  <span className="line-num"> 8</span>         <span className="string">"usado"</span>:    mem.used <span className="operator">//</span> (<span className="number">1024</span> ** <span className="number">3</span>),<br/>
                  <span className="line-num"> 9</span>         <span className="string">"porcentaje"</span>: mem.percent,<br/>
                  <span className="line-num">10</span>         <span className="string">"estado"</span>:  <span className="string">"CRÍTICO"</span> <span className="keyword">if</span> mem.percent <span className="operator">{'>'}</span> <span className="number">85</span><br/>
                  <span className="line-num">11</span>                    <span className="keyword">else</span> <span className="string">"OK"</span><br/>
                  <span className="line-num">12</span>     {'}'}
                </div>
              </div>

              {/* Code Block 2: WMI */}
              <div className="code-block">
                <div className="code-header">
                  <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <span className="filename">diagnostico_red.py</span>
                </div>
                <div className="code-body">
                  <span className="line-num"> 1</span> <span className="keyword">import</span> <span className="variable">subprocess</span>, <span className="variable">re</span><br/>
                  <span className="line-num"> 2</span><br/>
                  <span className="line-num"> 3</span> <span className="keyword">def</span> <span className="function">medir_latencia</span>(host=<span className="string">"8.8.8.8"</span>):<br/>
                  <span className="line-num"> 4</span>     <span className="comment"># Ejecutar ping vía WMI/subprocess</span><br/>
                  <span className="line-num"> 5</span>     result = <span className="variable">subprocess</span>.run(<br/>
                  <span className="line-num"> 6</span>         [<span className="string">"ping"</span>, <span className="string">"-n"</span>, <span className="string">"4"</span>, host],<br/>
                  <span className="line-num"> 7</span>         capture_output=<span className="keyword">True</span>, text=<span className="keyword">True</span><br/>
                  <span className="line-num"> 8</span>     )<br/>
                  <span className="line-num"> 9</span>     avg = <span className="variable">re</span>.search(<span className="string">r"Media = (\d+)ms"</span>,<br/>
                  <span className="line-num">10</span>                     result.stdout)<br/>
                  <span className="line-num">11</span>     latencia = <span className="keyword">int</span>(avg.group(<span className="number">1</span>)) <span className="keyword">if</span> avg<br/>
                  <span className="line-num">12</span>                 <span className="keyword">else</span> <span className="number">-1</span><br/>
                  <span className="line-num">13</span>     <span className="keyword">return</span> {'{'}<br/>
                  <span className="line-num">14</span>         <span className="string">"latencia_ms"</span>: latencia,<br/>
                  <span className="line-num">15</span>         <span className="string">"estado"</span>: <span className="string">"ALTO"</span> <span className="keyword">if</span> latencia <span className="operator">{'>'}</span> <span className="number">150</span><br/>
                  <span className="line-num">16</span>                   <span className="keyword">else</span> <span className="string">"NORMAL"</span><br/>
                  <span className="line-num">17</span>     {'}'}
                </div>
              </div>

              {/* Code Image */}
              <div className="code-image-section">
                <img src="assets/img/code.png" alt="Entorno de desarrollo" />
              </div>
            </div>

            {/* Info Panel */}
            <div className="investigacion-info reveal-right visible">
              <div className="section-label">Investigación</div>
              <h2 className="section-title">APIs de Sistema y Métricas en Tiempo Real</h2>
              <p className="section-desc">
                La investigación se centró en las APIs nativas del sistema operativo Windows 
                y librerías de Python para extraer métricas de rendimiento en tiempo real, 
                sin necesidad de software de terceros costoso.
              </p>

              <ul className="tech-list">
                <li>
                  <div className="tech-icon">🐍</div>
                  <div>
                    <div className="tech-name">psutil (Python)</div>
                    <div className="tech-desc">Librería multiplataforma para monitoreo de CPU, RAM, disco y procesos del sistema.</div>
                  </div>
                </li>
                <li>
                  <div className="tech-icon">⚙️</div>
                  <div>
                    <div className="tech-name">WMI (Windows)</div>
                    <div className="tech-desc">Infraestructura de administración de Windows para consultar hardware, drivers y servicios.</div>
                  </div>
                </li>
                <li>
                  <div className="tech-icon">📡</div>
                  <div>
                    <div className="tech-name">speedtest-cli</div>
                    <div className="tech-desc">Medición automatizada de velocidad de descarga, subida y latencia de red.</div>
                  </div>
                </li>
                <li>
                  <div className="tech-icon">📊</div>
                  <div>
                    <div className="tech-name">Rich (Terminal UI)</div>
                    <div className="tech-desc">Framework de interfaz en terminal con barras de progreso, tablas y reportes con colores.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
