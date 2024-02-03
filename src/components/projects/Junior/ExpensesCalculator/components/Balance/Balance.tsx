import s from "./Balance.module.css";
import logo from "../../../../../../assets/images/logo.svg";

const Balance = () => {
  return (
    <div className={s.main}>
      <div className={s.data}>
        <div>My balance</div>
        <div>$921.48</div>
      </div>
      <img src={logo} className={s.img} />
    </div>
  );
};

export default Balance;
