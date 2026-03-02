import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container section-padding animate-fade-up" style={{ maxWidth: '1000px' }}>
            <div className="text-center" style={{ marginBottom: '5rem' }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 4rem)',
                    marginBottom: '1.5rem'
                }}>Contact <span className="text-gradient">Us</span></h1>
                <p style={{
                    fontSize: '1.3rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '700px',
                    margin: '0 auto',
                    lineHeight: '1.8'
                }}>We'd love to hear from you. Get in touch via Phone, WhatsApp or Email.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>

                <div className="card-premium hover-lift" style={{
                    width: '100%',
                    maxWidth: '650px',
                    padding: '2.5rem',
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <div className="flex-center" style={{
                        background: 'var(--color-box-bg-green)',
                        padding: '24px',
                        borderRadius: '50%',
                        color: 'var(--color-primary)',
                        flexShrink: 0,
                        border: '1px solid var(--color-box-border-green)'
                    }}>
                        <Phone size={42} />
                    </div>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <h3 style={{ marginBottom: '0.75rem', fontSize: '1.6rem' }}>Phone & WhatsApp</h3>
                        <a href="tel:+916363794454" style={{
                            display: 'block',
                            fontSize: '1.4rem',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '1.25rem'
                        }}>
                            +91 6363794454
                        </a>

                        <a href="https://wa.me/916363794454" target="_blank" rel="noopener noreferrer" className="btn-premium" style={{
                            padding: '12px 24px', backgroundColor: '#25D366', background: '#25D366'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}><circle cx="12" cy="12" r="10"></circle><path d="M16.95 7.05a1 1 0 0 0-1.41 0l-3.54 3.54a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 0 0 1.41 0l3.54-3.54a1 1 0 0 0 0-1.41z"></path><path d="M8 12h.01"></path><path d="M12 16h.01"></path></svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div className="card-premium hover-lift" style={{
                    width: '100%',
                    maxWidth: '650px',
                    padding: '2.5rem',
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    <div className="flex-center" style={{
                        background: 'var(--color-box-bg-green)',
                        padding: '24px',
                        borderRadius: '50%',
                        color: 'var(--color-primary)',
                        flexShrink: 0,
                        border: '1px solid var(--color-box-border-green)'
                    }}>
                        <Mail size={42} />
                    </div>
                    <div style={{ flex: 1, minWidth: '250px' }}>
                        <h3 style={{ marginBottom: '0.75rem', fontSize: '1.6rem' }}>Email</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontSize: '1.15rem' }}>Send us your queries anytime.</p>
                        <a href="mailto:yashodarenursery@gmail.com" style={{
                            fontSize: '1.3rem',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            wordBreak: 'break-all',
                        }}>
                            yashodarenursery@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="glass-panel text-center" style={{
                marginTop: '6rem',
                padding: '4rem',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, var(--color-box-bg-green) 0%, var(--bg-card) 100%)',
                border: '1px solid var(--color-box-border-green)'
            }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>We're Here to Help</h2>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                    Whether you have questions about plant care, need recommendations, or want to place an order, our team is ready to assist you.
                </p>
            </div>
        </div>
    );
};

export default Contact;
