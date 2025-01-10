import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';

interface PaginaCargaProps {
    image: string | ArrayBuffer | null;
    setImage: (image: string | ArrayBuffer | null) => void;
}

const PaginaCarga: React.FC<PaginaCargaProps> = ({ image, setImage }) => {
    const [fileName, setFileName] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClearClick = () => {
        setImage(null);
        setFileName('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleAnalyzeClick = () => {
        navigate('/resultado');
    };

    return (
        <div>
            <Header />
            <div style={{ padding: '16px', borderRadius: '8px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Elige una imagen para clasificarla</h2>
                <p style={{color: "#f00"}}>La imagen tiene que estar en el formato .jpg, .jpeg o .png para que funcione el clasificador</p>
                <label htmlFor="file-upload" style={{ margin: '16px 0' }}>
                    <input
                        id="file-upload"
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                    <Button onClick={() => fileInputRef.current?.click()}>Choose File</Button>
                </label>
                {fileName && <p>{fileName}</p>}
                {image && <img src={image as string} alt="Uploaded" style={{ marginTop: '16px', maxWidth: '224px', maxHeight: '224px' }} />}
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button onClick={handleClearClick}>Clear</Button>
                    <Button onClick={handleAnalyzeClick}>Analizar</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PaginaCarga;