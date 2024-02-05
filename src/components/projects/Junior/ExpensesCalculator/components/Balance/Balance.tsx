import s from "./Balance.module.css";
import logo from "../../../../../../assets/images/logo.svg";

const Balance = () => {
  return (
    <div className={s.container}>
      <div className={s.main}>
        <div className={s.data}>
          <div className={s.balance}>My balance</div>
          <div className={s.amount}>$921.48</div>
        </div>
        <img src={logo} className={s.img} />
      </div>
    </div>
  );
};

export default Balance;
