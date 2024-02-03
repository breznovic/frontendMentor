import s from "./Instructions.module.css";

const Instructions = () => {
  return (
    <div className={s.layout}>
      <div className={s.title}>Instructions</div>
      <div className={s.list}>
        <ol>
          <li>
            <span className={s.bold}>Lorem ipsum:</span> Eaque quia, iusto
            dolorem labore, nesciunt provident neque laudantium illo temporibus
            quis veritatis ipsa. Dolor sit amet consectetur adipisicing elit.
            Quisquam, soluta harum omnis officiis est iste.
          </li>
          <li>
            <span className={s.bold}>Lorem ipsum: </span> Dolor sit amet
            consectetur adipisicing elit. Quisquam, soluta harum omnis officiis
            est iste.
          </li>
          <li>
            <span className={s.bold}>Lorem ipsum:</span> Eaque quia, iusto
            dolorem labore, nesciunt provident neque laudantium illo temporibus
            quis veritatis ipsa. Dolor sit amet consectetur
          </li>
          <li>
            <span className={s.bold}>Lorem ipsum:</span> Eaque quia, iusto
            dolorem labore, nesciunt provident neque laudantium illo temporibus
            quis veritatis ipsa. Dolor sit amet consectetur adipisicing elit.
            Quisquam, soluta harum omnis officiis est iste.
          </li>
          <li>
            <span className={s.bold}>Lorem ipsum:</span> aque quia, iusto
            dolorem labore, nesciunt provident neque laudantium illo temporibus
            quis veritatis ipsa. Dolor sit amet consectetur adipisicing elit.
            Quisquam, soluta harum omnis officiis est iste.
          </li>
          <li>
            <span className={s.bold}>Lorem ipsum:</span> Dolor sit amet
            consectetur adipisicing elit. Quisquam, soluta harum omnis officiis
            est iste.
          </li>
        </ol>
      </div>
      <hr className={s.line} />
    </div>
  );
};

export default Instructions;
