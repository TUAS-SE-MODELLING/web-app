import React, { useState } from 'react';
import '../index.css';
import Info from '../components/Info';
import currentQuestionnare from '../json/currentQuestionnare.json';



const FrontPage = () => {

  //Properties 

  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // How many questions are in json
  const dataLength = Object.keys(currentQuestionnare).length

  //Helper functions

  //possible answer was clicked

  const optionClicked = () => {
    if (currentQuestion + 1 < dataLength) {
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
  };

//Show next question & options when button is clicked
//After last question is answered, show thank you message
  return (
    <div className = "App">
     

      <Info text="Dear member of our staff, this survey is completely anonymous. We ask for answers only to measure the well-being of our staff." />
    

      { showThankYouMessage ? ( 
        /* Thank you at the end */
        <div className='question-card'>
            <h1>Thank you!</h1>
            <button className='btn' onClick={() => restart()}>Back to beginning</button>
        </div>

      ) : (
        
        <div className='question-card'>

        <h2>Question: {currentQuestion + 1}</h2>
        <h1 className='question-text'>{currentQuestionnare[currentQuestion + 1].text}</h1>

        <ul>
         {currentQuestionnare[currentQuestion + 1].options.map((option) => {
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
  );
}

export default FrontPage;