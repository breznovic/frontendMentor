import s from "./Sidebar.module.css";
import logo from "../../../assets/images/frontendLogo.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "../Link/Link";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className={s.main}>
      <img src={logo} onClick={handleLogoClick} />
      <div className={s.title}>My challenges</div>
      <div className={s.menu}>
        <Link title="Junior" url="/junior" />
        <div>Intermediate</div>
        <div>Advanced</div>
      </div>
    </div>
  );
};

export default Sidebar;
