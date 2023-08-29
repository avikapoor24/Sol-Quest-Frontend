import { RootState } from "./store";

export const selectedCounterSelector = (state: RootState) => state.reducer.value;

export const selectedWalletAddresSelector = (state: RootState) =>
  state.reducer.walletAddress;
