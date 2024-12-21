import React from 'react'

const Watch = () => {
    const startStopWatch=()=>{

    }
    const stopStopWatch=()=>{

    }
    const resetStopWatch=()=>{

    }
    
  return (
    <div className='stopwatch-container'>
    <h1>00:00:00</h1>
    <div className='buttons'> 
        <button onClick={startStopWatch} >Start</button>
        <button onClick={stopStopWatch}>Stop</button>
        <button onClick={resetStopWatch}>Reset</button>
    </div>

    </div>
  )
}

export default Watch;