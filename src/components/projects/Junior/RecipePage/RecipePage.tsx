import s from "./RecipePage.module.css";
import Recipe from "./components/Recipe/Recipe";

const RecipePage = () => {
  return (
    <div className={s.main}>
      <div className={s.layout}>
        <Recipe />
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
