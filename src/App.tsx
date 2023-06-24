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
import ExerciseCard from "./Page/ExerciseCard/ExerciseCard";
//import UEEQuestionDisplay from "./Page/UEE/UEEQuestionDisplay";
import GeneralQuestionPage from "./Page/GeneralQuestion/GeneralQuestionPage";
import UEEQuestionDisplay from "./Page/UEE/UEEQuestionDisplay";
import StartExamPage from "./Page/StartExamPage/StartExamPage";
import PracticeQuestionPage from "./Page/PracticeQuestion/PracticeQuestionPage";
import ExitExamPage from "./Page/ExitExam/ExitExamPage";
import samle from "./Page/UEE/samle";
import Sample from "./Page/UEE/samle";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    // { path: "modal", element: <ModalButton /> },
    { path: "login", element: <Login /> },
    // { path: "createpassword", element: <CreateNewPassword /> },
    // { path: "exercise", element: <ExerciseQuestionPage /> },
    // { path: "card", element: <Exam /> },
    // { path: "challenge", element: <Challenge /> },
    // { path: "card", element: <Card /> },
    { path: "register", element: <Registartion /> },
    // { path: "reset", element: <ResetPassword /> },
    // { path: "otp", element: <OtpVerficationCode /> },
    // { path: "new", element: <CreateNewPassword /> },
    { path: "exercise-card", element: <ExerciseCard /> },
    { path: "entrance", element: <UEEQuestionDisplay /> },
    { path: "general", element: <GeneralQuestionPage /> },
    { path: "exercise", element: <ExerciseQuestionPage /> },
    { path: "start-exam", element: <StartExamPage /> },
    { path: "practice", element: <PracticeQuestionPage /> },
    { path: "exit", element: <ExitExamPage /> },
    { path: "samle", element: <Sample /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
