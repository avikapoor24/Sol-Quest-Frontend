import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface State {
  value: number;
  walletAddress: string;
}

const initialState: State = {
  value: 0,
  walletAddress: "",
};

export const questSlice = createSlice({
  name: "sol-Quest",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setWalletAddress: (state, action: PayloadAction<string>) => {
      state.walletAddress = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const reducer = questSlice.reducer;
export const actions = questSlice.actions;
