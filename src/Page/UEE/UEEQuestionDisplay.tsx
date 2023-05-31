import { useEffect, useRef, useState } from "react";
import SelectDropdown, { SelectOption } from "../../Component/SelectDropdown";
import { Question } from "../../models/questions.model";
import styles from "./uee.module.css";
import { fetchExamCategories } from "../../service/examCatagoryService";
import {
  fetchAvailableYears,
  fetchEntranceQuestion,
} from "../../service/fetchEntranceQuestionService";

export default function UEEQuestionDisplay() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [yearOptions, setYearOptions] = useState<SelectOption[]>([]);
  const [courseOptions, setCourseOptions] = useState<SelectOption[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | number>("");
  const isInitialMount = useRef(true);

  const getCourses = async () => {
    let examCats = await fetchExamCategories();
    let UEECourses = examCats[0].courses;
    let crs: SelectOption[] = [];
    for (const course of UEECourses) {
      crs.push({ label: course.name, value: course._id });
    }
    setCourseOptions((p) => crs);
    setSelectedCourse((p) => UEECourses[0]._id);
    await getYears(UEECourses[0]._id);
    await getQuestions({ course: selectedCourse, year: selectedYear, page: 1 });
  };

  async function getYears(courseId: string | number) {
    let yearsFromServer: SelectOption[] = await fetchAvailableYears(courseId);
    setYearOptions((p) => yearsFromServer);
    setSelectedYear((p) => yearsFromServer[0].value);
  }
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      getYears(selectedCourse);
    }
  }, [selectedCourse]);

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      getQuestions({ course: selectedCourse, year: selectedYear, page: 1 });
    }
  }, [selectedYear, selectedCourse]);

  const getQuestions = async ({
    course,
    year,
    page,
  }: {
    course: string;
    year: string | number;
    page: number;
  }) => {
    const { count, questions } = await fetchEntranceQuestion({
      course,
      year,
      page: 1,
    });
    setQuestions(questions);
  };

  function handleSelectedYear(e: any) {
    setSelectedYear(e.target.value);
  }
  function handleSelectedCourse(e: any) {
    setSelectedCourse(e.target.value);
  }
  return (
    <div>
      <div>
        <div className={styles.ueeHeader}>
          <SelectDropdown
            title=""
            items={courseOptions}
            handleSelect={handleSelectedCourse}
          />
          <SelectDropdown
            title=""
            items={yearOptions}
            handleSelect={handleSelectedYear}
          />
        </div>
        <div>kkkkkkkkkkkkkkkkkkkkk</div>
      </div>
    </div>
  );
}
