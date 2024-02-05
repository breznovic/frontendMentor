import s from "./SpendingChart.module.css";
import days from "../../../data.json";
import { useState } from "react";

const SpendingChart = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  let data = days.map((d, index) => (
    <div className={s.chart} key={d.day}>
      <div
        className={`${s.column} ${activeIndex === index ? s.activeColumn : ""}`}
        onClick={() => handleClick(index)}
        style={{ height: `${d.amount * 3}px` }}
        data-amount={`$${d.amount}`}
      ></div>
      <div className={s.columnTitle}>{d.day}</div>
    </div>
  ));

  return <div className={s.container}>{data}</div>;
};

export default SpendingChart;
