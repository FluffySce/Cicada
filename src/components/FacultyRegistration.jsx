// src/components/FacultyRegistration.jsx
import React from 'react';

const FacultyRegistration = () => {
    return (
        <div className="container">
            <h2>Faculty Registration</h2>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default FacultyRegistration;
