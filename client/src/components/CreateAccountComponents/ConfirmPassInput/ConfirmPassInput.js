import React, { useState } from "react";
import "./ConfirmPassInput.scss";

function ConfirmPassInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    // Update the state with the new input value when it changes
    setInputValue(event.target.value);
  };

  return (
    <input
      className="confirm__textbox"
      type="text"
      placeholder="Confirm Password"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

export default ConfirmPassInput;
