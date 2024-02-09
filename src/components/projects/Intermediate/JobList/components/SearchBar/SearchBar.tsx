import s from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={s.main}>
      <div className={s.tags}>[]</div>
      <div className={s.clear}>Clear</div>
    </div>
  );
};

export default SearchBar;
