import React, { useState, useMemo } from "react";
import Button from "./components/Button";
import SecretNumberSection from "./containers/SecretNumberSection";
import HowToPlaySection from "./containers/HowToPlaySection";
import "./App.css";

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
        <HowToPlaySection />
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
