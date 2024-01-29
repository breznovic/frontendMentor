import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Preparation from "./projects/RecipePage/components/Preparation/Preparation.tsx";
import Ingredients from "./projects/RecipePage/components/Ingredients/Ingredients.tsx";
import Instructions from "./projects/RecipePage/components/Instructions/Instructions.tsx";
import Nutrition from "./projects/RecipePage/components/Nutrition/Nutrition.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/preparation",
    element: <Preparation />,
  },
  {
    path: "/ingredients",
    element: <Ingredients />,
  },
  {
    path: "/instructions",
    element: <Instructions />,
  },
  {
    path: "/nutrition",
    element: <Nutrition />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
