import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Sun } from 'lucide-react';

const Home = () => {
    return (
        <div>
            <section style={{
                padding: '8rem 0',
                background: 'linear-gradient(135deg, var(--light-green) 0%, #fff 100%)',
                borderRadius: '0 0 40px 40px',
                marginBottom: '4rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                        Bring Life into Your Space
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#4a7c59', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
                        Yashodare Nursery offers a curated selection of exotic and native plants.
                        Grown with love, ready for your home.
                    </p>
                    <Link to="/catalog" className="btn" style={{ fontSize: '1.1rem', padding: '15px 35px' }}>
                        Explore Collection <ArrowRight size={20} style={{ verticalAlign: 'text-bottom', marginLeft: '8px' }} />
                    </Link>
                </div>
            </section>

            <div className="container" style={{ marginBottom: '6rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>The Yashodare Difference</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}><Star size={40} /></div>
                        <h3 style={{ marginBottom: '1rem' }}>Hand-Picked Quality</h3>
                        <p style={{ color: '#666' }}>We select only the healthiest plants to ensure they thrive in your care.</p>
                    </div>
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}><Heart size={40} /></div>
                        <h3 style={{ marginBottom: '1rem' }}>Grown with Love</h3>
                        <p style={{ color: '#666' }}>Our plants are nurtured in optimal environments before finding their new home.</p>
                    </div>
                    <div className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}><Sun size={40} /></div>
                        <h3 style={{ marginBottom: '1rem' }}>Expert Guidance</h3>
                        <p style={{ color: '#666' }}>Get detailed care instructions and support for every plant you purchase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
