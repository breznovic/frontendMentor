import { Outlet } from "react-router-dom";
import s from "./Layout.module.css";
import { Link } from "../../../../../common/Link/Link";

const Layout = () => {
  return (
    <div className={s.main}>
      <div className={s.layout}>
        <Outlet />
        <div className={s.gridMenu}>
          <Link url="/preparation" title="Preparation time" />
          <Link url="/ingredients" title="Ingredients" />
          <Link url="/instructions" title="Instructions" />
          <Link url="/nutrition" title="Nutrition" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
