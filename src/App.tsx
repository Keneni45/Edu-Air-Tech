import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/HomePage";
//import ExamCard from "./Component/ExamCard";

import ModalButton from "./Component/Modal/ModalButton";
import Challenge from "./Page/ChallengeBoard/Challenge";
import ExerciseQuestionPage from "./Page/ExerciseQuestion/ExerciseQuestionPage";
import Card from "./Component/Card";
import Login from "./Page/Login/Login";
import Registartion from "./Page/Registartion/Registartion";

import OtpVerficationCode from "./Page/Otp/OtpVerficationCode";
import CreateNewPassword from "./Page/CreateNewPassword/CreateNewPassword";
import ResetPassword from "./Page/ResetPassword/ResetPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "modal", element: <ModalButton /> },
    { path: "login", element: <Login /> },
    { path: "createpassword", element: <CreateNewPassword /> },
    { path: "exercise", element: <ExerciseQuestionPage /> },
    // { path: "card", element: <Exam /> },
    { path: "challenge", element: <Challenge /> },
    { path: "card", element: <Card /> },
    { path: "register", element: <Registartion /> },
    { path: "reset", element: <ResetPassword /> },
    { path: "otp", element: <OtpVerficationCode /> },
    { path: "new", element: <CreateNewPassword /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
