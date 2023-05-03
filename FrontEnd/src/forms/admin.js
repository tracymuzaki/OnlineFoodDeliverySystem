import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  
  const [AdminId, setAdminId] = useState('');
  const [Password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //  your actual admin ID and password
    const adminId = 'FA12';
    const password = 'Magmapod@#$%2';

    if (adminId === adminId && password === Password) {
      setIsLoggedIn(true);

    } else {
      setErrorMessage('Invalid login credentials.');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboardapp" />;
  }

  
  return (
    <div className="container">
      <div className="form_container" id="login">
        <div className="imgp">
          <h2>Admin</h2>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="admin-id">Admin ID:</label>
            <input type="text" id="admin-id" value={AdminId} onChange={(e) => setAdminId(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="buttonlogin" type="submit" value="Login"
          >Login</button>
        </form>
        <p>
          Login as customer| <Link to="/login">Login</Link>
        </p>
        <Link to="/" className="back">
          Back
        </Link>
      </div>
    </div>

  );
};

export  {AdminLogin};




