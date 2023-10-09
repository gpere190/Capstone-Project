import React, { useState } from "react";
import "./PasswordInput.scss";

function PasswordInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    // Update the state with the new input value when it changes
    setInputValue(event.target.value);
  };

  return (
    <input
      className="password__textbox"
      type="text"
      placeholder="Password"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

export default PasswordInput;
