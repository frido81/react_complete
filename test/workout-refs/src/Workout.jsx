import { useState, useRef } from "react";

export default function Workout({ title, description, time, onComplete }) {
  const [clockFace, setClockFace] = useState(time);

  const timer = useRef();

  let stopWatch = useRef(time);

  function handleStartWorkout() {
    // Todo: Start timer
    timer.current = setInterval(() => {
      stopWatch.current = stopWatch.current - 1000;
      setClockFace(stopWatch.current);
      if (stopWatch.current <= 0) {
        handleStopWorkout();
      }
    }, 1000);
  }

  /*
    function handleStartWorkout() {
    // Todo: Start timer
        timer.current = setInterval(() => {
      setStopWatch((stopWatch) => stopWatch - 1000);
    }, 1000);
  }
  */

  function handleStopWorkout() {
    // Todo: Stop timer
    clearInterval(timer.current);
    onComplete();
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      {/* <p>{time}</p> */}
      {/* <p>{clockFace}</p> */}
      <p>{new Date(clockFace).toISOString().slice(11, 19)} </p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
