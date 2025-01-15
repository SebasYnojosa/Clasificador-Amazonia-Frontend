import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            style={{
                width: '100%',
                maxWidth: '224px',
                marginTop: '16px',
                padding: '8px 32px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#FF6D33',
                color: '#FFF',
                cursor: 'pointer'
            }}
        >
            {children}
        </button>
    );
};

export default Button;