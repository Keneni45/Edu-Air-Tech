import axios from "../api/axios";

import { Question } from "../models/questions.model";
type GetQuestionDto = {
  questions: Question[];
  count: number;
};

export async function fetchGeneralQuestions(page: number) {
  let raw = await axios.get(`/general-questions?page=${page}`);
  let data = raw.data;
  return data as GetQuestionDto;
}
