import { User } from "../models/user.model";

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
