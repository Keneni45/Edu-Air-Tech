import { SelectOption } from "../Component/SelectDropdown";
import axios from "../api/axios";
import { Exercise } from "../models/exercises.model";

type GetQuestionDto = {
  questions: Exercise[];
  count: number;
};

export async function fetchExerciseCourses() {}

export async function fetchExerciseQuestionFromServer(
  exerciseId: string | any
) {
  let raw = await axios.get(`/exercise-questions/${exerciseId}`);
  let data = raw.data;
  return data as Exercise[];
}
export async function getAvailableExerciseFromServer(
  grade: number,
  courseId: string
) {
  try {
    let raw = await axios.post("/exercises/get-all", { grade, courseId });
    let data = raw.data as Exercise[];
    if (data.length == 0) return [];
    return data.map((exercise) => ({
      label: `Exercise ${exercise.exerciseNumber}`,
      value: exercise._id,
    })) as SelectOption[];
  } catch (error) {
    return error;
  }
}
