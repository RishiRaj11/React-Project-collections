import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../data.js';
const Quiz = () => {
    let [showScoreScreen, setShowScoreScreen] = useState(false);
    let [index,setIndex]=useState(0);
    let [question,setQuestion]=useState(data[index]);
    let [score,setScore]=useState(0)
    let [lock,setLock]=useState(false)
    let Option1=useRef(null)
    let Option2=useRef(null)
    let Option3=useRef(null)
    let Option4=useRef(null)
    let optionArray=[Option1,Option2,Option3,Option4]
    const nextHandler=()=>{
        if(!showScoreScreen){
            setLock(false)
            setIndex(++index);
            setQuestion(data[index]);
            optionArray.map((option)=>{
                option.current.classList.remove("correct")
                option.current.classList.remove("incorrect")
            })

        }
        if(index===data.length){
            setShowScoreScreen(true)

        }

    }
    const startQuiz=()=>{
        setShowScoreScreen(false);
        setIndex(0);
        setQuestion(data[0])
        setScore(0)

    }
    const checkAns=(e,ans)=>{
       if(!lock){
        if(question.ans===ans){
            e.target.classList.add('correct');
            setLock(true)
            setScore((prev)=>prev+1)
        }else{
            e.target.classList.add('incorrect');
            optionArray[question.ans-1].current.classList.add("correct");
            setLock(true)
        }
       }

    }
    return (
        <div className='container' >

            <h1>Quiz app</h1>
            <hr />
            {
                showScoreScreen ? <>
                    <h2>{`Your score is ${score} out of ${data.length}`}</h2>
                    <button onClick={startQuiz} >Play Again</button>
                </> : <>
                    <h2>{`${index+1}. ${question.question}`}</h2>
                    <ul>
                        <li  ref={Option1} onClick={(e)=>checkAns(e,1)} >{question.option1}</li>
                        <li  ref={Option2} onClick={(e)=>checkAns(e,2)}  >{question.option2}</li>
                        <li ref={Option3} onClick={(e)=>checkAns(e,3)}  >{question.option3}</li>
                        <li ref={Option4} onClick={(e)=>checkAns(e,4)}  >{question.option4}</li>
                    </ul>
                    <button onClick={nextHandler} >Next</button>
                    <div className='index' >{` question ${index+1} of ${data.length}`}</div>
                </>
            }
        </div>
    )
}

export default Quiz;