import { Item } from "./Item/Item";
import s from "./Nutrition.module.css";

export type ItemType = {
  title: string;
  parameter: string;
};

const items: ItemType[] = [
  { title: "Calories", parameter: "277Kcal" },
  { title: "Carbs", parameter: "0g" },
  { title: "Protein", parameter: "20g" },
  { title: "Fat", parameter: "22g" },
];

const Nutrition = () => {
  return (
    <div className={s.layout}>
      <div className={s.title}>Nutrition</div>
      <div className={s.text}>
        The table below shows nutritional values per serving without the
        additional fillings.
      </div>
      {items.map((i) => {
        return (
          <div key={i.title}>
            <Item title={i.title} parameter={i.parameter} />
          </div>
        );
      })}
    </div>
  );
};

export default Nutrition;
