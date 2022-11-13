import React, { useState } from 'react';
import './index.css';
import Info from './components/Info'


function App () {

  //Properties 

  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Questions and answer options
  const questions = [
    {
      text: "Are you feeling exhausted?",
      options: [
        { id: 0, text: "Yes"},
        { id: 1, text: "No"},
        { id: 2, text: "I am not sure"},
      ],
    },
    {
      text: "How often do you feel stressed?",
      options: [
        { id: 0, text: "Daily"},
        { id: 1, text: "A few times in a week"},
        { id: 2, text: "Sometimes"},
      ],
    },
    {
      text: "How many hours do you sleep each night?",
      options: [
        { id: 0, text: "5 hours or less"},
        { id: 1, text: "Around 5-8 hours"},
        { id: 2, text: "8 hours or more"},
      ],
    },
    {
      text: "Do you feel happy with your work performance?",
      options: [
        { id: 0, text: "Yes"},
        { id: 1, text: "No"},
        { id: 2, text: "I don't know"},
      ],
    },
  ];

  //Helper functions

  //possible answer was clicked

  const optionClicked = () => {
    if (currentQuestion + 1 < questions.length) {
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
     

      <Info />

      { showThankYouMessage ? ( 
        /* Thank you at the end */
        <div className='thanks'>
        <h1>Thank you!</h1>
        <button className='btn' onClick={() => restart()}>Back to beginning</button>
        </div>
      ) : (
        
        <div className='question-card'>

        <h2>Question: {currentQuestion + 1}</h2>
        <h1 className='question-text'>{questions[currentQuestion].text}</h1>

        <ul>
         {questions[currentQuestion].options.map((option) => {
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

export default App;