import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles['home-container']}>
      <h1 className={styles['home-title']}>LeetCode</h1>
      <nav className={styles['home-nav']}>
        <ul className={styles['home-nav-list']}>
          <li className={styles['home-nav-item']}>
            <Link to="/login" className={styles['home-nav-link']}><button>Login</button></Link>
          </li>
          <li className={styles['home-nav-item']}>
             <Link to="/signup" className={styles['home-nav-link']}> <button className={styles['login-button']} type="submit">SignUp</button></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;