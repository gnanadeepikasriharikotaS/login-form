import React, { useState } from 'react';
import axios from 'axios';

function Login({ setShowRegister, setLoginMessage }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const res = await axios.post('https://login-form-backend-c8i5.onrender.com/login', { email, password });
      setLoginMessage(res.data.message);
      setShowRegister(false); // hide register if login successful
    } catch (err) {
      setLoginMessage('User not found. Please register below.');
      setShowRegister(true); // show register form
    }
  };

  return (
    <div className="card p-4">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
  );
}

export default Login;
