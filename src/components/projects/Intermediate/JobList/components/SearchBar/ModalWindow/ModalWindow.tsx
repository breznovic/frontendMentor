import s from "./ModalWindow.module.css";

type PropsType = {
    setShowModal: (value: boolean) => void;
  };

const ModalWindow = (props: PropsType) => {
  const modalClose = () => props.setShowModal(false);

  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <p>You choose too many tags</p>
        <div className={s.button} onClick={modalClose}>
          Ok
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
