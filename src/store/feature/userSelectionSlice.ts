import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserSelectionState {
  gradeId: string;
  courseId: string;
  selectedCourse: string;
  selectedGrade: string;
}
const initialState: UserSelectionState = {
  gradeId: "",
  courseId: "",
  selectedCourse: "",
  selectedGrade: "",
};
export const userSelectionSlice = createSlice({
  name: "userSelection",
  initialState,
  reducers: {
    setCourseId: (state, action: PayloadAction<string>) => {
      state.courseId = action.payload;
    },
    setSelectedCourse: (state, action: PayloadAction<string>) => {
      state.selectedCourse = action.payload;
    },
    setSelectedGrade: (state, action: PayloadAction<string>) => {
      state.selectedGrade = action.payload;
    },
    setGrade: (state, action: PayloadAction<string>) => {
      state.gradeId = action.payload;
    },
  },
});
export const { setCourseId, setGrade, setSelectedCourse } =
  userSelectionSlice.actions;
export default userSelectionSlice.reducer;
