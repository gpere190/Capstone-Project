import React, { useEffect, useState } from "react";
import Letter from "../Letter/Letter";

const LettersContainer = ({ word }) => {
  const [charArray, setCharArray] = useState([]);

  useEffect(() => {
    const array = word.split("");
    setCharArray(array);
  }, [word]);

  return (
    <div>
      {charArray.map((letter) => {
        return <Letter key={letter} letterProp={letter} wordProp={word} />;
      })}
    </div>
  );
};

export default LettersContainer;
