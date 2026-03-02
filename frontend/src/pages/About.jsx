import React from 'react';
import { Leaf, Award, Users, Sprout } from 'lucide-react';

const About = () => {
    return (
        <div className="container section-padding animate-fade-up" style={{ maxWidth: '1200px' }}>
            <div className="text-center" style={{ marginBottom: '5rem' }}>
                <h1 style={{
                    fontSize: 'clamp(2.8rem, 6vw, 4rem)',
                    marginBottom: '1.5rem',
                }}>About <span className="text-gradient">Yashodare Nursery</span></h1>
                <p style={{
                    fontSize: '1.3rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.9'
                }}>
                    Cultivating a greener future, one plant at a time. We are passionate about bringing the beauty and tranquility of nature into your homes and lives.
                </p>
            </div>

            <div className="grid-responsive" style={{ marginBottom: '6rem', gap: '2.5rem' }}>
                <div className="card-premium" style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
                    <div className="animate-float" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                        <Leaf size={56} />
                    </div>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.6rem' }}>Our Mission</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        To provide the highest quality plants while educating our community on sustainable gardening practices. We believe everyone deserves a green sanctuary.
                    </p>
                </div>

                <div className="card-premium" style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
                    <div className="animate-float" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', animationDelay: '0.5s' }}>
                        <Award size={56} />
                    </div>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.6rem' }}>Our Quality</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        Every plant in our nursery is hand-picked and nurtured by experts. We guarantee healthy, pest-free plants that are ready to thrive in your care.
                    </p>
                </div>

                <div className="card-premium" style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
                    <div className="animate-float" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', animationDelay: '1s' }}>
                        <Users size={56} />
                    </div>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.6rem' }}>Community</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        We are more than a shop; we are a community of plant lovers. We offer information, advice, and ongoing support to help you become a confident gardener.
                    </p>
                </div>

                <div className="card-premium" style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
                    <div className="animate-float" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', animationDelay: '1.5s' }}>
                        <Sprout size={56} />
                    </div>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.6rem' }}>Our Promise</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        Your gardening happiness is our promise. From helping you choose the right plants to offering ongoing after-care support, we’re with you throughout your gardening journey.
                    </p>
                </div>
            </div>

            <div className="glass-panel text-center" style={{
                padding: '5rem 2rem',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                flexDirection: 'column',
                background: 'linear-gradient(135deg, var(--color-box-bg-green) 0%, var(--bg-card) 100%)',
                border: '1px solid var(--color-box-border-green)'
            }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)' }}>Visit Our Nursery</h2>
                <p style={{ fontSize: '1.25rem', maxWidth: '700px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    Come experience the lush greenery in person. Walk through our greenhouses and find your perfect plant match.
                </p>
                <div style={{
                    marginTop: '2rem',
                    padding: '1.5rem 2.5rem',
                    background: 'var(--bg-card)',
                    borderRadius: '50px',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid var(--border-subtle)'
                }}>
                    <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--color-primary)' }}>
                        📍 Located in the heart of the city | Open daily from 8am to 8pm
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
