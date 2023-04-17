import React, { useRef } from 'react';
import './Login.css';

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${usernameRef.current.value}, Password: ${passwordRef.current.value}`);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">LeetCode</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-input-container">
          <label className="login-label" htmlFor="username">Username:</label>
          <input className="login-input" type="text" id="username" ref={usernameRef} />
        </div>
        <div className="login-input-container">
          <label className="login-label" htmlFor="password">Password:</label>
          <input className="login-input" type="password" id="password" ref={passwordRef} />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;