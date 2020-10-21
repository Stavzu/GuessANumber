import React from "react";
import Button from "./components/Button";
import hvezda from "./hvezda.svg";
import "./App.css";

const playSteps = [
  { id: 1, step: "Guess the secret number between 0 and 100." },
  { id: 2, step: "If you guess incorrect number, you will get a hint." },
  { id: 3, step: "If you guess correct number, you win!" },
];

function App() {
  const randomNumber = getRandomNumber(0, 100);
  const startNumber = 0;
  const endNumber = 100;

  function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

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
      </div>

      <div className="guessPanel">
        <form className="guessForm">
          <h2>Number between 0 and 100:</h2>
          <input type="number" min="0" max="100" id="guessInput" />
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
