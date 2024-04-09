import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  /*
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL SET", timer);
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Cleaning up interval");
      clearInterval(interval);
    };
  }, []);
  */

  useEffect(() => {
    let startTime;
    let rafID;

    function loop(currentTime) {
      const deltaTime = currentTime - startTime || 0;
      setRemainingTime((prevRemainingTime) => prevRemainingTime - deltaTime);
      startTime = currentTime;
      rafID = requestAnimationFrame(loop);
    }

    rafID = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafID);
  }, []);
  return <progress value={remainingTime} max={timer} />;
}
