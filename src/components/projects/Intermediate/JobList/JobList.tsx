import { ActiveTagsProvider } from "./AppContext";
import s from "./JobList.module.css";
import VacancyList from "./components/VacancyList/VacancyList";
import header from "./images/bg-header-desktop.svg";

const JobList = () => {
  return (
    <ActiveTagsProvider>
      <div>
        <img src={header} className={s.header} />
        <div className={s.main}>
          <VacancyList />
        </div>
      </div>
    </ActiveTagsProvider>
  );
};

export default JobList;
