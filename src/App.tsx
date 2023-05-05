import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ProgressBar from "./Component/ProgressBar";
import QuestionPage from "./Page/QuestionPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "bar", element: <ProgressBar /> },
    { path: "question", element: <QuestionPage /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
