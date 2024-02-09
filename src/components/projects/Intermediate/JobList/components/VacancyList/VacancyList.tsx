import { useState } from "react";
import Vacancy from "../Vacancy/Vacancy";
import s from "./VacancyList.module.css";
import vacancies from "../../data.json";
import Pagination from "../Pagination/Pagination";

const VacancyList = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastVacancy = currentPage * itemsPerPage;
  const indexOfFirstVacancy = indexOfLastVacancy - itemsPerPage;
  const currentVacancies = vacancies.slice(
    indexOfFirstVacancy,
    indexOfLastVacancy
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        {currentVacancies.map((v) => (
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
        ))}
      </div>
      <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={vacancies.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default VacancyList;
