import s from "./Pagination.module.css";

type PropsType = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = (props: PropsType) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber: number) => {
    props.onPageChange(pageNumber);
  };

  return (
    <nav>
      <ul className={s.pagination}>
        {pageNumbers.map((p) => (
          <li
            key={p}
            className={p === props.currentPage ? s.active : ""}
            onClick={() => handlePageChange(p)}
          >
            {p}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
