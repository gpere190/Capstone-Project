import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateAccountForm.scss";

const CreateAccountForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!validatePassword(password)) {
      alert("Passwords does not match, meet the criteria");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/users/register`, {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        navigate("/login");
      });
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(String(password));
  };

  return (
    <form onSubmit={register}>
      <label>Create Username</label>
      <input
        className="createUsername__textbox"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label>Create Password</label>
      <input
        className="createPassword__textbox"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label>Confirm Password</label>
      <input
        className="confirmPassword__textbox"
        type="password"
        placeholder="Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button type="submit" className="signUpButton">
        Sign Up
      </button>
    </form>
  );
};

export default CreateAccountForm;
