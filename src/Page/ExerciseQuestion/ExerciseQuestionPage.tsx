import { useEffect, useState } from "react";
import SelectDropdown, { SelectOption } from "../../Component/SelectDropdown";
import {
  fetchExerciseQuestionFromServer,
  getAvailableExerciseChapter,
  getAvailableExerciseNumberFromServer,
} from "../../service/fetchExerciseQuestionService";

import { ExerciseQuestion } from "../../models/exercises.model";
import { useLocation } from "react-router-dom";
import styles from "./exercise.module.css";
import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
} from "html-react-parser";
import { ProgressBar } from "../../Component/ProgressBar";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      return <span>{domToReact(domNode.children)}</span>;
    }
  },
};

type optionType = "option_a" | "option_b" | "option_c" | "option_d";

export default function ExerciseQuestionPage() {
  const [selectedExercise, setSelectedExercise] = useState("");
  const [questions, setQuestions] = useState<ExerciseQuestion[]>([]);
  const [chapter, setChapter] = useState<SelectOption[]>([]);
  const [selectChapter, setSelectedChapter] = useState("");
  const [exerciseOptions, setExerciseOptions] = useState<SelectOption[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const location = useLocation();
  const setSelectedGrade = location.state.setSelectedGrade;
  interface selectGrade {
    setSelectedGrade: string;
  }

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
    fetchChapter(selectedCourse, parseInt(setSelectedGrade));
  }, []);
  useEffect(() => {
    const exerciseId = location.state.exerciseId;
    console.log("Exercise id is   ----" + exerciseId);

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
      <div>{setSelectedGrade.grade_10}</div>\
      <p>hello:{setSelectedGrade.grade_9}</p>
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
