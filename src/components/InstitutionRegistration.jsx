// src/components/InstitutionRegistration.jsx
import React from 'react';

const InstitutionRegistration = () => {
    return (
        <div className="container">
            <h2>Institution Registration</h2>
            <form>
                <input type="text" name="institution_name" placeholder="Institution Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default InstitutionRegistration;
