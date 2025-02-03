import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
                setPhotos(response.data);
            } catch (err) {
                setError('Error fetching data.');
                console.error("Error fetching photos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    if (loading) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-8">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
                <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={photo.thumbnailUrl} alt={photo.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{photo.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PhotoList;