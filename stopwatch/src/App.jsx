// import React, { useState} from "react";
// import "./App.css";

// const App = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [timer, setTimer] = useState(null);

//   // Starts the stopwatch
//   const startWatch = () => {
//     if (timer) clearInterval(timer); // Clear existing interval
//     setTimer(
//       setInterval(() => {
//         setSeconds((prevSeconds) => {
//           if (prevSeconds + 1 === 60) {
//             setMinutes((prevMinutes) => {
//               if (prevMinutes + 1 === 60) {
//                 setHours((prevHours) => prevHours + 1); // Increment hours
//                 return 0; // Reset minutes to 0
//               }
//               return prevMinutes + 1;
//             });
//             return 0; // Reset seconds to 0
//           }
//           return prevSeconds + 1;
//         });
//       }, 1000)
//     );
//   };

//   // Stops the stopwatch
//   const stopWatch = () => {
//     clearInterval(timer);
//     setTimer(null);
//   };

//   // Resets the stopwatch
//   const resetWatch = () => {
//     clearInterval(timer);
//     setTimer(null);
//     setSeconds(0);
//     setMinutes(0);
//     setHours(0);
//   };

//   // Format time
//   const formatTime = (value) => (value < 10 ? `0${value}` : value);

//   return (
//     <div className="stopwatch">
//       <h1>{`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`}</h1>
//       <div className="buttons">
//         <button onClick={startWatch}>Start</button>
//         <button onClick={stopWatch}>Stop</button>
//         <button onClick={resetWatch}>Reset</button>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import Stopwatch from './Stopwatch'

const App = () => {
  return (
    <div><Stopwatch /></div>
  )
}

export default App
