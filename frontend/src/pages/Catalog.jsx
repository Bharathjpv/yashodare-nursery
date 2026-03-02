import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPlants, API_URL } from '../api';
import { ArrowRight, Search } from 'lucide-react';

const Catalog = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    useEffect(() => {
        const getPlants = async () => {
            const data = await fetchPlants();
            setPlants(data);
            setLoading(false);
        };
        getPlants();
    }, []);

    const filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const suggestions = plants
        .filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(plant => plant.name)
        .slice(0, 5);

    if (loading) return (
        <div className="container section-padding text-center">
            <div style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: '500' }}>Loading our green friends...</div>
        </div>
    );

    return (
        <div className="container section-padding animate-fade-up">
            <header className="text-center" style={{ marginBottom: '4rem' }}>
                <h1 style={{
                    fontSize: 'clamp(2.8rem, 6vw, 3.8rem)',
                    marginBottom: '1rem',
                }}>Our <span className="text-gradient">Collection</span></h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>Find the perfect plant for your space</p>
            </header>

            {/* Search Bar */}
            <div style={{ maxWidth: '600px', margin: '0 auto 5rem', position: 'relative' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Search size={24} style={{ position: 'absolute', left: '1.5rem', color: 'var(--text-secondary)' }} />
                    <input
                        type="text"
                        placeholder="Search for plants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={(e) => {
                            setShowSuggestions(true);
                        }}
                        onBlur={(e) => {
                            setTimeout(() => setShowSuggestions(false), 200);
                        }}
                        style={{
                            width: '100%',
                            padding: '1.25rem 1.25rem 1.25rem 4rem',
                            borderRadius: '50px',
                            border: '2px solid var(--border-subtle)',
                            backgroundColor: 'var(--bg-card)',
                            color: 'var(--text-primary)',
                            fontSize: '1.1rem',
                            outline: 'none',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'all 0.3s ease',
                            fontFamily: 'var(--font-body)'
                        }}
                        onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onMouseLeave={(e) => { if (document.activeElement !== e.target) e.target.style.borderColor = 'var(--border-subtle)'; }}
                    />
                </div>

                {showSuggestions && searchTerm && suggestions.length > 0 && (
                    <ul style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'var(--bg-card)',
                        borderRadius: '20px',
                        boxShadow: 'var(--shadow-lg)',
                        zIndex: 10,
                        marginTop: '0.75rem',
                        listStyle: 'none',
                        overflow: 'hidden',
                        border: '1px solid var(--border-subtle)'
                    }}>
                        {suggestions.map((name, idx) => (
                            <li
                                key={idx}
                                onClick={() => {
                                    setSearchTerm(name);
                                    setShowSuggestions(false);
                                }}
                                style={{
                                    padding: '1.25rem 1.5rem',
                                    cursor: 'pointer',
                                    borderBottom: idx === suggestions.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                                    textAlign: 'left',
                                    color: 'var(--text-primary)',
                                    transition: 'all 0.3s ease',
                                    fontSize: '1.05rem'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = 'var(--color-box-bg-green)';
                                    e.target.style.color = 'var(--color-box-text-green)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = 'var(--text-primary)';
                                }}
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
                {filteredPlants.map(plant => (
                    <Link to={`/plants/${plant.id}`} key={plant.id} className="card-premium" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{
                            height: '320px',
                            overflow: 'hidden',
                            backgroundColor: 'var(--color-box-bg-green)',
                            position: 'relative'
                        }}>
                            {plant.image_url ?
                                <img
                                    src={`${API_URL}${plant.image_url}`}
                                    alt={plant.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.6s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                /> :
                                <div className="flex-center" style={{ width: '100%', height: '100%', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>No Image</div>
                            }
                        </div>
                        <div style={{
                            padding: '2rem',
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                marginBottom: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                fontSize: '0.8rem',
                                color: 'var(--color-primary)',
                                fontWeight: '700'
                            }}>Plant</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem' }}>{plant.name}</h3>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1.05rem',
                                marginBottom: '2rem',
                                flex: 1,
                                lineHeight: '1.6'
                            }}>
                                {plant.description.substring(0, 110)}...
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                marginTop: 'auto',
                                borderTop: '1px solid var(--border-subtle)',
                                paddingTop: '1.5rem'
                            }}>
                                <span style={{
                                    fontSize: '1.05rem',
                                    color: 'var(--color-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontWeight: '600'
                                }}>
                                    View Details <ArrowRight size={18} />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredPlants.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                    {searchTerm ? `No plants found matching "${searchTerm}"` : 'No plants found. Please check back later.'}
                </div>
            )}
        </div>
    );
};

export default Catalog;
