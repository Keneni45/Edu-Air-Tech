import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    garde_9: "Grade 9",
    garde_10: "Grade 10",
    garde_11: "Grade 11",
    garde_12: "Grade 12",
  },
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setSelectedGrade: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setSelectedGrade } = selectionSlice.actions;

export default selectionSlice.reducer;
