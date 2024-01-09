import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      
      await axios.post('/auth/register', { name, email, password });

      await axios.post('/auth/login', { email, password });

      
      onLogin();


      history.push('/dashboard');
    } catch (error) {
      console.error('Error during registration or login:', error);
    
    }
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div >
      <h2 >Login</h2>
      <form style={containerStyle}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
        Login
        </button>
      </form>
    </div>
  );
};

export default Login;
