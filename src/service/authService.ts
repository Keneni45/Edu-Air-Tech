import { AxiosError } from "axios";
import axios from "../api/axios";
import { User } from "../models/user.model";

export async function login(phone: string, password: string) {
  try {
    let response = await axios.post("/users/login", { phone, password });
    return response?.data?.body as User;
  } catch (error) {
    console.log("axios catch block");

    return error as AxiosError;
  }
}
export async function signup(form: any) {
  try {
    let formData = new FormData();
    // formData.append("image", image);
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("password", form.password);
    let response = await axios.post("/users/signup", formData);
    return response?.data?.body as User;
  } catch (error) {
    console.log("axios catch block");

    return error as AxiosError;
  }
}
export async function fetchUserRewardPoint() {
  let response = await axios.get("users/get-reward-point");
  let data = response.data as { rewardPoint: number };
  return data.rewardPoint;
}

export async function loginWithGoogle(token: string) {
  const response = await axios.post("/api/auth/google/login", {
    token,
  });
  console.log(response.data);

  const user = response.data as {
    fullName: string;
    rewardPoint: number;
    token: string;
  };
  return user;
}
export async function loginWithFacebook(token: string) {
  const response = await axios.post("/api/auth/facebook/login", {
    token,
  });
  console.log(response.data);

  const user = response.data as {
    fullName: string;
    rewardPoint: number;
    token: string;
  };
  return user;
}
export async function loginWithLinkedin(token: string) {
  const response = await axios.post("/api/auth/linkedin/login", {
    token,
  });
  console.log(response.data);

  const user = response.data as {
    fullName: string;
    rewardPoint: number;
    token: string;
  };
  return user;
}
