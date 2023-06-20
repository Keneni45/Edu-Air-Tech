import axios from "../api/axios";

export async function fetchExerciseCourses() {
  const response = await axios.get(`courses/get/all`);
  let course = response.data as { _id: string; name: string }[];
  return course;
}

export async function fetchQuestionCoursesSelectionOption() {
  const response = await axios.get(`/courses/get/all`);
  let courseOptions = response.data as { _id: string; name: string }[];
  return courseOptions.map((c) => ({ label: c.name, value: c._id }));
}
