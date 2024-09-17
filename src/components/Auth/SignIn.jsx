import React, { useState } from 'react';
import './SignIn.module.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Implement sign-in functionality
  };

  return (
    <div className="max-w-sm mx-auto p-6 border rounded shadow">
      <h2 className="text-xl mb-4">Sign In</h2>
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
      <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
