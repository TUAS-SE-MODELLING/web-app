import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './frontPage';
import ModeratorPage from './moderatorPage';
import Layout from '../components/Layout';


const Pages = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path = "/" element={<FrontPage />} />
                    <Route path="moderatorPage" element={<ModeratorPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};



export default Pages;
