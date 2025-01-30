import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  theme: string | null;
  word: string;
  guessedLetters: string[];
  attemptsLeft: number;
}

const initialState: GameState = {
  theme: null,
  word: "",
  guessedLetters: [],
  attemptsLeft: 4
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setWord: (state, action: PayloadAction<string>) => {
      state.word = action.payload;
    },
    guessLetter: (state, action: PayloadAction<string>) => {
      const letter = action.payload;
      if (state.word.includes(letter)) {
        state.guessedLetters.push(letter);
      } else {
        state.attemptsLeft -= 1;
      }
    },
    resetGame: (state) => {
      state.theme = null;
      state.word = "";
      state.guessedLetters = [];
      state.attemptsLeft = 4;
    }
  }
});

export const { setTheme, setWord, guessLetter, resetGame } = gameSlice.actions;

export default gameSlice.reducer;
