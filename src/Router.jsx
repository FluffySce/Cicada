// src/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import FacultyRegistration from './components/FacultyRegistration';
import InstitutionRegistration from './components/InstitutionRegistration';
import FacultySignIn from './components/FacultySignIn';
import InstitutionSignIn from './components/InstitutionSignIn';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/faculty/register" element={<FacultyRegistration />} />
                <Route path="/institution/register" element={<InstitutionRegistration />} />
                <Route path="/faculty/signin" element={<FacultySignIn />} />
                <Route path="/institution/signin" element={<InstitutionSignIn />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
