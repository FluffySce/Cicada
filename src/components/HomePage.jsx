// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container">
            <h1>Welcome to the Portal</h1>
            <div className="button-group">
                <div>
                    <h2>Faculty</h2>
                    <Link to="/faculty/register" className="link">Faculty Registration</Link>
                    <Link to="/faculty/signin" className="link">Faculty Sign In</Link>
                </div>
                <div>
                    <h2>Institution</h2>
                    <Link to="/institution/register" className="link">Institution Registration</Link>
                    <Link to="/institution/signin" className="link">Institution Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
