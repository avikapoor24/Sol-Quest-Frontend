import { combineReducers, configureStore } from "@reduxjs/toolkit";
import api from "./api";
import { reducer } from "./slice";



const red = combineReducers({
  [api.reducerPath]: api.reducer,
  reducer: reducer,
});


export const store = configureStore({
  reducer: red,
  middleware: (gDM) =>
    gDM({
    }).concat(api.middleware),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
