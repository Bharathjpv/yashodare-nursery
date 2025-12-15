import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            padding: '1.5rem 0',
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--primary-color)', fontFamily: 'var(--font-heading)' }}>
                    <img src="/logo1.png" alt="Yashodare Nursery" style={{ height: '50px', width: 'auto' }} />
                    Yashodare Nursery
                </Link>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/catalog" className="nav-link">Catalog</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
