import React, { useState, useEffect, useRef } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Total elapsed time in seconds
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null); // Use `useRef` for interval (better performance)

  // Format time in HH:MM:SS
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return [hours, minutes, seconds]
      .map((unit) => String(unit).padStart(2, "0"))
      .join(":");
  };

  // Start Stopwatch
  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Stop Stopwatch
  const stopStopwatch = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  // Reset Stopwatch
  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Clear interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="stopwatch-container">
      <h1>{formatTime(time)}</h1>
      <div className="buttons">
        <button onClick={startStopwatch} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopStopwatch} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
