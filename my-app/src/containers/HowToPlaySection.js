import React from "react";
import "../App.css";

const playSteps = [
  { id: 1, step: "Guess the secret number between 0 and 100." },
  { id: 2, step: "If you guess incorrect number, you will get a hint." },
  { id: 3, step: "If you guess correct number, you win!" },
];

const HowToPlaySection = () => {
  return (
    <div className="mainSection">
      <h2>How to play</h2>

      <ul>
        {playSteps?.map((i) => {
          return <li key={i.id}>{i.step}</li>;
        })}
      </ul>
    </div>
  );
};

export default HowToPlaySection;
