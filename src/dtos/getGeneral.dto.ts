import { Question } from "../models/questions.model";

export type GetGeneralQuestionDto = {
  questions: Question[];
  count: number;
};
