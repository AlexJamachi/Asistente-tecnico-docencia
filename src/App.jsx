import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import Analysis from './pages/Analysis';
import Research from './pages/Research';
import Proposal from './pages/Proposal';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentacion" element={<Presentation />} />
        <Route path="/analisis" element={<Analysis />} />
        <Route path="/investigacion" element={<Research />} />
        <Route path="/propuesta" element={<Proposal />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
