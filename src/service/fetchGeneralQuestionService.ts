import axios from "../api/axios";

export async function fetchGeneralQuestionService(grade: string) {
  const generalQuestion = await axios.get("");
  return generalQuestion;
}
