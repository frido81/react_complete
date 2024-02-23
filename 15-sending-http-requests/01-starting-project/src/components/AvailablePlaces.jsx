import { useState, useEffect } from 'react'
import Places from './Places.jsx';


export default function AvailablePlaces({ onSelectPlace }) {
    const [availablePlaces, setAvailablePlaces] = useState([])

    useEffect(() => {
        fetch('https://notepad.zolder.org:3001/places')
            .then((response) => {
                return response.json()
            })
            .then((resData) => {
                console.log("got available places")
                setAvailablePlaces(resData.places)
            })
    }, []);

    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
}
