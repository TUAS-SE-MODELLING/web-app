import React from "react";
import Info from "../components/Info";
import styled from "styled-components";
import { Link } from "react-router-dom";
import '../index.css';
import { useState, useEffect } from 'react';


const StyledLink = styled(Link)`
    background-color: #a1d2ffa4;
    margin-left: 7.7%;
    padding: 10px;
    width: 120px;
    height: 88px;
    line-height: 1.8;
    padding-top: 6%;
    text-decoration: none;
    color: black;
    :hover {
        background-color: #96a7f3;
        color: white;
    }
`;

const FlexDiv = styled.div`
    display:flex;
    
`;

const EditQuizPage = () => {

    // this is for how long quiz will run
    const [length, setLength] = useState(0)

    const [quizdata , setQuizdata] =useState([])
    const [isLoading, setLoading] = useState(true);

  
    useEffect(() => {
        fetch('http://localhost:3001/currentQuiz')
        .then((response) => response.json())
        .then((json) => {
            setQuizdata(json)
            setLength(Object.keys(quizdata).length)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    }, []);
        
         //const [question1, setQuestion1] = useState({ question : quizdata[0].text}, {
            //options: quizdata[0].options.map(option)
       // })
       // console.log(question1)
          return (
            <div className = "App">
            <Info text= "This is moderator view. Here you can edit or add questionare questions. This is the place where you can also view results"/>
            <div className='question-card'>
                
                <h2>Welcome</h2>
                <h1>What you want to do?</h1>
                
            </div>
        
      </div>
          );
        }

export default EditQuizPage;