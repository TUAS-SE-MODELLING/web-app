import React, { useState } from "react";
import Info from "../components/Info";
import { Link } from "react-router-dom";
import '../index.css';



const ReadyQuizPage = () => {

    const [quizData, setQuizData] = useState()

    fetch('http://localhost:3001/new')
    .then((response) => response.json())
    .then(data => {
        //console.log(data.start)
        console.log(JSON.stringify(data))
        setQuizData(JSON.stringify(data))
        console.log(quizData.answers[0])
        //console.log(data.questions[0].text)
        //console.log(data.questions[1].options[0].text)
        
    });
 
    return(
        <div className = "App">
            <Info text= "This is the result page. Decide the time which results you want to search"/>
            <div className='question-card'>
                
                 <Link to="/moderatorPage"> Back</Link>
                 <h2>Questionnaire saved</h2>
                 <p> Here it is: :D</p>
                 <p>{quizData}</p>
                 
                

            </div>
        
      </div>
    )
}

export default ReadyQuizPage;