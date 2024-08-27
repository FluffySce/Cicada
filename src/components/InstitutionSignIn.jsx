// src/components/InstitutionSignIn.jsx
import React from 'react';

const InstitutionSignIn = () => {
    return (
        <div className="container">
            <h2>Institution Sign In</h2>
            <form>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default InstitutionSignIn;
