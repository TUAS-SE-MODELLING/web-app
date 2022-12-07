import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './frontPage';
import ModeratorPage from './moderatorPage';
import Layout from '../components/Layout';
import ResultPage from './resultPage';
import NewQuestionnare from './newQuestionnare';
import ReadyQuizPage from './readyQuiz';


const Pages = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path = "/" element={<FrontPage />} />
                    <Route path="moderatorPage" element={<ModeratorPage />} />
                    <Route path="resultPage" element={<ResultPage />} />
                    <Route path="newQuestionnare" element={<NewQuestionnare />} />
                    <Route path="readyQuiz" element={<ReadyQuizPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};



export default Pages;
