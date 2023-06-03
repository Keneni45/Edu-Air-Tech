import { useEffect, useRef, useState } from "react";
import SelectDropdown, { SelectOption } from "../../Component/SelectDropdown";
import { Question } from "../../models/questions.model";
import styles from "./uee.module.css";
import { fetchExamCategories } from "../../service/examCatagoryService";
import {
  fetchAvailableYears,
  fetchEntranceQuestion,
} from "../../service/fetchEntranceQuestionService";

import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
} from "html-react-parser";
import {
  fetchExerciseGrade,
  fetchQuestionCourses,
  fetchQuestionCoursesSelectionOption,
} from "../../service/fetchCourseService";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      return <span>{domToReact(domNode.children)}</span>;
    }
  },
};

export default function UEEQuestionDisplay() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [yearOptions, setYearOptions] = useState<SelectOption[]>([]);
  const [courseOptions, setCourseOptions] = useState<SelectOption[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | number>("");
  const isInitialMount = useRef(true);

  const getCourses = async () => {
    const courseFromServer: any = await fetchQuestionCoursesSelectionOption();
    setCourseOptions(courseFromServer);
    setSelectedCourse(courseFromServer[0]._id);
    await getYears(courseFromServer[0]._id);
    await getQuestions({ course: selectedCourse, year: selectedYear, page: 1 });
  };
  async function getYears(courseId: string | number) {
    let yearsFromServer: SelectOption[] = await fetchAvailableYears(courseId);
    setYearOptions(yearsFromServer);
    setSelectedYear(yearsFromServer[0].value || 2010);
  }
  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log("called on update only");
      getYears(selectedCourse);
      //   getYears(selectedCourse);
    }
  }, [selectedCourse]);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      getQuestions({ course: selectedCourse, year: selectedYear, page: 1 });
    }
  }, [selectedYear]);

  useEffect(() => {
    getCourses();
  }, []);

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
      course: selectedCourse,
      year: selectedYear,
      page,
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
            title="course"
            items={courseOptions}
            handleSelect={handleSelectedCourse}
          />
          <SelectDropdown
            title="year"
            items={yearOptions}
            handleSelect={handleSelectedYear}
          />
        </div>
        <div>kkkkkkkkkkkkkkkkkkkkk</div>
      </div>
    </div>
  );
}
