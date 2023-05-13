import { SelectOption } from "../Component/SelectDropdown";
import axios from "../api/axios";

export async function fetchExamSubCategories(examCategoryId: string) {
  let raw = await axios.get(`/sub-exam-categories`);
  let data = raw.data as { _id: string; name: string }[];
  return data.map((subExamCat) => {
    return {
      value: subExamCat._id,
      label: subExamCat.name,
    };
  }) as SelectOption[];
}
