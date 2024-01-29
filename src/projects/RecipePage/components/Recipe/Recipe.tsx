import s from "./Recipe.module.css";
import recipeImage from "../../../../assets/images/image-omelette.jpeg";
import { useNavigate } from "react-router-dom";

type LinkType = {
  url: string;
  title: string;
};

const Link = ({ url, title }: LinkType) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(url);

  return <div onClick={handleClick}>{title}</div>;
};

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
      <div className={s.gridMenu}>
        <Link url="/preparation" title="Preparation time" />
        <Link url="/ingredients" title="Ingredients" />
        <Link url="/instructions" title="Instructions" />
        <Link url="/nutrition" title="Nutrition" />
      </div>
    </div>
  );
};

export default Recipe;
