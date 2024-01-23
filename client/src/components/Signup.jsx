import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/signup.css'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    Axios.post('http://localhost:3000/signup', { name, email, password })
      .then((res) => {
        setName('');
        setEmail('');
        setPassword('');
        if (res.status === 200) navigate('/login');
      })
      .catch((error) => {
        console.error('Signup failed:', error);
      });
  };

  return (
    <div className="container">
      <div className="signup-form">
        <input
          type="text"
          placeholder="Enter Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Set Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleClick}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;