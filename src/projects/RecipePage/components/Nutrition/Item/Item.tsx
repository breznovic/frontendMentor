import { ItemType } from "../Nutrition";
import s from "./Item.module.css";

export const Item = (props: ItemType) => {
  return (
    <div>
      <div className={s.layout}>
        <div className={s.title}>{props.title}</div>
        <div className={s.parameter}>{props.parameter}</div>
      </div>
      <hr className={s.line} />
    </div>
  );
};
