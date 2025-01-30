import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guessLetter } from '../Redux/Slices/gameSlice';
import { RootState } from '../Redux/store';

const Game: React.FC = () => {
  const { word, guessedLetters, attemptsLeft } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const handleGuess = (letter: string) => {
    dispatch(guessLetter(letter));
  };

  const getWordDisplay = () => {
    return word
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
  };

  return (
    <div className="game">
      <h1>Le jeu du pendu</h1>
      <p>Mot : {getWordDisplay()}</p>
      <p>Essais restants : {attemptsLeft}</p>
      <div className="letters">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter)}
            style={{
              backgroundColor: guessedLetters.includes(letter)
                ? word.includes(letter)
                  ? "green"
                  : "red"
                : ""
            }}
          >
            {letter}
          </button>
        ))}
      </div>
      {attemptsLeft === 0 && <p>Perdu ! Le mot était : {word}</p>}
      {getWordDisplay().replace(/ /g, "") === word && <p>Félicitations, vous avez gagné !</p>}
    </div>
  );
};

export default Game;
