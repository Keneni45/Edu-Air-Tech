import axios from "../api/axios";

export async function fetchExerciseQuestionService(
  grade: string,
  course: string
) {
  const exerciseQuestions = axios.get(`${grade}`);
  return exerciseQuestions;
}
