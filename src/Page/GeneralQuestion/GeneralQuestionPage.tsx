import { useEffect, useState } from "react";
import { Question } from "../../models/questions.model";
import { fetchGeneralQuestions } from "../../service/fetchGeneralQuestionService";
import styles from "./general.module.css";
import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
} from "html-react-parser";
import Pagination from "../../Component/Pagination";
const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      return <span>{domToReact(domNode.children)}</span>;
    }
  },
};

type optionType = "option_a" | "option_b" | "option_c" | "option_d";

export default function GeneralQuestionPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const getQuestion = async () => {
      const { count, questions } = await fetchGeneralQuestions(activePage);
      setQuestions(questions);
      setTotalCount(count);
    };

    getQuestion();
  }, [activePage]);

  const onPageChange = async (page: number) => {
    setActivePage(page);
  };
  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className={styles.questionBg1}>
      <div className={styles.questionDisplay}>
        <div className={styles.questionDirection}>
          <p>
            1.1:-<b className="text-primary mt-8">DIRECTION:-</b>Choose the best
            answer by clicking on the box
          </p>
        </div>
        <div className="container-fluid mb-10">
          {questions.length > 0 ? (
            <div>
              {questions.length > 0 ? (
                <div>
                  <div className="list-group mb-4">
                    {questions.map((question, index) => (
                      <div
                        key={question._id}
                        className="list-group-item align-item-center ">
                        {question.questionNumber + "."}
                        {parse(question.questionText, options)}
                        <div>
                          {["a", "b", "c", "d"].map((letter, index) => (
                            <div key={index}>
                              <label className="control">
                                <input
                                  type="radio"
                                  name={`color-${index}`}
                                  value={"option_" + letter}
                                  checked={selectedValue == "option_" + letter}
                                  onChange={handleChange}
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
                    ))}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <p>Loading ...</p>
          )}

          {/* {questions.length > 0 ? (
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
          )} */}
        </div>
      </div>
      {/* <div>
        <Pagination
          itemsPerPage={10}
          totalItems={totalCount}
          currentPage={activePage}
          onPageChange={onPageChange}
        />
      </div> */}
    </div>
  );
}
