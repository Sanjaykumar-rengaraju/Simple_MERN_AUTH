import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css'; 

const Home = () => {
  return (
    <div className="container">
      <h1 className="welcome-text">Welcome to the home page!</h1>
      <Link to="/signup">
        <button className="signup-button">Create an Account!</button>
      </Link>
      <h5 className="or-text">or</h5>
      <Link to="/login">
        <button className="login-button">Login</button>
      </Link>
    </div>
  );
};

export default Home;
