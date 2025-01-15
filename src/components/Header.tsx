import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ 
            width: '100%', 
            backgroundColor: '#f1f1f1',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            color: '#000', 
            padding: '10px 0', 
            textAlign: 'center',
            fontFamily: 'Work Sans, serif',
            fontOpticalSizing: 'auto',
            fontWeight: 900,
            fontStyle: 'bold'
        }}>
            <h1>Clasificador de imágenes de tribus de la Amazonia</h1>
        </header>
    );
};

export default Header;