import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Sun } from 'lucide-react';

const Home = () => {
    return (
        <div>
            <section style={{
                padding: '6rem 0',
                background: 'linear-gradient(135deg, var(--light-green) 0%, var(--off-white) 100%)',
                borderRadius: '0 0 40px 40px',
                marginBottom: '4rem',
                textAlign: 'center'
            }} className="section-padding">
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                        Bring Life into Your Space
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--secondary-color)', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                        Yashodare Nursery offers a curated selection of exotic and native plants.
                        Grown with love, ready for your home.
                    </p>
                    <Link to="/catalog" className="btn" style={{ fontSize: '1.1rem', padding: '15px 35px' }}>
                        Explore Collection <ArrowRight size={20} style={{ verticalAlign: 'text-bottom', marginLeft: '8px' }} />
                    </Link>
                </div>
            </section>

            <div className="container" style={{ marginBottom: '6rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--primary-color)' }}>The Yashodare Difference</h2>
                <div className="grid-responsive">
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}><Star size={40} /></div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Hand-Picked Quality</h3>
                        <p style={{ color: 'var(--text-muted)' }}>We select only the healthiest plants to ensure they thrive in your care.</p>
                    </div>
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}><Heart size={40} /></div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Grown with Love</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Our plants are nurtured in optimal environments before finding their new home.</p>
                    </div>
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}><Sun size={40} /></div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Expert Guidance</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Get detailed care instructions and support for every plant you purchase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
