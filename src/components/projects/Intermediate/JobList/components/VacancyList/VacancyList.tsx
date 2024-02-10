import { useContext, useState } from "react";
import Vacancy from "../Vacancy/Vacancy";
import vacancies from "../../data.json";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import { ActiveTagsContext } from "../../AppContext";
import s from "./VacancyList.module.css";

const VacancyList = () => {
  const { activeTags } = useContext(ActiveTagsContext);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastVacancy = currentPage * itemsPerPage;
  const indexOfFirstVacancy = indexOfLastVacancy - itemsPerPage;

  const filteredVacancies =
    activeTags.length > 0
      ? vacancies.filter((v) =>
          activeTags.every((tag) =>
            [...v.languages, ...v.tools, v.role, v.level].includes(tag)
          )
        )
      : vacancies;

  const currentVacancies = filteredVacancies.slice(
    indexOfFirstVacancy,
    indexOfLastVacancy
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.searchBar}>
          <SearchBar />
        </div>
        <div className={s.vacancies}>
          {currentVacancies.length > 0 ? (
            currentVacancies.map((v) => (
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
            ))
          ) : (
            <div>No vacancies found.</div>
          )}
        </div>
      </div>
      <div className={s.pagination}>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={filteredVacancies.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default VacancyList;
