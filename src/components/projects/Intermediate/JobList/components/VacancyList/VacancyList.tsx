import Vacancy from "../Vacancy/Vacancy";
import s from "./VacancyList.module.css";
import vacancies from "../../data.json";

const VacancyList = () => {
  let vacanciesList = vacancies.map((v) => (
    <div key={v.id}>
      <Vacancy
        position={v.position}
        company={v.company}
        contract={v.contract}
        featured={v.featured}
        id={v.id}
        new={v.new}
        role={v.role}
        level={v.level}
        postedAt={v.postedAt}
        location={v.location}
        languages={v.languages}
        tools={v.tools}
      />
    </div>
  ));

  return <div>{vacanciesList}</div>;
};

export default VacancyList;
