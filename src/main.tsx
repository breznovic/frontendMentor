import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Preparation from "./components/projects/Junior/RecipePage/components/Preparation/Preparation.tsx";

import Instructions from "./components/projects/Junior/RecipePage/components/Instructions/Instructions.tsx";
import Nutrition from "./components/projects/Junior/RecipePage/components/Nutrition/Nutrition.tsx";
import ExpensesCalculator from "./components/projects/Junior/ExpensesCalculator/ExpensesCalculator.tsx";

import Layout from "./components/projects/Junior/RecipePage/components/Layout/Layout.tsx";
import Recipe from "./components/projects/Junior/RecipePage/components/Recipe/Recipe.tsx";
import Ingredients from "./components/projects/Junior/RecipePage/components/Ingredients/Ingredients.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/recipe",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Recipe />,
      },
      {
        path: "preparation",
        element: <Preparation />,
      },
      {
        path: "ingredients",
        element: <Ingredients />,
      },
      {
        path: "instructions",
        element: <Instructions />,
      },
      {
        path: "nutrition",
        element: <Nutrition />,
      },
    ],
  },
  {
    path: "/calculator",
    element: <ExpensesCalculator />,
  },
  /* {
    path: "/junior",
    element: <Junior />,
  },
  {
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
