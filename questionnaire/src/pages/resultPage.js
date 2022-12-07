import React from "react";
import Info from "../components/Info";
import { Link } from "react-router-dom";

import '../index.css';



const ResultPage = () => {


    return(
        <div className = "App">
            <Info text= "This is the result page. Decide the time which results you wan't to search"/>
            <div className='question-card'>
                
                 <Link to="/moderatorPage"> Back</Link>
                 <h2>Results</h2>
                

            </div>
        
      </div>
    )
}

export default ResultPage;