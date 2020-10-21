import React, { useState, useMemo } from "react";
import Button from "./components/Button";
import SecretNumberSection from "./containers/SecretNumberSection";
import "./App.css";

const playSteps = [
  { id: 1, step: "Guess the secret number between 0 and 100." },
  { id: 2, step: "If you guess incorrect number, you will get a hint." },
  { id: 3, step: "If you guess correct number, you win!" },
];

function App() {
  const [guessNumber, seGuessNumber] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    seGuessNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    alert("My guess number is: " + guessNumber);
    e.preventDefault();
    seGuessNumber("");
  };

  return (
    <div className="App">
      <div className="alert">
        <p id="guessMessage">Welcome!</p>
      </div>

      <header>
        <h1 id="headline">Can you guess the secret number?</h1>
      </header>

      <div className="main">
        <div className="mainSection">
          <h2>How to play</h2>

          <ul>
            {playSteps?.map((i) => {
              return <li key={i.id}>{i.step}</li>;
            })}
          </ul>
        </div>

        <SecretNumberSection />
      </div>

      <div className="guessPanel">
        <form className="guessForm" onSubmit={handleSubmit}>
          <h2>Number between 0 and 100:</h2>
          <input
            id="guessInput"
            type="number"
            value={guessNumber}
            onChange={handleChange}
            min="0"
            max="100"
          />
          <Button label="guess" type="submit" id="guessButton" />
        </form>
        <div className="restartGame">
          <Button label="Restart game" id="restartGameButton" />
        </div>
      </div>
    </div>
  );
}

export default App;
