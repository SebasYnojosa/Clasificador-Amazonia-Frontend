import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';

interface PaginaResultadoProps {
    image: string | ArrayBuffer | null;
}

const PaginaResultado: React.FC<PaginaResultadoProps> = ({ image }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    // Ejemplo de resultados de análisis de IA
    const ModelPositiveResults = [
        'Yanomami: 95% de probabilidad',
        'Piaroa: 85% de probabilidad',
        'Pemones: 75% de probabilidad'
    ];

    const ModelNegativeResults = [
        'Se llego a la conclusión de que la/s persona/s imagen no pertenece a ninguna tribu de la Amazonia'
    ]

    return (
        <>
            <Header />
            <div style={{ padding: '16px', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '16rem' }}>
                <h2>Resultados de la Clasificación</h2>
                {image && <img src={image as string} alt="Uploaded" style={{ marginTop: '16px', maxWidth: '224px', maxHeight: '224px' }} />}
                <p>Aquí se mostrarán los resultados de la clasificación de la imagen.</p>
                <ul style={{ textAlign: 'left', display: 'inline-block', marginTop: '16px' }}>
                    {ModelPositiveResults.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
                <Button onClick={handleBackClick}>Volver</Button>
            </div>
            <Footer />
        </>
    );
};

export default PaginaResultado;