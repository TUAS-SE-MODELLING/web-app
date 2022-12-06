import React from 'react';
import '../index.css';
import Info from '../components/Info';
import styled from 'styled-components';
import { useState } from 'react';


const Form = styled.form`
    background-color: red;
`;

const NewQuestionnare = () => {
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [text, setText] = useState('');

   
    const [questions, setQuestions] = useState([
        {
            text: "",
            options: [
              { id: 0, text: ""},
              { id: 1, text: ""},
              { id: 2, text: ""}
            ]
        }
    ]);
    
    const SaveQuestion = (text, option1, option2, option3) => {
        console.log(text)
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

    

    const PrintQuestionnare = () => {
        console.log("new")
        for (const i in questions) {
            // TÄÄ ON VIELÄ super keskeennndjs 
            /*fs.writeFile('./myFile.json', JSON.stringify(updatedJSON), (err) => {
                if (err) console.log('Error writing file:', err);
            })*/
            // browserify-fs could be solution
        
            console.log(i + "__:__"+questions[i].text + "_______" + questions[i].options[0].text + " tai " + questions[i].options[1].text + " tai " + questions[i].options[2].text)
            for (const x in questions[i]) {
                //console.log(x + "__" + questions[i][x])
                for (const y in questions[i][x]) {
                    //console.log(y  +"...." + questions[i][x][y])
                }
            }
        }
        setQuestions([
            {
                text: "",
                options: [
                  { id: 0, text: ""},
                  { id: 1, text: ""},
                  { id: 2, text: ""}
                ]
            }
        ])
    }

  return (
    <div className = "App">
    
      <Info text="Here you can make a new questionnare" />
        <div className='question-card'>
            <form onSubmit={event => {
                event.preventDefault();
                SaveQuestion(text, option1, option2, option3)
            }}>
                <label>
                    Question text:
                    <input 
                    type="text" 
                    name="text"
                    onChange={(e) => setText(e.target.value)}
                    value={text} 
                     />
                </label>
                <label>
                    Options:
                    <input 
                    type="text" 
                    name="option"
                    onChange={(e) => setOption1(e.target.value)}
                    value={option1} 
                    />
                    <input 
                    type="text" 
                    name="option"
                    onChange={(e) => setOption2(e.target.value)}
                    value={option2} 
                    />
                    <input 
                    type="text" 
                    name="option"
                    onChange={(e) => setOption3(e.target.value)}
                    value={option3} 
                    />
                </label>
                <button type='submit'>Next question</button>
            </form>
            <button onClick={PrintQuestionnare}>Save and send questionnare</button>
        </div>
    </div>
  );
}


export default NewQuestionnare;