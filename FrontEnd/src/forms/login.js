import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // check form validity
    if (mail.trim() === "" || password.trim() === "") {
      setErrorMessage("All fields are required");
      return;
    }
    // replace with your own submission logic
    console.log("Email:", email, "Password:", password);
    setErrorMessage("");
    // clear the form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="form_container" id="login">
        <div className="imgp">
          <h2>Log in</h2>
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group">

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="buttonlogin"><Link to="/">Log in </Link> </button>
        </form>
        <p>
          Login as admin|<Link to="/admin">login</Link>
        </p>
        <p>
          Don't have an account?| <Link to="/register">Sign up</Link>
        </p>
        <Link to="/" className="back">
          Back
        </Link>
      </div>
    </div>
  );
}

export { LoginForm };
