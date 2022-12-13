import React from "react";
import Info from "../components/Info";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import '../index.css';
import { BarChart } from "../components/ResultChart";
import { Data } from "../components/Data";
import Chart from 'chart.js/auto';



const ResultPage = () => {

   const [answerdata , setAnswerdata] =useState([])
   const [isLoading, setLoading] = useState(true);
   const [zeros, setZeros] = useState([]);
   const [ones, setOnes] = useState([]);
   const [twos, setTwos] = useState([]);

   
   const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });


   // here we will fetch quix data from server
   // set it to data state and take length of it
   // then when everything has completed we will set
   // loading to false which will allow us to see quiz
  
   useEffect(() => {
       fetch('http://localhost:3001/answer')
       .then((response) => response.json())
       .then((json) => {
           setAnswerdata(json.answers)
           //console.log(json)
            //answerdata.map((answer) => console.log(answer))

      
            //console.log(json.answers)
            //console.log(answerdata)
            let onee = []
            let zeroo = []
            let twoo = []
            
            for (var i=0; i < answerdata.length; i++) {
                //console.log(answerdata[i].answer.length)
                if (answerdata[i].answer.length>0){
              
                    for (const x in answerdata[i].answer){
                        console.log( x + "......." + answerdata[i].answer[x].value )
                        if ( x === '0'){
                            
                                zeroo.push(answerdata[i].answer[x].value) 
                           
                        }
                        else if ( x === '1'){
                            onee.push(answerdata[i].answer[x].value) 
                        }
                        else if ( x==='2') {
                            twoo.push(answerdata[i].answer[x].value) 
                            
                        }
                    }
                }
                

                const counts0 = {};
                const counts1 = {};
                const counts2 = {};
                
                zeroo.forEach(function (x) { counts0[x] = (counts0[x] || 0) + 1; });
                setZeros(counts0)

                onee.forEach(function (x) { counts1[x] = (counts1[x] || 0) + 1; });
                setOnes(counts1)
                
                twoo.forEach(function (x) { counts2[x] = (counts2[x] || 0) + 1; });
                setTwos(counts2)

                console.log(twos)

                /*setChartData({
                    labels: zeros.map((data) => data), 
                    datasets: [
                      {
                        label: "Lallalala ",
                        data: zeros.map((data) => data),
                        backgroundColor: [
                          "rgba(75,192,192,1)",
                          "#ecf0f1",
                          "#50AF95",
                          "#f3ba2f",
                          "#2a71d0"
                        ],
                        borderColor: "black",
                        borderWidth: 2
                      }
                    ]
                  })*/

                //console.log(counts2)
                
            }
           //console.log(json.answers[0].answer[0].questioniId)
           /*for (const i in json.answers){
            //console.log(i + "___" + json.answers[i])
            
            for (const x in json.answers[i]){
                console.log(i + x + "......." + json.answers[0].answer[0].questioniId)
            }
           }*/
       })
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));

   }, []);
     
   
  
   //console.log(answerdata)
    return(
        <div className = "App">
            <Info text= "This is the result page. Take a look at the results"/>
            {isLoading ? (<p>Loading...</p>) : (
                <div className='question-card'>
        
                <Link to="/moderatorPage"> Back</Link>
                <h2>Results</h2>
                <BarChart chartData={chartData} />
                
                <ul>
                    {/*answerdata.map(answer => (
                        <div>
                            
                        <li key={answer.answer[0].questioniId}>{answer.answer[0].value}</li>
                        </div>
                    ))
                    */}
                
                    <p>{/*answerdata[0].answer[0].value*/}</p>
                </ul>
                
                 </div>
             )}
      
        
      </div>
    )
}

export default ResultPage;