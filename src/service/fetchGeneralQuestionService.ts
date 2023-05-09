import axios from "../api/axios";

export async function fetchGeneralQuestionService() {
  const generalQuestion = await axios.get("");
  return generalQuestion;
}
