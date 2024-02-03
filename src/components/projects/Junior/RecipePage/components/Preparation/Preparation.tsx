import s from "./Preparation.module.css";

const Preparation = () => {
  return (
    <div className={s.layout}>
      <div className={s.title}>Preparation time</div>
      <div className={s.list}>
        <ul>
          <li>
            <span className={s.bold}>Total:</span> Approximately 10 minutes
          </li>
          <li>
            <span className={s.bold}>Preparation: </span>5 minutes
          </li>
          <li>
            <span className={s.bold}>Cooking:</span> 5 minutes
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Preparation;
