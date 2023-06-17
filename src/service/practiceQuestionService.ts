import axios from "../api/axios";
import { Question } from "../models/questions.model";
type GetQuestionDto = {
  questions: Question[];
  count: number;
};

export async function fetchPracticeQuestions(page: number) {
  const practice = await axios.get(`/practice-questions?page=${page}`);
  const data = practice.data;
  return data as GetQuestionDto;
}
