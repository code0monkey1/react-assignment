import React, { useRef } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${usernameRef.current.value}, Email: ${emailRef.current.value}, Password: ${passwordRef.current.value}, Confirm Password: ${confirmPasswordRef.current.value}`);
  };

  return (
    <div className={styles['signup-container']}>
      <h1 className={styles['signup-title']}>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['signup-input-container']}>
          <label className={styles['signup-label']} htmlFor="username">Username:</label>
          <input className={styles['signup-input']} type="text" id="username" ref={usernameRef} />
        </div>
        <div className={styles['signup-input-container']}>
          <label className={styles['signup-label']} htmlFor="email">Email:</label>
          <input className={styles['signup-input']} type="email" id="email" ref={emailRef} />
        </div>
        <div className={styles['signup-input-container']}>
          <label className={styles['signup-label']} htmlFor="password">Password:</label>
          <input className={styles['signup-input']} type="password" id="password" ref={passwordRef} />
        </div>
        <div className={styles['signup-input-container']}>
          <label className={styles['signup-label']} htmlFor="confirm-password">Confirm Password:</label>
          <input className={styles['signup-input']} type="password" id="confirm-password" ref={confirmPasswordRef} />
        </div>
        <div className={styles['signup-button-container']}>
          <button className={styles['signup-button']} type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;