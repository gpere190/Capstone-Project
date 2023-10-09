import React, { useState, useEffect } from "react";
import axios from "axios";

const Letter = ({ letterProp }) => {
  const [letterData, setLetterData] = useState([]);

  useEffect(() => {
    // Load data from the database using Axios and the API URL from .env
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/letters/${letterProp}`)
      .then((response) => {
        setLetterData(response.data); // Assuming the response is an array of objects
      })
      .catch((error) => {
        console.error("Error fetching letters:", error);
      });
  }, []); // The empty dependency array ensures the effect runs only once

  return <img src={letterData.image_src} alt={letterData.Letter} />;
};

export default Letter;
