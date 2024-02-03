import s from "./Ingredients.module.css";

const Ingredients = () => {
  return (
    <div className={s.layout}>
      <div className={s.title}>Ingredients</div>
      <div className={s.list}>
        <ul>
          <li>
            <span>2-3 large eggs</span>
          </li>
          <li>
            <span>Salt, to taste</span>
          </li>
          <li>
            <span>Pepper, to taste</span>
          </li>
          <li>
            <span>1 tablespoon of butter or oil</span>
          </li>
          <li>
            <span>optional fillings: cheese, sausages, herbs</span>
          </li>
        </ul>
      </div>
      <hr className={s.line} />
    </div>
  );
};

export default Ingredients;
