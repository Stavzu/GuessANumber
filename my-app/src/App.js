import React, { useState, useMemo } from "react";
import Button from "./components/Button";
import SecretNumberSection from "./containers/SecretNumberSection";
import HowToPlaySection from "./containers/HowToPlaySection";
import "./App.css";

function App() {
  const [guessNumber, seGuessNumber] = useState();

  const startNumber = 0;
  const endNumber = 100;

  const getRandomNumber = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  const randomNumber = useMemo(() => getRandomNumber(0, 100), []);

  const handleChange = (e) => {
    const newGuessNumber = e.target.value;
    seGuessNumber(newGuessNumber);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    seGuessNumber("");
  };

  return (
    <div className="App">
      <div className="alert">
        <p id="guessMessage">Welcome</p>
      </div>

      <header>
        <h1 id="headline">Can you guess the secret number?</h1>
      </header>

      <div className="main">
        <HowToPlaySection />
        <SecretNumberSection
          startNumber={startNumber}
          endNumber={endNumber}
          randomNumber={randomNumber}
        />
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
