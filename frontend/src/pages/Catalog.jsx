import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlants } from '../api';
import { ArrowRight } from 'lucide-react';

const Catalog = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPlants = async () => {
            const data = await fetchPlants();
            setPlants(data);
            setLoading(false);
        };
        getPlants();
    }, []);

    if (loading) return (
        <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Loading our green friends...</div>
        </div>
    );

    return (
        <div className="container" style={{ padding: '4rem 20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Collection</h1>
                <p style={{ color: '#666' }}>Find the perfect plant for your space</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem' }}>
                {plants.map(plant => (
                    <Link to={`/plants/${plant.id}`} key={plant.id} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '350px', overflow: 'hidden', backgroundColor: '#f4f4f4', position: 'relative' }}>
                            {plant.image_url ?
                                <img
                                    src={`http://localhost:8000${plant.image_url}`}
                                    alt={plant.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                /> :
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>No Image</div>
                            }
                        </div>
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem', color: '#999' }}>Plant</div>
                            <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem' }}>{plant.name}</h3>
                            <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.5' }}>
                                {plant.description.substring(0, 100)}...
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                                <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>${plant.price}</span>
                                <span style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600' }}>
                                    View Details <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {plants.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
                    No plants found. Please check back later.
                </div>
            )}
        </div>
    );
};

export default Catalog;
