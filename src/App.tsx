import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/HomePage";
//import ExamCard from "./Component/ExamCard";

import ModalButton from "./Component/Modal/ModalButton";
import Challenge from "./Page/ChallengeBoard/Challenge";
import ExerciseQuestionPage from "./Page/ExerciseQuestion/ExerciseQuestionPage";
import Card from "./Component/Card";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "login", element: <ModalButton /> },
    { path: "exercise", element: <ExerciseQuestionPage /> },
    // { path: "card", element: <Exam /> },
    { path: "challenge", element: <Challenge /> },
    { path: "card", element: <Card /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
