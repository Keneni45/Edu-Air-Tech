import { Question } from "../models/questions.model";

export type GetExerciseQuestion = {
  questions: Question[];
  count: number;
};
