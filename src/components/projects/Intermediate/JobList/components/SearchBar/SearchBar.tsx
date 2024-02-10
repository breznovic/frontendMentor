import { useContext, useState } from "react";
import { ActiveTagsContext } from "../../AppContext";
import s from "./SearchBar.module.css";
import remove from "../../images/icon-remove.svg";

const SearchBar = () => {
  const { activeTags } = useContext(ActiveTagsContext);
  const [showModal, setShowModal] = useState(true);
  const modalClose = () => setShowModal(false);
  return (
    <>
      {activeTags.length > 9 ? (
        showModal && (
          <div className={s.modal}>
            <div className={s.modalContent}>
              <p>You choose too many tags</p>
              <div className={s.button} onClick={modalClose}>Ok</div>
            </div>
          </div>
        )
      ) : (
        <div className={s.main}>
          <div className={s.tags}>
            {activeTags.map((tag) => (
              <div key={tag} className={s.tagWrapper}>
                <div className={s.tag}>{tag}</div>
                <img src={remove} className={s.delete} />
              </div>
            ))}
          </div>
          <div className={s.clearContainer}>
            <div className={s.spacer}></div>
            <div className={s.clear}>Clear</div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
