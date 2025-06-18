import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://nataliesugarcaneanddesserts.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      navigate('/admin');
    } else {
      setMessage('Login failed');
    }
  };

  return (
    <div className='form-div'>


      <form onSubmit={handleSubmit} className='login-form'>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        <p>{message}</p>
        </form>
      </div>
  );
}

export default Login;
