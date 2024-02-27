import { useState, useEffect } from 'react'
import Places from './Places.jsx';


export default function AvailablePlaces({ onSelectPlace }) {
    const [isFetching, setIsFetching] = useState(false);
    const [availablePlaces, setAvailablePlaces] = useState([])

    useEffect(() => {
        setIsFetching(true);
        fetch('https://notepad.zolder.org:3001/places')
            .then((response) => {
                return response.json()
            })
            .then((resData) => {
                console.log("got available places")
                setAvailablePlaces(resData.places)
            })
        setIsFetching(false);
    }, []);

    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            isLoading={isFetching}
            loadingText="Fetching places"
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
}
