import s from "./JobList.module.css";
import header from "./images/bg-header-desktop.svg";

const JobList = () => {
  return (
    <div>
      <img src={header} className={s.header} />
      <div className={s.main}></div>
    </div>
  );
};

export default JobList;
