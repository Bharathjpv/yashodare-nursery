import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import PlantDetail from './pages/PlantDetail';
import About from './pages/About';
import Contact from './pages/Contact';

import { Phone, Mail } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plants/:id" element={<PlantDetail />} />
          </Routes>
        </div>
        <footer style={{
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border-subtle)',
          marginTop: 'auto'
        }} className="section-padding">
          <div className="container text-center">
            <h2 style={{
              marginBottom: '1rem',
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary)'
            }}>Yashodare Nursery</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Cultivating nature for your home.</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                  <Phone size={20} />
                  <span>+91 6363794454</span>
                </div>
                <a href="https://wa.me/916363794454" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  color: '#ffffff', textDecoration: 'none',
                  backgroundColor: '#25D366', padding: '10px 20px',
                  borderRadius: '50px', fontWeight: '600',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.95 7.05a1 1 0 0 0-1.41 0l-3.54 3.54a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 0 0 1.41 0l3.54-3.54a1 1 0 0 0 0-1.41z"></path><path d="M8 12h.01"></path><path d="M12 16h.01"></path></svg>
                  WhatsApp
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                <Mail size={20} />
                <a href="mailto:yashodarenursery@gmail.com" style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>yashodarenursery@gmail.com</a>
              </div>
            </div>

            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              &copy; {new Date().getFullYear()} Yashodare Nursery. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
