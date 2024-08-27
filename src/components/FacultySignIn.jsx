// src/components/FacultySignIn.jsx
import React from 'react';

const FacultySignIn = () => {
    return (
        <div className="container">
            <h2>Faculty Sign In</h2>
            <form>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default FacultySignIn;
