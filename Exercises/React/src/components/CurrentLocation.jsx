import React from 'react';
import useCurrentLocation from "../hook/useCurrentLocation";

const CurrentLocation = () => {
    const { location, getCurrentLocation, loading, error } = useCurrentLocation();

    return (
        <div className="mt-12">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {location && (
                <div>
                    <p>Latitude: {location.latitude}</p>
                    <p>Longitude: {location.longitude}</p>
                </div>
            )}
            <button className='mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 
                focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2' 
                onClick={getCurrentLocation}>
                    Get Current Location
            </button>
        </div>
    );
};

export default CurrentLocation;