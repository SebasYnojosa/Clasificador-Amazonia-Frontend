import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';

interface PaginaCargaProps {
    image: string | ArrayBuffer | null;
    setImage: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
}

const PaginaCarga: React.FC<PaginaCargaProps> = ({ image, setImage }) => {
    const [fileName, setFileName] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        handleClearClick();
    }, []);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClearClick = () => {
        setImage(null);
        setImageFile(null);
        setFileName('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleAnalyzeClick = async () => {
        if (!imageFile) return;

        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await fetch('http://localhost:3000/predict', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to analyze image');
            }

            const result = await response.json();
            console.log(result);



            // Redirigir a la página de resultados
            navigate('/resultado', { state: { image, result } });
        } catch (error) {
            console.error('There was a problem with the fetch operation', error);
        }
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
                        accept=".jpg,.jpeg,.png"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                    <Button onClick={() => fileInputRef.current?.click()}>Elegir Imagen</Button>
                </label>
                {fileName && <p>{fileName}</p>}
                {image && <img src={image as string} alt="Uploaded" style={{ marginTop: '16px', maxWidth: '224px', maxHeight: '224px' }} />}
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button onClick={handleClearClick}>Limpiar</Button>
                    <Button onClick={handleAnalyzeClick}>Analizar</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PaginaCarga;