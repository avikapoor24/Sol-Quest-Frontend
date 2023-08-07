import { RootState } from "./store";

export const selectedCounterSelector = (state: RootState) => state.counter.value;

