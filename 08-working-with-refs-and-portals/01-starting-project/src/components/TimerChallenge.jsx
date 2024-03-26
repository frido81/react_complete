import { useState, useRef, forwardRef } from 'react';

import ResultModal from './ResultModal.jsx';

// shared betwee all components
// let timer;

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timer = useRef();
    const dialog = useRef();

    function handleStart() {
        console.log('started timer, for', targetTime);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"></ResultModal>
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>{' '}
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is Running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}
