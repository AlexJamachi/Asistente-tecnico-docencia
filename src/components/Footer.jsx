import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" style={{ padding: "40px 0", borderTop: "1px solid var(--border-color)", background: "var(--bg-primary)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="logo-icon" style={{ width: "32px", height: "32px", fontSize: "0.85rem", borderRadius: "8px" }}>⚡</div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              <span>Asistente Técnico</span> — Proyecto de Informática 2026 | Desarrollado por Alex Jamachi
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="mailto:alexjamachi2.c@gmail.com" style={{ color: "var(--accent-cyan)", textDecoration: "none", fontSize: "0.9rem" }}>✉ alexjamachi2.c@gmail.com</a>
            <a href="https://wa.me/59175851971" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-green)", textDecoration: "none", fontSize: "0.9rem" }}>💬 WhatsApp (+591 75851971)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
