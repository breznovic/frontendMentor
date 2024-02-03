import s from "./Sidebar.module.css";
import logo from "../../assets/images/frontendLogo.svg";

const Sidebar = () => {
  return (
    <div className={s.main}>
      <img src={logo} />
      <div>My challenges</div>
      <div className={s.menu}>
        <div>Junior</div>
        <div>Intermediate</div>
        <div>Advanced</div>
      </div>
    </div>
  );
};

export default Sidebar;
