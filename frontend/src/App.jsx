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
        <footer style={{ backgroundColor: '#1B4332', color: '#ecfdf5', marginTop: 'auto' }} className="section-padding">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Yashodare Nursery</h2>
            <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Cultivating nature for your home.</p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem', fontSize: '1.1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={20} />
                  <span>+91 6363794454</span>
                </div>
                <a href="https://wa.me/916363794454" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ecfdf5', textDecoration: 'none', backgroundColor: '#25D366', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.95 7.05a1 1 0 0 0-1.41 0l-3.54 3.54a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 0 0 1.41 0l3.54-3.54a1 1 0 0 0 0-1.41z"></path><path d="M8 12h.01"></path><path d="M12 16h.01"></path></svg>
                  WhatsApp
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={20} />
                <a href="mailto:yashodarenursery@gmail.com" style={{ color: '#ecfdf5', textDecoration: 'underline', textUnderlineOffset: '4px' }}>yashodarenursery@gmail.com</a>
              </div>
            </div>

            <div style={{ fontSize: '0.9rem', opacity: 0.6 }}>
              &copy; {new Date().getFullYear()} Yashodare Nursery. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
