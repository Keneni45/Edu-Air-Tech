import axios from "../api/axios";

export async function fetchExerciseCourses() {
  const response = await axios.get(`/courses/get/all`);
  let course = response.data as { _id: string; name: string }[];
  return course;
}
