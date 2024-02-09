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
      <ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={pageNumber === props.currentPage ? "active" : ""}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
