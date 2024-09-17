import React, { useState } from 'react';
import './Registration.module.css';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Implement registration functionality
  };

  return (
    <div className="max-w-sm mx-auto p-6 border rounded shadow">
      <h2 className="text-xl mb-4">Register</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 mb-4 w-full"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 mb-4 w-full"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 mb-4 w-full"
      />
      <button onClick={handleRegistration} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Register
      </button>
    </div>
  );
};

export default Registration;
