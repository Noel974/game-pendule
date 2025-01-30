import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import words from '../assets/data/Mot.json';
import { setTheme, setWord } from '../Redux/Slices/gameSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleThemeSelect = (theme: string) => {
    const themeWords = (words as any)[theme];
    const randomWord = themeWords[Math.floor(Math.random() * themeWords.length)];
    dispatch(setTheme(theme));
    dispatch(setWord(randomWord));
    navigate('/game'); // Redirige vers le jeu
  };

  return (
    <div className="home">
      <h1>Choisissez un thème</h1>
      <button onClick={() => handleThemeSelect('monde')}>Monde</button>
      <button onClick={() => handleThemeSelect('technologie')}>Technologie</button>
      <button onClick={() => handleThemeSelect('culture')}>Culture</button>
      <button onClick={() => handleThemeSelect('reunion')}>Reunion</button>
    </div>
  );
};

export default Home;
