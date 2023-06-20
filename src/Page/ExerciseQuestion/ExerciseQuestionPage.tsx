import { useEffect, useState } from "react";
import SelectDropdown, { SelectOption } from "../../Component/SelectDropdown";
import { getAvailableExerciseNumberFromServer } from "../../service/fetchExerciseQuestionService";
import { Question } from "../../models/questions.model";

export default function ExerciseQuestionPage() {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [questins, setQuestions] = useState<Question[]>([]);
  const [chapter, setChapter] = useState<SelectOption[]>([]);
  const [chapterSelected, setChapterSelected] = useState("");
  const [exerciseOptions, setExerciseOptions] = useState<SelectOption[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const fetchExercise = async (courseId: string, grade: number) => {
    const exercise = (await getAvailableExerciseNumberFromServer(
      grade,
      courseId
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
  useEffect(() => {
    fetchExercise(selectedCourse, parseInt(selectedGrade));
  }, []);

  const handleSelectedExerciseNumber = (e: any) => {
    setSelectedExercise(e.target.value);
  };
  const handleSelectedChapter = (e: any) => {
    setChapterSelected(e.target.value);
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
    </div>
  );
}
