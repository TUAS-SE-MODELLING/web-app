import React from "react";
import Info from "../components/Info";

import { useState, useEffect } from 'react';
import '../index.css';



const FrontPage = () => {

    // this is for how long quiz will run
    const [length, setLength] = useState(0)

    const [quizdata, setQuizdata] =useState([])
    const [isLoading, setLoading] = useState(true);

    // this is only to change questions number
    const [num, setNum] = useState(1);
    
    // here we will fetch quix data from server
    // set it to data state and take length of it
    // then when everything has completed we will set
    // loading to false which will allow us to see quiz
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetch('http://localhost:3001/currentQuiz')

        const json = await data.json();
        //console.log(json)

        setQuizdata(json)
        console.log(json)
        console.log(quizdata)
        
        console.log(quizdata.length)
        setLength(quizdata.length)
    
      }
        fetchData()
        .catch((error) => console.error(error))
        .finally(() => 
          setLoading(false));

    }, []);


  //Properties 

  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  

  const [answer, setAnswer] = useState([]);

  //Helper functions

  //possible answer was clicked

  const optionClicked = (data) => {

    setNum(num + 1)
   
    setAnswer([
        ...answer,
        {question: quizdata[currentQuestion].text, value: data}
    ]);
    
    //console.log(currentQuestion)
    //console.log(length)
    if (currentQuestion + 1 < length) {
      setCurrentQuestion(currentQuestion + 1);

    } 
    else {
        
        setShowThankYouMessage(true);
        fetch('http://localhost:3001/answer', {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                answer})
        });
        
    }
    
  };
  
  
  //Go back to start
  const restart = () => {
    
    setCurrentQuestion(0);
    setShowThankYouMessage(false);
    setNum(1)
    setAnswer([])
  };

// if survey is finished, results are send server
/*if (showThankYouMessage){
    sendResults()
}*/


//Show next question & options when button is clicked
//After last question is answered, show thank you message
  return (
    <div className = "App">
     

      <Info text="Dear member of our staff, this survey is completely anonymous. We ask for answers only to measure the well-being of our staff." />

      {/*While fetchin data*/}
      {isLoading ? ( <p>Loading...</p> ) : (

        
      <div>
      {/*checks if quiz has completed*/}
      { showThankYouMessage ? (
        /* Thank you at the end */
        <div className='question-card'>
            <h1>Thank you!</h1>
            <button className='btn' onClick={() => restart()}>Back to beginning</button>
        </div>

      ) : (
        
        <div className='question-card'>
        {/*displays questions one by one*/}
        <h2>Question: {num} </h2>
        <h1 className='question-text'>{quizdata[currentQuestion].text}</h1>

        <ul>  
         {quizdata[currentQuestion].options.map((option) => {
          return (
            <li 
            key={option.id}
            onClick={() => optionClicked(option.text)}>
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