import React from 'react'
import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Experiences from './components/pages/experiences/Experiences';
import Educations from './components/pages/educations/Educations';
import Portfolios from './components/pages/portfolios/Portfolios';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Resume() {
    return (
        <Router>
            <>
            
                <Routes>
                <Route exact path="/" component={Home} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/experiences" component={Experiences} />
                    <Route path="/educations" component={Educations} />
                    <Route path="/portfolios" component={Portfolios} />
                </Routes>
            </>


        </Router>
    )
}

export default Resume