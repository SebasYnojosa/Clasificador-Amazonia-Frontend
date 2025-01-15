import React from 'react';

const Footer: React.FC = () => {
    return (
        <div style={{ position: 'fixed', 
                        bottom: '0', 
                        width: '100%', 
                        backgroundColor: '#f1f1f1', 
                        textAlign: 'center', 
                        padding: '10px 0',
                        fontFamily: 'Work Sans, serif',
                        fontOpticalSizing: 'auto',
                        fontWeight: 500,
                        fontStyle: 'bold' 
                    }}>
            <p>© 2025 Universidad Católica Andrés Bello. Todos los derechos reservados.</p>
        </div>
    );
};

export default Footer;