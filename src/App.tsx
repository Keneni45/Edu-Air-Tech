import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ExamCard from "./Component/ExamCard";

import ModalButton from "./Component/Modal/ModalButton";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "login", element: <ModalButton /> },
    { path: "card", element: <ExamCard /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
