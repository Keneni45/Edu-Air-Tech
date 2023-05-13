import axios from "../api/axios";

export async function fetchExerciseQuestionService() {
  const exerciseQuestions = axios.get("");
  return exerciseQuestions;
}
