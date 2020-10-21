import React, { useMemo } from "react";
import "../App.css";
import hvezda from "../hvezda.svg";

const SecretNumberSection = () => {
  const startNumber = 0;
  const endNumber = 100;

  const getRandomNumber = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  const randomNumber = useMemo(() => getRandomNumber(0, 100), []);
  return (
    <div className="mainSection">
      <h2>Secret Number</h2>
      <div className="secretNumber">
        <p className="symbol number rightAligned" id="minRange">
          {startNumber}
        </p>
        <p className="symbol arrow">&lt;</p>
        <div className="star">
          <img src={hvezda} alt="hvezda" />
          <p className="symbol" id="mysteryNumber">
            {randomNumber}
          </p>
        </div>
        <p className="symbol arrow">&lt;</p>
        <p className="symbol number" id="maxRange">
          {endNumber}
        </p>
      </div>
    </div>
  );
};

export default SecretNumberSection;
