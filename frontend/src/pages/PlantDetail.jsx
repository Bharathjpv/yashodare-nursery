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
        <div className="container section-padding text-center">
            <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: '500' }}>Fetching detailed care info...</div>
        </div>
    );

    if (!plant) return <div className="container section-padding text-center">Plant not found</div>;

    return (
        <div className="container section-padding animate-fade-up" style={{ maxWidth: '1200px' }}>
            <Link to="/catalog" className="hover-lift" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '3rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-sm)'
            }}>
                <ArrowLeft size={20} /> Back to Catalog
            </Link>

            <div className="grid-responsive" style={{ gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem' }}>
                {/* To apply the 2 col properly when wide */}
                <style>{`
                    @media (min-width: 900px) {
                        .detail-grid { grid-template-columns: 1fr 1fr; align-items: start; }
                        .sticky-img { position: sticky; top: 120px; }
                    }
                `}</style>

                <div className="grid-responsive detail-grid" style={{ display: 'grid', gap: '4rem' }}>
                    <div className="sticky-img">
                        <div className="card-premium" style={{ marginBottom: '1.5rem' }}>
                            {plant.image_urls && plant.image_urls.length > 0 ? (
                                <img
                                    src={`${API_URL}${selectedImage || plant.image_urls[0]}`}
                                    alt={plant.name}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        transition: 'opacity 0.5s ease',
                                        aspectRatio: '4/5',
                                        objectFit: 'cover'
                                    }}
                                />
                            ) : (
                                <div style={{
                                    padding: '5rem 3rem',
                                    textAlign: 'center',
                                    color: 'var(--text-secondary)',
                                    fontSize: '1.1rem'
                                }}>No Image Available</div>
                            )}
                        </div>

                        {plant.image_urls && plant.image_urls.length > 1 && (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                                {plant.image_urls.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedImage(img)}
                                        className="hover-lift"
                                        style={{
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            border: selectedImage === img || (!selectedImage && idx === 0) ? '2px solid var(--color-primary)' : '2px solid var(--border-subtle)',
                                            opacity: selectedImage === img || (!selectedImage && idx === 0) ? 1 : 0.6,
                                            aspectRatio: '1',
                                            backgroundColor: 'var(--bg-card)'
                                        }}
                                    >
                                        <img
                                            src={`${API_URL}${img}`}
                                            alt={`${plant.name} view ${idx + 1}`}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 5vw, 4rem)',
                            marginBottom: '0.5rem'
                        }}>{plant.name}</h1>
                        <p style={{
                            fontSize: '1.4rem',
                            color: 'var(--text-secondary)',
                            fontStyle: 'italic',
                            marginBottom: '3rem',
                        }}>{plant.scientific_name}</p>

                        <div className="card-premium" style={{
                            marginBottom: '3rem',
                            padding: '2.5rem',
                            background: 'var(--color-box-bg-green)',
                            borderColor: 'var(--color-box-border-green)'
                        }}>
                            <p style={{
                                color: 'var(--color-box-text-green)',
                                marginBottom: '1.5rem',
                                fontSize: '1.2rem',
                                fontWeight: '600'
                            }}>
                                To order and get price details, please contact us on WhatsApp:
                            </p>
                            <a href="https://wa.me/916363794454" target="_blank" rel="noopener noreferrer" className="btn-premium hover-lift" style={{
                                padding: '14px 28px', backgroundColor: '#25D366', background: '#25D366', color: '#fff'
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}><circle cx="12" cy="12" r="10"></circle><path d="M16.95 7.05a1 1 0 0 0-1.41 0l-3.54 3.54a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 0 0 1.41 0l3.54-3.54a1 1 0 0 0 0-1.41z"></path><path d="M8 12h.01"></path><path d="M12 16h.01"></path></svg>
                                Inquire on WhatsApp
                            </a>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>About this plant</h3>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.15rem',
                                lineHeight: '1.8',
                            }}>{plant.description}</p>
                        </div>

                        {plant.product_description && plant.product_description.length > 0 && (
                            <div style={{ marginBottom: '4rem' }}>
                                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Product Features</h3>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {plant.product_description.map((item, idx) => (
                                        <li key={idx} style={{
                                            marginBottom: '1rem',
                                            paddingLeft: '2rem',
                                            position: 'relative',
                                            color: 'var(--text-secondary)',
                                            fontSize: '1.1rem',
                                            lineHeight: '1.6'
                                        }}>
                                            <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.5rem' }}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div className="card-premium" style={{
                                background: 'var(--color-box-bg-green)',
                                padding: '2.5rem',
                                borderColor: 'var(--color-box-border-green)'
                            }}>
                                <h3 style={{
                                    color: 'var(--color-box-text-green)',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontSize: '1.6rem'
                                }}>
                                    <div style={{ background: 'var(--color-box-border-green)', padding: '8px', borderRadius: '50%', display: 'flex' }}>
                                        <Check size={24} color="var(--color-box-text-green)" />
                                    </div>
                                    Plant Do's
                                </h3>
                                <ul style={{ listStyle: 'none' }}>
                                    {plant.dos.map((item, idx) => (
                                        <li key={idx} style={{
                                            marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'baseline',
                                            color: 'var(--color-box-text-green)', fontSize: '1.05rem', lineHeight: '1.6'
                                        }}>
                                            <span style={{ fontSize: '1.5rem' }}>•</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-premium" style={{
                                background: 'var(--color-box-bg-red)',
                                padding: '2.5rem',
                                borderColor: 'var(--color-box-border-red)'
                            }}>
                                <h3 style={{
                                    color: 'var(--color-box-text-red)',
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    fontSize: '1.6rem'
                                }}>
                                    <div style={{ background: 'var(--color-box-border-red)', padding: '8px', borderRadius: '50%', display: 'flex' }}>
                                        <X size={24} color="var(--color-box-text-red)" />
                                    </div>
                                    Plant Don'ts
                                </h3>
                                <ul style={{ listStyle: 'none' }}>
                                    {plant.donts.map((item, idx) => (
                                        <li key={idx} style={{
                                            marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'baseline',
                                            color: 'var(--color-box-text-red)', fontSize: '1.05rem', lineHeight: '1.6'
                                        }}>
                                            <span style={{ fontSize: '1.5rem' }}>•</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetail;
