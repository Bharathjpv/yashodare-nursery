import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPlantDetail, API_URL } from '../api';
import { Check, X, ArrowLeft } from 'lucide-react';

const PlantDetail = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const getPlant = async () => {
            const data = await fetchPlantDetail(id);
            setPlant(data);
            setLoading(false);
        };
        getPlant();
    }, [id]);

    if (loading) return (
        <div className="container section-padding" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Fetching detailed care info...</div>
        </div>
    );

    if (!plant) return <div className="container section-padding">Plant not found</div>;

    return (
        <div className="container section-padding" style={{ maxWidth: '1100px' }}>
            <Link to="/catalog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', color: '#666', fontWeight: 500, transition: 'color 0.2s' }}>
                <ArrowLeft size={18} /> Back to Catalog
            </Link>

            <div className="grid-2-col">
                <div className="sticky-desktop">
                    <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(45, 106, 79, 0.15)', backgroundColor: '#fff', marginBottom: '1rem' }}>
                        {plant.image_urls && plant.image_urls.length > 0 ? (
                            <img src={`${API_URL}${selectedImage || plant.image_urls[0]}`} alt={plant.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        ) : (
                            <div style={{ padding: '2rem', textAlign: 'center', color: '#999' }}>No Image Available</div>
                        )}
                    </div>

                    {plant.image_urls && plant.image_urls.length > 1 && (
                        <div className="grid-thumbnail">
                            {plant.image_urls.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    style={{
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        border: selectedImage === img || (!selectedImage && idx === 0) ? '2px solid var(--primary-color)' : '2px solid transparent',
                                        opacity: selectedImage === img || (!selectedImage && idx === 0) ? 1 : 0.7,
                                        transition: 'all 0.2s',
                                        aspectRatio: '1'
                                    }}
                                >
                                    <img src={`${API_URL}${img}`} alt={`${plant.name} view ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '0.5rem', lineHeight: 1.1 }}>{plant.name}</h1>
                    <p style={{ fontSize: '1.2rem', color: '#888', fontStyle: 'italic', marginBottom: '2rem', fontFamily: 'serif' }}>{plant.scientific_name}</p>

                    <div style={{ marginBottom: '2.5rem', background: '#f0fdf4', padding: '1.5rem', borderRadius: '16px', border: '1px solid #dcfce7' }}>
                        <p style={{ color: '#166534', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '500' }}>
                            To order and get price details, please contact us on WhatsApp:
                        </p>
                        <a href="https://wa.me/916363794454" target="_blank" rel="noopener noreferrer" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#25D366', color: '#fff' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.95 7.05a1 1 0 0 0-1.41 0l-3.54 3.54a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 0 0 1.41 0l3.54-3.54a1 1 0 0 0 0-1.41z"></path><path d="M8 12h.01"></path><path d="M12 16h.01"></path></svg>
                            Inquire on WhatsApp
                        </a>
                    </div>

                    <div style={{ marginBottom: '3.5rem' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>About this plant</h3>
                        <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>{plant.description}</p>
                    </div>

                    {plant.product_description && plant.product_description.length > 0 && (
                        <div style={{ marginBottom: '3.5rem' }}>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Product Description</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {plant.product_description.map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative', color: '#555', fontSize: '1.05rem' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--secondary-color)', fontWeight: 'bold' }}>•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div className="card-padding" style={{ background: '#f0fff4', borderRadius: '20px', border: '1px solid #dcfce7' }}>
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

                        <div className="card-padding" style={{ background: '#fff1f2', borderRadius: '20px', border: '1px solid #ffe4e6' }}>
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
