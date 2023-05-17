import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/HomePage";
//import ExamCard from "./Component/ExamCard";

import ModalButton from "./Component/Modal/ModalButton";
import Challenge from "./Page/ChallengeBoard/Challenge";
import ExerciseQuestionPage from "./Page/ExerciseQuestion/ExerciseQuestionPage";
import Card from "./Component/Card";
import Login from "./Page/Login/Login";
import Registartion from "./Page/Registartion/Registartion";
import ResetPasswor from "./Page/ResetPassword/ResetPasswor";
import OtpVerficationCode from "./Page/Otp/OtpVerficationCode";
import CreateNewPassword from "./Page/CreateNewPassword/CreateNewPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "modal", element: <ModalButton /> },
    { path: "login", element: <Login /> },
    { path: "exercise", element: <ExerciseQuestionPage /> },
    // { path: "card", element: <Exam /> },
    { path: "challenge", element: <Challenge /> },
    { path: "card", element: <Card /> },
    { path: "signup", element: <Registartion /> },
    { path: "reset", element: <ResetPasswor /> },
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
