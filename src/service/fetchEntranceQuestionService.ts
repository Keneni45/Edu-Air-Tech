import { SelectOption } from "../Component/SelectDropdown";
import axios from "../api/axios";
import { Question } from "../models/questions.model";

type GetQuestionDto = {
  questions: Question[];
  count: number;
};
type getQuestionsQuery = {
  course: number | string;
  year: number | string;
  subCategory?: number | string;
  page?: number | string;
  limit?: number | string;
};

export async function fetchEntranceQuestion({
  course,
  year,
  page,
  subCategory,
}: getQuestionsQuery) {
  let req: any = {
    course: course.toString(),
    year: parseInt(year.toString()),
    page: parseInt(page?.toString() || "1"),
  };
  if (subCategory && subCategory !== "") req.subCategory = subCategory;

  let raw = await axios.post(`/questions`, req, {});
  let data = raw.data;
  return data as GetQuestionDto;
}
type yearDto = {
  year: number;
};
export async function fetchAvailableYears(courseId: number | string) {
  let raw = await axios.get(`/questions/courses/get-years/${courseId}`);
  let data = raw.data as yearDto[];
  console.log(data[0]);

  return data.map((d) => ({ label: d.year, value: d.year })) as SelectOption[];
}
