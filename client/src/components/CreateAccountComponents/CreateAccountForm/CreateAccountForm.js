import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateAccountForm.scss";
import SignUpButton from "../SignUpButton/SignUpButton";

const CreateAccountForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const validateEmail = (event) => {
    const newValue = event.target.value;
    // Check if the input matches the desired pattern
    if (/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(newValue)) {
      setInputValue(newValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents from refreshing the page
    setSubmittedValue(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        className="createEmail__textbox"
        type="email"
        id="email"
        required
        placeholder="Email"
        onChange={validateEmail}
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        // value={}
        title="Email for example: abc123@gmail.com"
      />
      <label>Create Password</label>
      <input
        className="createPassword__textbox"
        type="password"
        placeholder="Password"
        // value={}
        // onChange={}
        required
      />
      <label>Confirm Password</label>
      <input
        className="confirmPassword__textbox"
        type="password"
        placeholder="Password"
        // value={}
        // onChange={}
        required
      />
      <SignUpButton />
    </form>
  );
};

export default CreateAccountForm;
