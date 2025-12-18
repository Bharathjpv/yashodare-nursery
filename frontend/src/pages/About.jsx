import React from 'react';
import { Leaf, Award, Users, Sprout } from 'lucide-react';

const About = () => {
    return (
        <div className="container section-padding" style={{ maxWidth: '1000px' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>About Yashodare Nursery</h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                    Cultivating a greener future, one plant at a time. We are passionate about bringing the beauty and tranquility of nature into your homes and lives.
                </p>
            </div>

            <div className="grid-responsive" style={{ marginBottom: '5rem' }}>
                <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <div style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}><Leaf size={40} /></div>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--primary-color)' }}>Our Mission</h3>
                    <p style={{ color: 'var(--text-dark)', opacity: 0.9, lineHeight: '1.7' }}>
                        To provide the highest quality plants while educating our community on sustainable gardening practices. We believe everyone deserves a green sanctuary.
                    </p>
                </div>
                <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <div style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}><Award size={40} /></div>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--primary-color)' }}>Our Quality</h3>
                    <p style={{ color: 'var(--text-dark)', opacity: 0.9, lineHeight: '1.7' }}>
                        Every plant in our nursery is hand-picked and nurtured by experts. We guarantee healthy, pest-free plants that are ready to thrive in your care.
                    </p>
                </div>
                <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <div style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}><Users size={40} /></div>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--primary-color)' }}>Community</h3>
                    <p style={{ color: 'var(--text-dark)', opacity: 0.9, lineHeight: '1.7' }}>
                        We are more than a shop; we are a community of plant lovers. We offer information, advice, and ongoing support to help you become a confident gardener.
                    </p>
                </div>
                <div style={{ padding: '2rem', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <div style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}><Sprout size={40} /></div>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--primary-color)' }}>Our Promise</h3>
                    <p style={{ color: 'var(--text-dark)', opacity: 0.9, lineHeight: '1.7' }}>
                        Your gardening happiness is our promise. From helping you choose the right plants to offering ongoing after-care support, we’re with you throughout your gardening journey.
                    </p>
                </div>
            </div>

            <div style={{ background: 'var(--light-green)', padding: '3rem', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '2rem', flexDirection: 'column', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--text-dark)' }}>Visit Our Nursery</h2>
                <p style={{ fontSize: '1.1rem', maxWidth: '600px' }}>
                    Come experience the lush greenery in person. Walk through our greenhouses and find your perfect plant match.
                </p>
            </div>
        </div>
    );
};

export default About;
