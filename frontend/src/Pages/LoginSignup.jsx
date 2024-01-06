// LoginSignup.js

import React, { useState } from 'react';
import './css/Login.css'

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className={`login ${isLogin ? 'login-form' : 'signup-form'}`}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter your username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />

        {!isLogin && (
          <>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" />
          </>
        )}

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <p onClick={toggleForm}>
        {isLogin ? 'Don\'t have an account? Sign up here.' : 'Already have an account? Log in here.'}
      </p>
    </div>
  );
};

export default LoginSignup;
