import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

import logo from '../assets/logo1.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize theme from local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <nav style={{
            padding: '1rem 0',
            backgroundColor: 'var(--nav-bg)', // Use variable
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid var(--border-color)', // Use variable
            transition: 'background-color 0.3s ease, border-color 0.3s ease'
        }}>
            <div className="container nav-content">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 'bold', fontSize: '1.4rem', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
                    <img src={logo} alt="Yashodare Nursery" style={{ height: '40px', width: 'auto' }} />
                    <span style={{ color: 'var(--primary-color)' }}>Yashodare Nursery</span>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    {/* Desktop Links */}
                    <div className={`nav-links ${isOpen ? 'open' : ''}`} style={{ backgroundColor: isOpen ? 'var(--nav-bg)' : 'transparent' }}>
                        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-dark)' }}>Home</Link>
                        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-dark)' }}>About Us</Link>
                        <Link to="/catalog" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-dark)' }}>Catalog</Link>
                        <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: 'var(--text-dark)' }}>Contact Us</Link>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            style={{
                                background: 'var(--card-bg)',
                                border: '1px solid var(--border-color)',
                                cursor: 'pointer',
                                color: 'var(--text-dark)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                boxShadow: '0 2px 8px var(--card-shadow)',
                                transition: 'all 0.3s ease'
                            }}
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <Sun size={20} color="#ffd700" /> : <Moon size={20} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--primary-color)', marginLeft: '0.5rem' }}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
