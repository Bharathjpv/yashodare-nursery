import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Sun } from 'lucide-react';
import { fetchPlants, API_URL } from '../api';

const Home = () => {
    const [featuredPlants, setFeaturedPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFeaturedPlants = async () => {
            try {
                const plants = await fetchPlants();
                setFeaturedPlants(plants.slice(0, 3));
            } catch (err) {
                console.error('Error fetching featured plants:', err);
                setError('Failed to load featured plants. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        getFeaturedPlants();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section style={{
                padding: '10rem 0 8rem 0',
                background: 'linear-gradient(to bottom right, rgba(2, 44, 34, 0.9), rgba(4, 120, 87, 0.8)), url("https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '6rem',
                color: 'white'
            }}>
                {/* Decorative elements */}
                <div
                    style={{
                        position: 'absolute', top: '-50%', right: '-20%', width: '80%', height: '200%',
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                        transform: 'rotate(45deg)', zIndex: 0
                    }} aria-hidden="true"
                ></div>
                <div
                    style={{
                        position: 'absolute', bottom: '-30%', left: '-10%', width: '60%', height: '150%',
                        background: 'radial-gradient(circle, rgba(52, 211, 153, 0.2) 0%, transparent 60%)',
                        transform: 'rotate(-30deg)', zIndex: 0
                    }} aria-hidden="true"
                ></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="text-center animate-fade-up" style={{ maxWidth: '850px', margin: '0 auto' }}>
                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                            marginBottom: '1.5rem',
                            color: '#FFFFFF',
                            textShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
                        }}>
                            Bring Life into Your Space
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                            color: '#F8FAFC',
                            maxWidth: '700px',
                            margin: '0 auto 3.5rem',
                            lineHeight: 1.8,
                            fontWeight: '400',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                        }}>
                            Yashodare Nursery offers a curated selection of exotic and native plants.
                            Grown with love, ready for your home.
                        </p>
                        <Link to="/catalog" className="btn-premium">
                            Explore Collection <ArrowRight size={22} style={{ marginLeft: '10px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Plants Section */}
            <div className="container" style={{ marginBottom: '8rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', marginBottom: '1rem' }}>
                        Featured Plants
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Discover our hand-picked selection of premium plants
                    </p>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '3rem' }}>
                        <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: '500' }}>
                            Loading our featured plants...
                        </div>
                    </div>
                ) : error ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-box-text-red)' }}>
                        <div style={{ fontSize: '1.2rem' }}>{error}</div>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {featuredPlants.map(plant => (
                            <Link to={`/plants/${plant.id}`} key={plant.id} className="card-premium" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ height: '300px', overflow: 'hidden', position: 'relative', backgroundColor: 'var(--color-box-bg-green)' }}>
                                    {plant.image_url ? (
                                        <img
                                            src={`${API_URL}${plant.image_url}`}
                                            alt={plant.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                        />
                                    ) : (
                                        <div className="flex-center" style={{ width: '100%', height: '100%', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: '700' }}>
                                        Featured Plant
                                    </div>
                                    <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem' }}>{plant.name}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem', flex: 1, lineHeight: '1.6' }}>
                                        {plant.description.substring(0, 110)}...
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
                                        <span style={{ fontSize: '1.05rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                                            View Details <ArrowRight size={18} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="text-center" style={{ marginTop: '4rem' }}>
                    <Link to="/catalog" className="btn-outline">
                        View All Plants <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="container" style={{ marginBottom: '8rem' }}>
                <h2 className="text-center" style={{
                    marginBottom: '4rem',
                    fontSize: 'clamp(2.5rem, 5vw, 3rem)'
                }}>
                    The <span className="text-gradient">Yashodare</span> Difference
                </h2>
                <div className="grid-responsive">
                    <div className="card-premium" style={{ padding: '3rem 2.5rem', textAlign: 'center', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}></div>
                        <div className="animate-float" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                            <Star size={56} />
                        </div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Hand-Picked Quality</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.1rem' }}>
                            We select only the healthiest plants to ensure they thrive in your care.
                        </p>
                    </div>

                    <div className="card-premium" style={{ padding: '3rem 2.5rem', textAlign: 'center', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}></div>
                        <div className="animate-float" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', animationDelay: '1s' }}>
                            <Heart size={56} />
                        </div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Grown with Love</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.1rem' }}>
                            Our plants are nurtured in optimal environments before finding their new home.
                        </p>
                    </div>

                    <div className="card-premium" style={{ padding: '3rem 2.5rem', textAlign: 'center', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}></div>
                        <div className="animate-float" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', animationDelay: '2s' }}>
                            <Sun size={56} />
                        </div>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Expert Guidance</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1.1rem' }}>
                            Get detailed care instructions and support for every plant you purchase.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
