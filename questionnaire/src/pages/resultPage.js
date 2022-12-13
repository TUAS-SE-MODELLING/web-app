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
   const [titles, setTitles] = useState('')
 
   const [chartData2, setChartData2] = useState({
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
   const [chartData1, setChartData1] = useState({
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
            console.log(answerdata)
            let onee = []
            let zeroo = []
            let twoo = []
            let questions = []
            
            for (var i=0; i < answerdata.length; i++) {
                //console.log(answerdata[i].answer.length)
                if (answerdata[i].answer.length>0){
                  
                
                        questions.push(answerdata[i].answer[i-1].question)
                  
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
                console.log(questions)
                setTitles(questions)
                
                zeroo.forEach(function (x) { counts0[x] = (counts0[x] || 0) + 1; });
               

                onee.forEach(function (x) { counts1[x] = (counts1[x] || 0) + 1; });
                
                
                twoo.forEach(function (x) { counts2[x] = (counts2[x] || 0) + 1; });
               
                 
                console.log(counts1)
                console.log(counts2)

                for (const c in counts0){
                    console.log(c + counts0[c]) 
                }

                
               
                const PleaseWorkData = [
                  {
                    question: Object.keys(counts0)[0],
                    amount: Object.values(counts0)[0]
                  },
                  {
                    question: Object.keys(counts0)[1],
                    amount: Object.values(counts0)[1]
                  },
                  {
                    question: Object.keys(counts0)[2] || '-',
                    amount: Object.values(counts0)[2]
||0                  }
                ];

                const PleaseWorkData1 = [
                  {
                    question: Object.keys(counts1)[0],
                    amount: Object.values(counts1)[0]
                  },
                  {
                    question: Object.keys(counts1)[1],
                    amount: Object.values(counts1)[1]
                  },
                  {
                    question: Object.keys(counts1)[2] || '-',
                    amount: Object.values(counts1)[2]
||0                  }
                  
                ];

                const PleaseWorkData2 = [ 
                  {
                    question: Object.keys(counts2)[0],
                    amount: Object.values(counts2)[0]
                  },
                  {
                    question: Object.keys(counts2)[1],
                    amount: Object.values(counts2)[1]
                  },
                  {
                    question: Object.keys(counts2)[2] || '-',
                    amount: Object.values(counts2)[2]
||0                  }
                ];

                 
                console.log(PleaseWorkData.map((data) => data.question))
                console.log(PleaseWorkData.map((data) => data.amount))

                setChartData({ 
                    labels: PleaseWorkData.map((data) => data.question), 
                    datasets: [
                      {
                        label: "Answered",
                        data: PleaseWorkData.map((data) => data.amount),
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
                  })

                  setChartData1({
                    labels: PleaseWorkData1.map((data) => data.question), 
                    datasets: [ 
                      {
                        label: "Answered",
                        data: PleaseWorkData1.map((data) => data.amount),
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
                  })

                  setChartData2({
                    labels: PleaseWorkData2.map((data) => data.question), 
                    datasets: [ 
                      {
                        label: "Answered",
                        data: PleaseWorkData2.map((data) => data.amount),
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
                  })

                //console.log(counts2)
                
            }
          
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
                <h2 style={{ textAlign: "center" }}>{titles[0]}</h2>
                <BarChart chartData={chartData} />

                <h2 style={{ textAlign: "center" }}>{titles[1]}</h2>
                <BarChart chartData={chartData1} />

                <h2 style={{ textAlign: "center" }}>{titles[2]}</h2>
                <BarChart chartData={chartData2} />
                
                
                
                 </div>
             )}
      
        
      </div>
    )
}

export default ResultPage;