import { useState, useRef, forwardRef } from 'react';

import ResultModal from './ResultModal.jsx';

// shared betwee all components
// let timer;

export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timer = useRef();
    const dialog = useRef();

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart() {
        console.log('started timer, for', targetTime);
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
        // setTimerStarted(true);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}></ResultModal>
            <section className="challenge">
                <h2>{title}</h2>
                {/* {timerExpired && <p>You lost!</p>} */}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>{' '}
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is Running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}
