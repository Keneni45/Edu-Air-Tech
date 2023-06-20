import { configureStore } from "@reduxjs/toolkit";
import userSelectionReducer from "./feature/userSelectionSlice";
export const store = configureStore({
  reducer: { userSelectionSlice: userSelectionReducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
