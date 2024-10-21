// src/components/ArtDisplay.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ArtDisplay = () => {
    const { prompt } = useParams();
    const [imageData, setImageData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8000/generate-art/${encodeURIComponent(prompt)}/`)
            .then(response => response.json())
            .then(data => {
                setImageData(data.image_data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching art:', err);
                setError('Failed to fetch art');
                setLoading(false);
            });
    }, [prompt]);

    return (
        <div>
            <h1>Art generated from prompt: {prompt}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : imageData ? (
                <img src={`data:image/png;base64,${imageData}`} alt="Generated Art" />
            ) : (
                <p>{error || 'No image to display'}</p>
            )}
        </div>
    );
};
