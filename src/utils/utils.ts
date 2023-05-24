import { User } from "../models/user.model";
import * as Yup from "yup";

export function persistUser(user: User) {
  localStorage.setItem("coydoe_user", JSON.stringify(user));
}
export function getUser() {
  const user = localStorage.getItem("coydoe_user");
  if (user) {
    return JSON.parse(user) as User;
  }
  return null;
}
export function removeUser() {
  localStorage.removeItem("coydoe_user");
}
// export function validationSchema() {
const phoneRegExp =
  /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("FullName is required"),
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(20, "Username must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  phone: Yup.string()
    .required("phone is required")
    .min(10, "phone must be at least 6 characters")
    .matches(phoneRegExp, "Please enter valid Phone number with country code"),
  country: Yup.string().required("country is required"),
  region: Yup.string().required("region is required"),
  gender: Yup.string().required("gender is required"),
  studentType: Yup.string().required("Student Type is required"),
});
