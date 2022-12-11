import React from "react";
import Info from "../components/Info";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import '../index.css';



const ResultPage = () => {

   const [answerdata , setAnswerdata] =useState([])
   const [isLoading, setLoading] = useState(true);

   // here we will fetch quix data from server
   // set it to data state and take length of it
   // then when everything has completed we will set
   // loading to false which will allow us to see quiz
   useEffect(() => {
       fetch('http://localhost:3001/answer')
       .then((response) => response.json())
       .then((json) => {
           setAnswerdata(json)
       })
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));

   }, []);
     
   
  
   console.log(answerdata)
    return(
        <div className = "App">
            <Info text= "This is the result page. Decide the time which results you wan't to search"/>
            {isLoading ? (<p>Loading...</p>) : (
                <div className='question-card'>
        
                <Link to="/moderatorPage"> Back</Link>
                <h2>Results</h2>
                
                <ul>
                    {answerdata['answers'].map(artist => (
                        <li key={artist.id}>{artist.value}</li>
                    ))}
                </ul>
     
                 </div>
             )}
      
        
      </div>
    )
}

export default ResultPage;