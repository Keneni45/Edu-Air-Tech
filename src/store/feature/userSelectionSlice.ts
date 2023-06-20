import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserSelectionState {
  grade: number;
  courseId: string;
  selectedCourse: string;
}
const initialState: UserSelectionState = {
  grade: 9,
  courseId: "",
  selectedCourse: "",
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
    setGrade: (state, action: PayloadAction<number>) => {
      state.grade = action.payload;
    },
  },
});
export const { setCourseId, setGrade, setSelectedCourse } =
  userSelectionSlice.actions;
export default userSelectionSlice.reducer;
