import axios from "axios";
import { getUser } from "../utils/utils";
let token = "";
const user = getUser();
if (user) {
  token = user.token;
}

export default axios.create({
  baseURL: "https://coydoe.onrender.com/api",
  headers: { Authorization: `Bearer ${token}` },
});
