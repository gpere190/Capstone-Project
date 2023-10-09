import React, { useState } from "react";
import "./EmailInput.scss";

function EmailInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    // Update the state with the new input value when it changes
    setInputValue(event.target.value);
  };

  return (
    <input
      className="email__textbox"
      type="text"
      placeholder="Email"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

export default EmailInput;
