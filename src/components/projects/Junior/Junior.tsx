import { useState } from "react";
import Sidebar from "../../common/Sidebar/Sidebar";
import ExpensesCalculator from "./ExpensesCalculator/ExpensesCalculator";
import s from "./Junior.module.css";
import RecipePage from "./RecipePage/RecipePage";

export type ComponentType = {
  component: JSX.Element;
  url: string;
};

let apps: ComponentType[] = [
  { component: <RecipePage />, url: "/junior/recipe" },
  { component: <ExpensesCalculator />, url: "/junior/calculator" },
];

const Junior = () => {
  const [appIndex, setAppIndex] = useState(0);

  const currentApp = apps[appIndex].component;

  const prevApp = () => {
    setAppIndex((prevIndex) =>
      prevIndex === 0 ? apps.length - 1 : prevIndex - 1
    );
  };

  const nextApp = () => {
    setAppIndex((prevIndex) => (prevIndex + 1) % apps.length);
  };

  return (
    <div className={s.main}>
      <Sidebar />
      <div className={s.btnGroup}>
        <button onClick={prevApp} className={s.prevBtn}>
          &lt;
        </button>
        <div>{currentApp}</div>
        <button onClick={nextApp} className={s.nextBtn}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Junior;
