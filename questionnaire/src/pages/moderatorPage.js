import React from "react";
import Info from "../components/Info";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const ModeratorPage = () => {

    return(
        <div className = "App">
            <Info text= "This is moderator view. Here you can edit or add questionare questions. This is the place where you can also view results"/>
            <div className='question-card'>
                
                <h2>Welcome</h2>
                <h1>What you want to do?</h1>
                <FlexDiv>
                    <StyledLink to='/resultPage'>View the<br></br>results</StyledLink>
                    <StyledLink to='/newQuestionnare'>Add a new <br></br>questionnare</StyledLink>
                    <StyledLink to='/editQuiz'>Edit the current <br></br>questionnare</StyledLink>
                </FlexDiv>

            </div>
        
      </div>
    )
}

export default ModeratorPage;