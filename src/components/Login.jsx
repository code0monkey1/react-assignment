import React, { useRef } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${usernameRef.current.value}, Password: ${passwordRef.current.value}`);
  };

  return (
    <div className={styles['login-container']}>
      <h1 className={styles['login-title']}>LeetCode</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['login-input-container']}>
          <label className={styles['login-label']} htmlFor="username">Username:</label>
          <input className={styles['login-input']} type="text" id="username" ref={usernameRef} />
        </div>
        <div className={styles['login-input-container']}>
          <label className={styles['login-label']} htmlFor="password">Password:</label>
          <input className={styles['login-input']} type="password" id="password" ref={passwordRef} />
        </div>
        <div className={styles['login-button-container']}>
          <button className={styles['login-button']} type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;