import React from "react";
import Info from "../components/Info";

import { useState, useEffect } from 'react';
import '../index.css';




const FrontPage = () => {

    const [length, setLength] = useState(0)
    const [quizdata , setQuizdata] =useState([])
    const [isLoading, setLoading] = useState(true);
    const [num, setNum] = useState(1);
    
    useEffect(() => {
        fetch('http://localhost:3001/api')
        .then((response) => response.json())
        .then((json) => {
            setQuizdata(json)
            setLength(Object.keys(quizdata).length)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    }, []);


  //Properties 

  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);


  //Helper functions

  //possible answer was clicked

  const optionClicked = () => {
    setNum(num + 1)
    if (currentQuestion + 1 < length) {
      setCurrentQuestion(currentQuestion + 1);
    } 
    else {
      setShowThankYouMessage(true);
    }
  };

  //Go back to start
  const restart = () => {
    setCurrentQuestion(0);
    setShowThankYouMessage(false);
    setNum(1)
  };


//Show next question & options when button is clicked
//After last question is answered, show thank you message
  return (
    <div className = "App">
     

      <Info text="Dear member of our staff, this survey is completely anonymous. We ask for answers only to measure the well-being of our staff." />
      {isLoading ? ( <p>Loading...</p> ) : (

      <div>
      { showThankYouMessage ? ( 
        /* Thank you at the end */
        <div className='question-card'>
            <h1>Thank you!</h1>
            <button className='btn' onClick={() => restart()}>Back to beginning</button>
        </div>

      ) : (
        
        <div className='question-card'>

        <h2>Question: {num} </h2>
        <h1 className='question-text'>{quizdata[currentQuestion].text}</h1>

        <ul>
         {quizdata[currentQuestion].options.map((option) => {
          return (
            <li 
            key={option.id}
            onClick={() => optionClicked()}>
              {option.text}
            </li>
          );
         })
        }
        </ul>

        </div>

      )}
      </div>
    )}
    </div>
  );
}

export default FrontPage;