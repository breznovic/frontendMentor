import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ExpensesCalculator from "./components/projects/Junior/ExpensesCalculator/ExpensesCalculator.tsx";
import RecipePage from "./components/projects/Junior/RecipePage/RecipePage.tsx";
import Junior from "./components/projects/Junior/Junior.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/junior",
    element: <Junior />,
  },
  /*  {
    path: "/intermediate",
    element: <Intermediate />,
  },
  {
    path: "/advanced",
    element: <Advanced />,
  }, */
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
