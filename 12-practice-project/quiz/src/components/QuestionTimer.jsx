import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("setting timeout");
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout])

    useEffect(() => {
        console.log("setting interval");
        setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100)
        }, 100);
    }, [])


    return <progress value={remainingTime} max={timeout} id="question-time" />
}