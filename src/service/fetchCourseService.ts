import { SelectOption } from "../Component/SelectDropdown";
import axios from "../api/axios";
import { ExamCategory } from "../models/examCatagory.model";
//`/courses/get/all/`
export async function fetchExerciseCourses() {
  const response = await axios.get(`courses/get/all`);
  let course = response.data as { _id: string; name: string }[];
  return course;
}
export async function fetchExamCategories() {
  let raw = await axios.get(`/exam-categories-with-courses`);
  let data = raw.data;
  return data as ExamCategory[];
}
export async function fetchExerciseGrade() {
  const grade = await axios.get(`exercise/grade/get/all`);
  const data = grade.data as { _id: string; name: string }[];
  return data.map((g) => ({ label: g.name, value: g._id })) as SelectOption[];
}

export async function fetchQuestionCoursesSelectionOption() {
  const response = await axios.get(`/courses/get/all`);
  let courseOptions = response.data as { _id: string; name: string }[];
  return courseOptions.map((c) => ({ label: c.name, value: c._id }));
}
