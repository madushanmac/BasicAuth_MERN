import React, { useState } from "react";
import authService from "../authService";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import the CSS file

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await authService.register(username, password);
      setMessage("Registration successful! You can now log in.");
    } catch (error) {
      setMessage("Registration failed. Please try again.");
      console.error("Registration error:", error);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/");
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
      <p>Already have an account?</p>
      <button className="login-button" onClick={handleLoginRedirect}>
        Login
      </button>
    </div>
  );
}

export default Register;
