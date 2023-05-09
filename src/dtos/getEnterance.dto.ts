import { Question } from "../models/questions.model";

export type GetEntranceQuestionDto = {
  questions: Question[];
  count: number;
  year: number;
  course: string;
};
