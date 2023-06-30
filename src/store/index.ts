import { configureStore } from "@reduxjs/toolkit";
import { setSelectedGrade } from "./feature/userSelectionSlice";
//import userSelectionReducer from "./feature/userSelectionSlice";
export const store = configureStore({
  reducer: { selectionSlice: setSelectedGrade },
});
//export const storeGrade = configureStore({ reducer: {gradeS} });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
