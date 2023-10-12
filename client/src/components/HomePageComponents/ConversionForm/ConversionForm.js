import "./ConversionForm.scss";
import React, { useState } from "react";
import MickeyThumbsUpButton from "../MickeyThumbsUp/MickeyThumbsUp";
import LettersContainer from "../LettersContainer/LettersContainer";
//images
import profileMickeyImage from "../../../assets/images/profiles/profile_mickey.png";

const ConversionForm = () => {
  const [profileIcon, setProfileIcon] = useState(profileMickeyImage);
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const newValue = event.target.value;

    // Check if the input matches the desired pattern
    if (/^[a-zA-Z]*$/.test(newValue)) {
      setInputValue(newValue.toUpperCase());
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setHasSubmitted(true);
  };

  return (
    <div className="body">
      <img
        className="body__profileImage"
        src={profileIcon}
        alt="profile_image"
      ></img>

      {hasSubmitted && <LettersContainer word={submittedValue} />}

      <form onSubmit={handleSubmit}>
        <p className="body__text">Convert letters to Fingerspelling</p>
        <div className="body__textboxRow">
          <div>
            <input
              className="asl__textbox"
              type="text"
              placeholder="Type word"
              onChange={handleInputChange}
              pattern="[A-Za-z]*"
              value={inputValue}
              maxLength={10}
            />
          </div>
          <MickeyThumbsUpButton />
        </div>
      </form>
    </div>
  );
};
export default ConversionForm;
