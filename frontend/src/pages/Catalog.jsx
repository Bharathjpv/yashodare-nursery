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

    // Filter plants based on search term
    const filteredPlants = plants.filter(plant =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get suggestions based on search term
    const suggestions = plants
        .filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(plant => plant.name)
        .slice(0, 5);

    if (loading) return (
        <div className="container section-padding" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Loading our green friends...</div>
        </div>
    );

    return (
        <div className="container section-padding">
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3rem)', marginBottom: '1rem' }}>Our Collection</h1>
                <p style={{ color: 'var(--text-muted)' }}>Find the perfect plant for your space</p>
            </header>

            {/* Search Bar */}
            <div style={{ maxWidth: '600px', margin: '0 auto 4rem', position: 'relative' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Search size={20} style={{ position: 'absolute', left: '1rem', color: 'var(--text-muted)' }} />
                    <input
                        type="text"
                        placeholder="Search for plants..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        style={{
                            width: '100%',
                            padding: '1rem 1rem 1rem 3rem',
                            borderRadius: '50px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--input-bg)',
                            color: 'var(--text-dark)',
                            fontSize: '1.1rem',
                            outline: 'none',
                            boxShadow: '0 4px 6px var(--card-shadow)',
                            transition: 'all 0.3s ease'
                        }}
                    />
                </div>

                {showSuggestions && searchTerm && suggestions.length > 0 && (
                    <ul style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        background: 'var(--card-bg)',
                        borderRadius: '16px',
                        boxShadow: '0 10px 25px var(--card-shadow)',
                        zIndex: 10,
                        marginTop: '0.5rem',
                        listStyle: 'none',
                        overflow: 'hidden',
                        border: '1px solid var(--border-color)'
                    }}>
                        {suggestions.map((name, idx) => (
                            <li
                                key={idx}
                                onClick={() => {
                                    setSearchTerm(name);
                                    setShowSuggestions(false);
                                }}
                                className="suggestion-item"
                                style={{
                                    padding: '1rem 1.5rem',
                                    cursor: 'pointer',
                                    borderBottom: idx === suggestions.length - 1 ? 'none' : '1px solid var(--border-color)',
                                    textAlign: 'left',
                                    color: 'var(--text-dark)'
                                }}
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                {filteredPlants.map(plant => (
                    <Link to={`/plants/${plant.id}`} key={plant.id} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '300px', overflow: 'hidden', backgroundColor: 'var(--light-green)', position: 'relative' }}>
                            {plant.image_url ?
                                <img
                                    src={`${API_URL}${plant.image_url}`}
                                    alt={plant.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                /> :
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>No Image</div>
                            }
                        </div>
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>Plant</div>
                            <h3 style={{ marginBottom: '0.8rem', fontSize: '1.4rem', color: 'var(--primary-color)' }}>{plant.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.5' }}>
                                {plant.description.substring(0, 100)}...
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                <span style={{ fontSize: '0.9rem', color: 'var(--secondary-color)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '600' }}>
                                    View Details <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredPlants.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                    {searchTerm ? `No plants found matching "${searchTerm}"` : 'No plants found. Please check back later.'}
                </div>
            )}
        </div>
    );
};

export default Catalog;
