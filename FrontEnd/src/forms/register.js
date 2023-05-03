import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    // check form validity
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      contact.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");

    }
    // submit the form data
    const formData = {
      name,
      email,
      contact,
      password,
    };
    //  submission logic
    console.log(formData);
    setSuccessMessage("yey Registration successful!");
    // clear the form
    setName("");
    setEmail("");
    setContact("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="container">
      <div className="form_container" id="register">
        <div className="imgp">
          <h2>Register</h2>
        </div>

        {successMessage && <div id="msg">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
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
            <label htmlFor="contact">Contact:</label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={(event) => setContact(event.target.value)}
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          <button type="submit" className="buttonlogin"> Register
          </button>
        </form>
        <p>
          Already have an account?|<Link to="/login"> Log in</Link>
        </p>

        <Link to="/" className="back">
          Back
        </Link>
      </div>
    </div>
  );
}


export { RegisterForm } 