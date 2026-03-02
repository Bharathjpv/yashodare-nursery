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
        <nav className="glass-panel" style={{
            padding: '1.25rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid var(--border-subtle)',
            transition: 'all 0.4s ease',
        }}>
            <div className="container nav-content">
                <Link to="/" className="hover-lift" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontWeight: '700',
                    fontSize: '1.5rem',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-heading)',
                    textDecoration: 'none',
                }}>
                    <img src={logo} alt="Yashodare Nursery" style={{
                        height: '45px',
                        width: 'auto',
                        borderRadius: '8px',
                    }} />
                    <span>Yashodare Nursery</span>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                    {/* Desktop Links */}
                    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            style={{
                                color: 'var(--text-primary)',
                                fontWeight: '500',
                                fontSize: '1rem',
                                transition: 'color 0.3s ease',
                                padding: '0.5rem 0',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            style={{
                                color: 'var(--text-primary)',
                                fontWeight: '500',
                                fontSize: '1rem',
                                transition: 'color 0.3s ease',
                                padding: '0.5rem 0',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/catalog"
                            onClick={() => setIsOpen(false)}
                            style={{
                                color: 'var(--text-primary)',
                                fontWeight: '500',
                                fontSize: '1rem',
                                transition: 'color 0.3s ease',
                                padding: '0.5rem 0',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                        >
                            Catalog
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            style={{
                                color: 'var(--text-primary)',
                                fontWeight: '500',
                                fontSize: '1rem',
                                transition: 'color 0.3s ease',
                                padding: '0.5rem 0',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="hover-lift"
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--border-subtle)',
                                cursor: 'pointer',
                                color: 'var(--text-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '44px',
                                height: '44px',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                            }}
                            aria-label="Toggle dark mode"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                e.currentTarget.style.color = 'var(--color-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
