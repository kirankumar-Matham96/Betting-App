import { createSlice } from "@reduxjs/toolkit";

// Sample mock games (Replace with API call later)
const mockGames = [
  { id: 1, name: "Game 1", minBet: 100, maxBet: 1000, status: "OPEN" },
  { id: 2, name: "Game 2", minBet: 50, maxBet: 500, status: "OPEN" },
];

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: mockGames,
    bets: [], // Store user's bets
  },
  reducers: {
    placeBet: (state, action) => {
      state.bets.push(action.payload);
    },
  },
});

export const gameSelector = (state) => state.game;
export const { placeBet } = gameSlice.actions;
export default gameSlice.reducer;
