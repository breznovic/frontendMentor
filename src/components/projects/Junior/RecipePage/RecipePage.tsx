import s from "./RecipePage.module.css";
import recipeImage from "../../../../assets/images/image-omelette.jpeg";

const RecipePage = () => {
  return (
    <div className={s.main}>
      <div className={s.layout}>
        <div className={s.recipe}>
          <img src={recipeImage} />
          <div className={s.title}>Simple Omelette Recipe</div>
          <div className={s.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
        <div className={s.gridMenu}>
          <div>Preparation time</div>
          <div>Ingredients</div>
          <div>Instructions</div>
          <div>Nutrition</div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
