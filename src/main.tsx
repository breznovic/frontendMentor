import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ExpensesCalculator from "./components/projects/Junior/ExpensesCalculator/ExpensesCalculator.tsx";
import RecipePage from "./components/projects/Junior/RecipePage/RecipePage.tsx";
import Junior from "./components/projects/Junior/Junior.tsx";
import Intermediate from "./components/projects/Intermediate/Intermediate.tsx";
import JobList from "./components/projects/Intermediate/JobList/JobList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/junior",
    element: <Junior />,
  },
  {
    path: "/junior/recipe",
    element: <RecipePage />,
  },
  {
    path: "/junior/calculator",
    element: <ExpensesCalculator />,
  },
  {
    path: "/intermediate",
    element: <Intermediate />,
  },
  {
    path: "/intermediate/joblist",
    element: <JobList />,
  },
  /*   {
    path: "/advanced",
    element: <Advanced />,
  },  */
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
