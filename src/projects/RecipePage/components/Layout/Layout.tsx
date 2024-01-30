import { Outlet, useNavigate } from "react-router-dom";
import s from "./Layout.module.css";

type LinkType = {
  url: string;
  title: string;
};

const Layout = () => {
  const Link = ({ url, title }: LinkType) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(url);

    return <div onClick={handleClick}>{title}</div>;
  };

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
