import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';

interface PaginaResultadoProps {
    image: string | ArrayBuffer | null;
}

const PaginaResultado: React.FC<PaginaResultadoProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { image, result } = location.state || {};

    const handleBackClick = () => {
        navigate('/');
    };

    const result_count = result ? Object.entries(result) : [];

    return (
        <>
            <Header />
            <div style={{ padding: '16px', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 8rem 8rem 8rem' }}>
                <h2>Resultados de la Clasificación</h2>
                {image && <img src={image as string} alt="Uploaded" style={{ marginTop: '16px', maxWidth: '224px', maxHeight: '224px', border: '2px solid #000', marginBottom: '2rem' }} />}
                <p>Aquí se mostrarán los resultados de la clasificación de la imagen.</p>
                <div style={{ textAlign: 'left', display: 'inline-block', marginTop: '16px' }}>
                    {result_count.length === 1 ? (
                        <p>Estamos ante un <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{result_count[0][1]}</span>.</p>
                    ) : (
                        <ul>
                            {result_count.reverse().map(([key, value]) => (
                                <li key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{marginRight: '3rem', fontWeight: 'bold'}}>{key}:</span> 
                                    <span>{value} de pertenencia.</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <Button onClick={handleBackClick}>Volver</Button>
            </div>
            <Footer />
        </>
    );
};

export default PaginaResultado;