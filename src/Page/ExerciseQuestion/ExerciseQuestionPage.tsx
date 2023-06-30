import { useEffect, useState } from "react";
import SelectDropdown, { SelectOption } from "../../Component/SelectDropdown";
import {
  fetchExerciseQuestionFromServer,
  getAvailableExerciseChapter,
  getAvailableExerciseNumberFromServer,
} from "../../service/fetchExerciseQuestionService";

import { Exercise } from "../../models/exercises.model";
import { useLocation } from "react-router-dom";

export default function ExerciseQuestionPage() {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [questions, setQuestions] = useState<Exercise[]>([]);
  const [chapter, setChapter] = useState<SelectOption[]>([]);
  const [selectChapter, setSelectedChapter] = useState("");
  const [exerciseOptions, setExerciseOptions] = useState<SelectOption[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const location = useLocation();

  const fetchChapter = async (courseId: string, grade: number) => {
    const chapter = (await getAvailableExerciseChapter(
      courseId,
      grade
    )) as SelectOption[];
    if (chapter instanceof Error) {
      setErrorMessage("there is no available chapter for this course");
    } else {
      setErrorMessage("");
      setChapter((prev) => chapter);
    }
  };

  const fetchExercise = async (chapterId: string) => {
    const exercise = (await getAvailableExerciseNumberFromServer(
      chapterId
    )) as SelectOption[];
    if (exercise instanceof Error) {
      setErrorMessage(
        "there is no available exercise for this course and grade"
      );
    } else {
      setErrorMessage("");
      setExerciseOptions((prev) => exercise);
      if (exercise.length > 0) {
        setSelectedExercise(exercise[0].value.toString());
      } else {
        setErrorMessage(
          "There is No Available Exercise for this Grade and Course. First insert Exercise"
        );
      }
    }
  };

  const getQuestion = async (exerciseId: number) => {
    const questions = await fetchExerciseQuestionFromServer(exerciseId);
    if (questions.length == 0) {
      setErrorMessage("No Questions inserted Yet For this Exercise");
      return;
    }
    setQuestions(questions);
  };
  useEffect(() => {
    fetchExercise(selectChapter);
    fetchChapter(selectedCourse, parseInt(selectedGrade));
  }, []);
  useEffect(() => {
    const exerciseId = location.state.exerciseId;
    if (exerciseId) getQuestion(exerciseId);
  }, []);

  const handleSelectedExerciseNumber = (e: any) => {
    setSelectedExercise(e.target.value);
  };
  const handleSelectedChapter = (e: any) => {
    setSelectedChapter(e.target.value);
  };
  return (
    <div>
      <div>
        <SelectDropdown
          title="Chapter"
          handleSelect={handleSelectedChapter}
          items={chapter}
        />
        <SelectDropdown
          title="Exercise Number"
          handleSelect={handleSelectedExerciseNumber}
          items={exerciseOptions}
        />
      </div>
      <div>
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <div key={index}>{question.questions}</div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
}
