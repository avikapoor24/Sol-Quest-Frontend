import { RootState } from "./store";

export const selectedCounterSelector = (state: RootState) => state.value;

export const selectedWalletAddresSelector = (state: RootState) =>
  state.walletAddress;
