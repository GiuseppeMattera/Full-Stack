import { useState, useEffect } from 'react';

const useCurrentLocation = () => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getCurrentLocation = () => {
        setLoading(true);
        setError(null);

        navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                setLoading(false);
            }
        );
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return {
        location,
        getCurrentLocation,
        loading,
        error
    };
};

export default useCurrentLocation;