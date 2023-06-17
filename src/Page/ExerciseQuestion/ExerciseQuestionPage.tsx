import { useEffect, useState } from "react";
import SelectDropdown, { SelectOption } from "../../Component/SelectDropdown";
import { fetchExamCategories } from "../../service/fetchCourseService";
import { getAvailableExerciseFromServer } from "../../service/fetchExerciseQuestionService";
import { gradeOptions } from "../../constant";

export default function ExerciseQuestionPage() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedExercise, setSelectedExercise] = useState("");
  const [courses, setCourses] = useState<SelectOption[]>([]);
  const [chapter, setChapter] = useState<SelectOption[]>([]);
  const [gradeSelect, setGradeSelected] = useState("");
  const [exerciseNumber, setExerciseNumber] = useState<SelectOption[]>([]);
  const [chapterSelected, setChapterSelected] = useState("");

  async function fetchInitialFromServer() {
    let data = await fetchExamCategories();
    let coursesOption = [];
    for (const course of data[0].courses) {
      coursesOption.push({ label: course.name, value: course._id });
    }
    setCourses(coursesOption);
    setSelectedCourse(coursesOption[0].value);
    fetchExercise(coursesOption[0].value, parseInt(gradeOptions[0].value));
  }
  useEffect(() => {
    fetchInitialFromServer();
  }, []);
  const fetchExercise = async (courseId: string, grade: number) => {
    const exercise = (await getAvailableExerciseFromServer(
      grade,
      courseId
    )) as SelectOption[];
  };
  const handleGradeSelect = (e: any) => {
    setGradeSelected(e.target.value);
  };

  const handleSelectedCourse = (e: any) => {
    setSelectedCourse(e.target.value);
  };
  const handleExerciseNumber = (e: any) => {
    setExerciseNumber(e.target.value);
  };
  const handleSelectChapter = (e: any) => {
    setChapterSelected(e.target.value);
  };
  useEffect(() => {
    const handleGradeSelect = (e: any) => {
      setGradeSelected(e.target.value);
    };

    const handleSelectedCourse = (e: any) => {
      setSelectedCourse(e.target.value);
    };
    const handleExerciseNumber = (e: any) => {
      setExerciseNumber(e.target.value);
    };
    const handleSelectChapter = (e: any) => {
      setChapterSelected(e.target.value);
    };
  }, []);
  return (
    <div>
      <div>
        <SelectDropdown
          title="course"
          handleSelect={handleSelectedCourse}
          items={courses}
        />
        <SelectDropdown
          title="chapter"
          handleSelect={handleSelectChapter}
          items={chapter}
        />
      </div>
    </div>
  );
}
