import { useContext, useState } from "react";
import { ActiveTagsContext } from "../../AppContext";
import s from "./SearchBar.module.css";
import remove from "../../images/icon-remove.svg";
import ModalWindow from "./ModalWindow/ModalWindow";

const SearchBar = () => {
  const { activeTags, deleteActiveTags, clearAllTags } = useContext(ActiveTagsContext);
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleClearTags = () => {
    clearAllTags();
  };

  return (
    <>
      {activeTags.length > 8
        ? showModal && <ModalWindow setShowModal={setShowModal} />
        : ""}
      {activeTags.length > 0 ? (
        <div className={s.main}>
          <div className={s.tags}>
            {activeTags.map((tag) => (
              <div key={tag} className={s.tagWrapper}>
                <div className={s.tag}>{tag}</div>
                <img
                  src={remove}
                  className={s.delete}
                  onClick={() => deleteActiveTags(tag)}
                />
              </div>
            ))}
          </div>
          <div className={s.clearContainer}>
            <div className={s.spacer}></div>
            <div className={s.clear} onClick={handleClearTags}>Clear</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchBar;
