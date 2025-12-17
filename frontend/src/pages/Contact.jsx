import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container section-padding" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Contact Us</h1>
                <p style={{ fontSize: '1.2rem', color: '#666' }}>We'd love to hear from you. Get in touch via Phone, WhatsApp or Email.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>

                <div style={{ width: '100%', maxWidth: '500px', background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', gap: '1.5rem', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <div style={{ background: 'var(--light-green)', padding: '16px', borderRadius: '50%', color: 'var(--primary-color)', flexShrink: 0 }}>
                        <Phone size={32} />
                    </div>
                    <div>
                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>Phone & WhatsApp</h3>
                        <a href="tel:+916363794454" style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>+91 6363794454</a>

                        <a href="https://wa.me/916363794454" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#25D366', fontWeight: '600', fontSize: '1rem', background: '#eafbf0', padding: '6px 14px', borderRadius: '20px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.95 7.05a1 1 0 0 0-1.41 0l-3.54 3.54a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 0 0 1.41 0l3.54-3.54a1 1 0 0 0 0-1.41z"></path><path d="M8 12h.01"></path><path d="M12 16h.01"></path></svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div style={{ width: '100%', maxWidth: '500px', background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', gap: '1.5rem', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <div style={{ background: 'var(--light-green)', padding: '16px', borderRadius: '50%', color: 'var(--primary-color)', flexShrink: 0 }}>
                        <Mail size={32} />
                    </div>
                    <div>
                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>Email</h3>
                        <p style={{ color: '#666', marginBottom: '0.5rem' }}>Send us your queries anytime.</p>
                        <a href="mailto:yashodarenursery@gmail.com" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary-color)', wordBreak: 'break-all' }}>yashodarenursery@gmail.com</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
