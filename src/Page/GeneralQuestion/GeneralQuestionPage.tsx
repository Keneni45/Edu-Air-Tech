import { useEffect, useState } from "react";
import { Question } from "../../models/questions.model";
import { fetchGeneralQuestions } from "../../service/fetchGeneralQuestionService";

export default function GeneralQuestionPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getQuestion = async (page: number) => {
    const { count, questions } = await fetchGeneralQuestions(page);
    setQuestions(questions);
    setTotalCount(count);
  };
  useEffect(() => {
    getQuestion(1);
  }, []);
  return (
    <div>
      <div>
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <div key={index}>{question.questionText}</div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
}
