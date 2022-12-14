import React from 'react';
import '../index.css';
import Info from '../components/Info';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const EditQuizPage = () => {
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [text, setText] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [quizData, setQuizData] = useState([])
    const [isLoading, setLoading] = useState(true);

    let navigate = useNavigate();

    const [jumpToNextQuestion, setJumpToNextQuestion] = useState(0);

    const toReadyQuiz = () =>{ 
        let path = `../readyQuiz`; 
        navigate(path);
      }

      useEffect(() => {
        const fetchData = async () => {
          const data = await fetch('http://localhost:3001/currentQuiz')
  
          const json = await data.json();
          //console.log(json)
  
          setQuizData(json)
          console.log("Lol")
          console.log(json)
          console.log(quizData.text)


      
        }
          fetchData()
          .catch((error) => console.error(error))
          .finally(() => 
            setLoading(false));
  
      }, []);

    // Hating this. I don't know which would be best
    // solution to do this without using database:)
    // something maybe to do with dates so that when 
    // start date is today it will change new.json data to
    // currentQuestionaire.json data
   
    const [questions, setQuestions] = useState([
        {
            text: "",
            options: [
              { id: 0, text: ""},
              { id: 1, text: ""},
              { id: 2, text: ""}
            ],
            start: startDate,
            end: endDate
        }
    ]);
    
    // when user clicks next question it will 
    // add question to questions
    const SaveQuestion = (text, option1, option2, option3) => {
        console.log(text)
        if (jumpToNextQuestion>2){
            setJumpToNextQuestion(0)
        }
        else {
            setJumpToNextQuestion(jumpToNextQuestion +1)
        }
        
        const updateQuestions=[
        ...questions,
        {
            text: text,
            options: [
              { id: 0, text: option1},
              { id: 1, text: option2},
              { id: 2, text: option3}
            ]
        }
    ];
    setQuestions(updateQuestions);    
    }

    
    // when user clicks save and send questionnare
    // it will send it to server which writes new.json
    // of that data
    /*const SendQuestionnare = () => {

        

        // first one away wich is empty
        questions.shift()
        console.log(questions)
        fetch('http://localhost:3001/currentQuiz', {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                start: startDate,
                end: endDate,
                questions})
        });
        
        // after that it sets everything to default/null
        setQuestions([
            {
                text: "",
                options: [
                  { id: 0, text: ""},
                  { id: 1, text: ""},
                  { id: 2, text: ""}
                ],
                start: startDate,
                end: endDate
            }
        ])
        toReadyQuiz();
        
    }*/

  return (
    <div className = "App">
    
      <Info text="Here you can edit the current questionnaire" />

      
      {/*While fetchin data*/}
      {isLoading ? ( <p>Loading...</p> ) : (

        <div className='question-card'>
        <Link to="/moderatorPage"> Back</Link>
                 <h2>Edit the quiz</h2>
            <form onSubmit={event => {
                event.preventDefault();
                SaveQuestion(text, option1, option2, option3)
            }}>
            <div className="dates">
                <label> Start date:
                <DatePicker
                    selected={startDate}
                    selectsStart
            s       tartDate={startDate}
                    endDate={endDate}
                    onChange={date => setStartDate(date)}
                /></label>
                <label> End date:
                <DatePicker
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={date => setEndDate(date)}
                />
                </label>
            </div>

           
                <label className='text'>
                    Question text:
                    <input 
                    type="text" 
                    name="text"
                    onChange={(e) => setText(e.target.value)}
                    value={text} 
                    placeholder={quizData[jumpToNextQuestion].text}
                    defaultValue={quizData[jumpToNextQuestion].text}
                     />
                </label>
                <label className='options'>
                    Options:
                    <input 
                    type="text" 
                    name="option"
                    onChange={(e) => setOption1(e.target.value)}
                    value={option1} 
                    placeholder={quizData[jumpToNextQuestion].options[0].text}
                    defaultValue={quizData[jumpToNextQuestion].options[0].text}
                    />
                    <input 
                    type="text" 
                    name="option"
                    onChange={(e) => setOption2(e.target.value)}
                    value={option2} 
                    placeholder={quizData[jumpToNextQuestion].options[1].text}
                    defaultValue={quizData[jumpToNextQuestion].options[1].text}
                    />
                    <input 
                    type="text" 
                    name="option"
                    onChange={(e) => setOption3(e.target.value)}
                    value={option3} 
                    placeholder={quizData[jumpToNextQuestion].options[2].text}
                    defaultValue={quizData[jumpToNextQuestion].options[2].text}
                    />
                </label>
            
                <button type='submit'>Next question</button>
            </form>
            <button /*onClick={/*SendQuestionnare*/
           >Save and send questionnare</button>
        </div>
      )}
    </div>
  );
}


export default EditQuizPage;