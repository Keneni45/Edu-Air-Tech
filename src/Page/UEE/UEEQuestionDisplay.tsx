import { useEffect, useRef, useState } from "react";
import SelectDropdown, { SelectOption } from "../../Component/SelectDropdown";
import { Question } from "../../models/questions.model";
import styles from "./uee.module.css";
import {
  fetchAvailableYears,
  fetchEntranceQuestion,
} from "../../service/fetchEntranceQuestionService";
import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
} from "html-react-parser";
import { fetchQuestionCoursesSelectionOption } from "../../service/fetchCourseService";
import { ProgressBar } from "../../Component/ProgressBar";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      return <span>{domToReact(domNode.children)}</span>;
    }
  },
};

type optionType = "option_a" | "option_b" | "option_c" | "option_d";
type getQuestionProp = {
  course: string;
  year: string | number;
  page: number;
};
export default function UEEQuestionDisplay() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [yearOptions, setYearOptions] = useState<SelectOption[]>([]);
  const [courseOptions, setCourseOptions] = useState<SelectOption[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | number>("");
  const [totalCount, setTotalCount] = useState<number>(0);
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
    setYearOptions((p) => yearsFromServer);
    setSelectedYear((p) => yearsFromServer[0].value || 2010);
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
    }
  }, [selectedCourse]);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      getQuestions({ course: selectedCourse, year: selectedYear, page: 1 });
    }
  }, [selectedYear]);

  const getQuestions = async ({
    course: selectedCourse,
    year: selectedYear,
    page,
  }: getQuestionProp) => {
    const { count, questions } = await fetchEntranceQuestion({
      course: selectedCourse,
      year: selectedYear,
      page,
    });
    setQuestions(questions);
    setTotalCount(count);
  };

  const onPageChange = async (page: number) => {
    const { count, questions } = await fetchEntranceQuestion({
      course: selectedCourse,
      year: selectedYear,
      page: page,
    });
    setQuestions(questions);
    setTotalCount(count);
  };

  const handleSelectYear = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectedYear((e.target as HTMLSelectElement).value);
  };
  const handleSelectCourse = (e: React.FormEvent<HTMLSelectElement>) => {
    setSelectedCourse((e.target as HTMLSelectElement).value);
    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv" + selectedCourse);
  };

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionHeader}>
        <div className={styles.questionHeader}>
          <SelectDropdown
            title="course"
            items={courseOptions}
            handleSelect={handleSelectCourse}
          />
          <SelectDropdown
            title="year"
            items={yearOptions}
            handleSelect={handleSelectYear}
          />
        </div>
      </div>
      <div className={styles.questionBg1}>
        <div className={styles.questionDisplay}>
          <div>
            <ProgressBar />
          </div>
          <div className={styles.questionDirection}>
            <p>
              1.1:-<b>DIRECTION:-</b>Choose the best answer by clicking on the
              box
            </p>
          </div>
          {questions.length > 0 ? (
            <div className={styles.question}>
              {questions.map((question, index) => (
                <div key={index} style={{ marginTop: "5px" }}>
                  <div className={styles.question}>
                    {question.questionNumber}.{" "}
                    {parse(question.questionText, options)}
                  </div>

                  <div className="question-option">
                    <div className="checkbox">
                      {["a", "b", "c", "d"].map((letter, i) => (
                        <div key={i}>
                          <label className="control">
                            <input
                              type="radio"
                              name={`color-${index}`}
                              value={"option_" + letter}
                              className="control_input visually-hidden"
                            />
                            <span className="control__indicator"></span>
                          </label>
                          <label>
                            <span style={{ marginLeft: "0.5rem" }}>
                              {`${letter.toLocaleUpperCase()}. `}
                              {parse(
                                question[
                                  ("option_" + letter) as optionType
                                ].toString(),
                                options
                              )}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
