import { useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerExpired(true);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>{timerStarted ? 'Stop' : 'Start'}Start Challenge</button>{' '}
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is Running...' : 'Timer inactive'}
            </p>
        </section>
    );
}
