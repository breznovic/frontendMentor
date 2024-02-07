import { useState } from "react";
import Sidebar from "../../common/Sidebar/Sidebar";
import s from "./Intermediate.module.css";
import { ComponentType } from "../Junior/Junior";
import JobList from "./JobList/JobList";

let apps: ComponentType[] = [
  { component: <JobList />, url: "/intermediate/joblist" }, 
];

const Intermediate = () => {
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

export default Intermediate;
