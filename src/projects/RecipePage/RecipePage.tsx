import { Route, Routes } from "react-router-dom";
import s from "./RecipePage.module.css";
import Recipe from "./components/Recipe/Recipe";
import Preparation from "./components/Preparation/Preparation";
import Ingredients from "./components/Ingredients/Ingredients";
import Instructions from "./components/Instructions/Instructions";
import Nutrition from "./components/Nutrition/Nutrition";
import Layout from "./components/Layout/Layout";

const RecipePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Recipe />} />
        <Route path="preparation" element={<Preparation />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="nutrition" element={<Nutrition />} />
      </Route>
    </Routes>
  );
};

export default RecipePage;
 

