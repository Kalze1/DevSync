import './loginpage.css';
import React, { useState } from 'react';

function Loginpage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Replace this with your actual login logic (API call, etc.)
    if (username === 'demo' && password === 'demo') {
      // Simulate successful login
      window.location.href = '/dashboard'; // Redirect to dashboard
    } else {
      setErrorMessage('Invalid username or password!');
      console.log(username,password)
    }
  };

  return (
    <div className="login-page-container">
      <h1>Log In</h1>
      <form className='login-page-form' onSubmit={handleLoginSubmit}>
        <label htmlFor="username">Username/Email:</label>
        <input className='login-page-input'
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input className='login-page-input'
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='login-page-button'  type="submit">Log In</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Loginpage;
