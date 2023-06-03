import { SelectOption } from "../Component/SelectDropdown";
import axios from "../api/axios";

export async function fetchQuestionCourses() {
  const response = await axios.get(`/courses/get/all`);
  let course = response.data as { _id: string; name: string }[];
  return course;
}
export async function fetchExerciseGrade() {
  const grade = await axios.get(`/grade/get/all`);
  const data = grade.data as { _id: string; name: string }[];
  return data.map((g) => ({ label: g.name, value: g._id })) as SelectOption[];
}

export async function fetchQuestionCoursesSelectionOption() {
  const response = await axios.get(`/courses/get/all`);
  let courseOptions = response.data as { _id: string; name: string }[];
  return courseOptions.map((c) => ({ label: c.name, value: c._id }));
}
