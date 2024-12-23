import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Spinner from '../Spinner/Spinner';
import { images } from '../../constants';
import { useDispatch } from 'react-redux';
import { showLoader } from '../../reducers/loaderReducer';

const Map = () => {
    const dispatch = useDispatch();
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDcxws3-WKSFzehqORgDO14sAbhkw_SpSg",
    })

    if (!isLoaded) {
        dispatch(showLoader())
        return <Spinner />
    }

    const center = { lat: 32.9337813, lng: 35.0796916 };
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
                <Marker position={center} icon={{ url: images.marker_img, width: "20", height: "20" }} />
            </GoogleMap>
        </>
    )
}

export default Map;

