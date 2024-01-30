import s from "./Recipe.module.css";
import recipeImage from "../../../../assets/images/image-omelette.jpeg";

const Recipe = () => {
  return (
    <div className={s.container}>
      <img src={recipeImage} />
      <div className={s.title}>Simple Omelette Recipe</div>
      <div className={s.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
  );
};

export default Recipe;
