import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlantDetail } from '../api';
import { Check, X, ArrowLeft } from 'lucide-react';

const PlantDetail = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPlant = async () => {
            const data = await fetchPlantDetail(id);
            setPlant(data);
            setLoading(false);
        };
        getPlant();
    }, [id]);

    if (loading) return (
        <div className="container" style={{ padding: '6rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Fetching detailed care info...</div>
        </div>
    );

    if (!plant) return <div className="container" style={{ padding: '4rem' }}>Plant not found</div>;

    return (
        <div className="container" style={{ padding: '4rem 20px', maxWidth: '1100px' }}>
            <Link to="/catalog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', color: '#666', fontWeight: 500, transition: 'color 0.2s' }}>
                <ArrowLeft size={18} /> Back to Catalog
            </Link>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                <div style={{ position: 'sticky', top: '100px' }}>
                    <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(45, 106, 79, 0.15)', backgroundColor: '#fff' }}>
                        {plant.image_url && <img src={`http://localhost:8000${plant.image_url}`} alt={plant.name} style={{ width: '100%', height: 'auto', display: 'block' }} />}
                    </div>
                </div>

                <div>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', lineHeight: 1.1 }}>{plant.name}</h1>
                    <p style={{ fontSize: '1.2rem', color: '#888', fontStyle: 'italic', marginBottom: '2rem', fontFamily: 'serif' }}>{plant.scientific_name}</p>

                    <div style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        ${plant.price}
                        <button className="btn" style={{ fontSize: '1rem', padding: '10px 25px' }}>Add to Cart</button>
                    </div>

                    <div style={{ marginBottom: '3.5rem' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>About this plant</h3>
                        <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>{plant.description}</p>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ background: '#f0fff4', padding: '2.5rem', borderRadius: '20px', border: '1px solid #dcfce7' }}>
                            <h3 style={{ color: '#166534', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.4rem' }}>
                                <div style={{ background: '#dcfce7', padding: '8px', borderRadius: '50%', display: 'flex' }}><Check size={20} color="#166534" /></div>
                                Plant Do's
                            </h3>
                            <ul style={{ listStyle: 'none' }}>
                                {plant.dos.map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '1rem', paddingLeft: '0.5rem', position: 'relative', display: 'flex', gap: '10px', alignItems: 'baseline', color: '#14532d' }}>
                                        <span>•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ background: '#fff1f2', padding: '2.5rem', borderRadius: '20px', border: '1px solid #ffe4e6' }}>
                            <h3 style={{ color: '#9f1239', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.4rem' }}>
                                <div style={{ background: '#ffe4e6', padding: '8px', borderRadius: '50%', display: 'flex' }}><X size={20} color="#9f1239" /></div>
                                Plant Don'ts
                            </h3>
                            <ul style={{ listStyle: 'none' }}>
                                {plant.donts.map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '1rem', paddingLeft: '0.5rem', position: 'relative', display: 'flex', gap: '10px', alignItems: 'baseline', color: '#881337' }}>
                                        <span>•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetail;
