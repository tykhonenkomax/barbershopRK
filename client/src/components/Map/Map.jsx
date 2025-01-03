import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Spinner from '../Spinner/Spinner';
import { images } from '../../constants';
import { useDispatch } from 'react-redux';
import { showLoader } from '../../reducers/loaderReducer';

const Map = () => {
    const dispatch = useDispatch();
    console.log('process.env.REACT_APP_GOOGLE_MAPS_API_KEY', process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) {
        dispatch(showLoader())
        return <Spinner />
    }

    const center = { lat: 49.847, lng: 24.001 };
    const options = {
        mapId: "48f18686503295ae",
        disableDefaultUI: true,
        clickableIcons: false,
    }

    return (
        <>
            <GoogleMap
                zoom={16}
                center={center}
                mapContainerStyle={{ width: "100%", height: "100%" }}
                options={options}
            >
                <Marker
                    position={center}
                    icon={{
                        url: images.logo,
                        scaledSize: new window.google.maps.Size(50, 50)
                    }}
                />
            </GoogleMap>
        </>
    )
}

export default Map;

