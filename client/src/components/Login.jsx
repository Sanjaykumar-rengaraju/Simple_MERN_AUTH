import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../style/login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    Axios.post('http://localhost:3000/login', { email, password })
      .then((res) => {
        if (res.status === 200) {
          alert("Logged in successfully");
          navigate('/signup');
        }
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div className="container">
      <div className="login-page">
        <input
          type="email"
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
