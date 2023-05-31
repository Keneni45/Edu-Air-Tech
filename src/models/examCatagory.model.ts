export type Course = {
  _id: string;
  name: string;
  hasDirections: boolean;
};
export type ExamCategory = {
  _id: string;
  name: string;
  courses: Course[];
};
