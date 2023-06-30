import { createSlice } from "@reduxjs/toolkit";

export const gradeSlice = createSlice({
  name: "gradeSelection",
  initialState: {
    user: {
      grade_9: "Grade 9",
      grade_10: "Grade 10",
      grade_11: "Grade 11",
      grade_12: "Grade 12",
    },
  },
  reducers: {
    selectGrade9: (state) => {
      state.user.grade_9;
    },
    selectGrade10: (state) => {
      state.user.grade_10;
    },
    selectGrade11: (state) => {
      state.user.grade_11;
    },
    selectGrade12: (state) => {
      state.user.grade_12;
    },
    selectGradeByGrade: (state, action) => {
      state.user += action.payload;
    },
  },
});
export const { selectGrade9, selectGrade12 } = gradeSlice.actions;
export default gradeSlice.reducer;
