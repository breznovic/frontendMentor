import s from "./RecipePage.module.css";
import Recipe from "./components/Recipe/Recipe";

const RecipePage = () => {
  return <div className={s.main}>
    <div className={s.layout}>
      <Recipe/>
    </div>
  </div>;
};

export default RecipePage;
