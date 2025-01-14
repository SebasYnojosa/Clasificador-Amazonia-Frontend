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

    return (
        <>
            <Header />
            <div style={{ padding: '16px', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 8rem 8rem 8rem' }}>
                <h2>Resultados de la Clasificación</h2>
                {image && <img src={image as string} alt="Uploaded" style={{ marginTop: '16px', maxWidth: '224px', maxHeight: '224px' }} />}
                <p>Aquí se mostrarán los resultados de la clasificación de la imagen.</p>
                <div style={{ textAlign: 'left', display: 'inline-block', marginTop: '16px' }}>
                    {result && Object.entries(result).map(([key, value]) => (
                        <p>Estamos ante un  <span style={{ textTransform: 'capitalize' }}>{value}</span></p>
                    ))}
                </div>
                <Button onClick={handleBackClick}>Volver</Button>
            </div>
            <Footer />
        </>
    );
};

export default PaginaResultado;