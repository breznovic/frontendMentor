import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import { Link } from "../../../../../common/Link/Link";

const Layout = () => {
  return (
    <div className={s.main}>
      <div className={s.layout}>
        <Outlet />
        <div className={s.gridMenu}>
          <Link url="/recipe/preparation" title="Preparation time" />
          <Link url="/recipe/ingredients" title="Ingredients" />
          <Link url="/recipe/instructions" title="Instructions" />
          <Link url="/recipe/nutrition" title="Nutrition" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
