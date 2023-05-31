import axios from "../api/axios";
import { ExamCategory } from "../models/examCatagory.model";

export async function fetchExamCategories() {
  let raw = await axios.get(`/exam-categories-with-courses`);
  let data = raw.data;
  return data as ExamCategory[];
}
