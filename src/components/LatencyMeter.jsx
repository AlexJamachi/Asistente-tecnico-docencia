import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle, RefreshCcw } from 'lucide-react';

export default function LatencyMeter() {
  const [latency, setLatency] = useState(45);
  const [history, setHistory] = useState(Array(15).fill(45));

  useEffect(() => {
    const interval = setInterval(() => {
      // Simular latencia realista con picos ocasionales
      const isSpike = Math.random() > 0.85;
      let newLat = latency + (Math.random() * 20 - 10);
      if (isSpike) newLat += Math.random() * 120 + 40;
      
      newLat = Math.max(12, Math.min(newLat, 350));
      newLat = Math.round(newLat);

      setLatency(newLat);
      setHistory(prev => [...prev.slice(1), newLat]);
    }, 2000);
    return () => clearInterval(interval);
  }, [latency]);

  const getStatusInfo = () => {
    if (latency < 80) return { 
      text: "Estable", 
      color: "var(--accent-green, #00ff88)", 
      icon: <CheckCircle size={20} color="var(--accent-green, #00ff88)" />, 
      rec: "Conexión óptima. Tu videollamada debería fluir sin interrupciones." 
    };
    if (latency < 150) return { 
      text: "Moderada", 
      color: "var(--accent-cyan, #00e5ff)", 
      icon: <Activity size={20} color="var(--accent-cyan, #00e5ff)" />, 
      rec: "Latencia aceptable, pero considera cerrar otras aplicaciones o descargas en segundo plano." 
    };
    return { 
      text: "Crítica", 
      color: "#ff4d4d", 
      icon: <AlertTriangle size={20} color="#ff4d4d" />, 
      rec: "Latencia muy alta. Posibles cortes de audio/video. Recomendamos acercarte a tu router o usar cable de red (Ethernet)." 
    };
  };

  const status = getStatusInfo();
  const maxLat = Math.max(...history, 100);

  return (
    <div style={{
      background: "var(--bg-card, #111827)", 
      border: `1px solid ${status.color}`, 
      borderRadius: "16px", 
      padding: "24px", 
      maxWidth: "500px", 
      margin: "40px auto", 
      color: "var(--text-primary, #e2e8f0)",
      boxShadow: `0 8px 30px ${status.color}20`,
      transition: "all 0.5s ease"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.2rem", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
          <Activity size={20} color={status.color} /> Latencia de Red
        </h3>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted, #64748b)", display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(255,255,255,0.05)", padding: "4px 10px", borderRadius: "20px" }}>
          <RefreshCcw size={12} /> Tiempo real
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
        <span style={{ fontFamily: "'Orbitron', monospace", fontSize: "3rem", fontWeight: "bold", color: status.color, textShadow: `0 0 15px ${status.color}50` }}>
          {latency}<span style={{ fontSize: "1.2rem", color: "var(--text-muted, #64748b)", marginLeft: "4px", textShadow: "none" }}>ms</span>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "1.1rem", fontWeight: "600", color: status.color, background: `${status.color}15`, padding: "6px 12px", borderRadius: "8px" }}>
          {status.icon} {status.text}
        </div>
      </div>

      {/* Mini Gráfico de Barras */}
      <div style={{ height: "70px", display: "flex", alignItems: "flex-end", gap: "4px", margin: "24px 0" }}>
        {history.map((val, i) => {
          const barColor = val > 150 ? "#ff4d4d" : val > 80 ? "var(--accent-cyan, #00e5ff)" : "var(--accent-green, #00ff88)";
          return (
            <div key={i} style={{ 
              flex: 1, 
              background: barColor,
              height: `${Math.max(5, (val / maxLat) * 100)}%`,
              borderRadius: "3px 3px 0 0",
              transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s",
              opacity: i === history.length - 1 ? 1 : 0.6
            }}></div>
          );
        })}
      </div>

      {/* Recomendación Dinámica */}
      <div style={{ background: "rgba(0,0,0,0.3)", padding: "16px", borderRadius: "10px", borderLeft: `4px solid ${status.color}` }}>
        <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-secondary, #94a3b8)", lineHeight: 1.5 }}>
          <strong style={{ color: "var(--text-primary, #e2e8f0)", display: "block", marginBottom: "4px" }}>💡 Sugerencia del Asistente:</strong> 
          {status.rec}
        </p>
      </div>
    </div>
  );
}
