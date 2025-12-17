import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logo from '../assets/logo1.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{
            padding: '1rem 0',
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container nav-content">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 'bold', fontSize: '1.4rem', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
                    <img src={logo} alt="Yashodare Nursery" style={{ height: '40px', width: 'auto' }} />
                    Yashodare Nursery
                </Link>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop & Mobile Links */}
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to="/catalog" className="nav-link" onClick={() => setIsOpen(false)}>Catalog</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
