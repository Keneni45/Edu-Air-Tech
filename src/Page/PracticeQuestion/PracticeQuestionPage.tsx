import { useEffect, useState } from "react";

import { fetchPracticeQuestions } from "../../service/practiceQuestionService";
import { Question } from "../../models/questions.model";

export default function PracticeQuestionPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getQuestions = async (page: number) => {
    const { count, questions } = await fetchPracticeQuestions(page);
    setQuestions(questions);
    setTotalCount(count);
  };

  useEffect(() => {
    getQuestions(1);
  }, []);
  return <div></div>;
}
