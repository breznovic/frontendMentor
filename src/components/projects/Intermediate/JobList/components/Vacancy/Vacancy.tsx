import s from "./Vacancy.module.css";
import logo from "../../images/faceit.svg";
import { useContext } from "react";
import { ActiveTagsContext } from "../../AppContext";

export type VacancyType = {
  id: number;
  company: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

const Vacancy = (props: VacancyType) => {
  const { activeTags, updateActiveTags } = useContext(ActiveTagsContext);

  const handleClick = (tag: string) => {
    if (activeTags.includes(tag)) {
      updateActiveTags(activeTags.filter((activeTag) => activeTag !== tag));
    } else {
      updateActiveTags([...activeTags, tag]);
    }
  };

  let languages = props.languages.map((l, index) => (
    <div
      key={index}
      className={`${s.tag} ${activeTags.includes(l) ? s.active : ""}`}
      onClick={() => handleClick(l)}
    >
      {l}
    </div>
  ));

  let tools = props.tools.map((t, index) => (
    <div
      key={index}
      className={`${s.tag} ${activeTags.includes(t) ? s.active : ""}`}
      onClick={() => handleClick(t)}
    >
      {t}
    </div>
  ));

  return (
    <div className={s.mainBlock}>
      <div className={s.description}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className={s.companyDescription}>
          <div className={s.companyInfo}>
            <div className={s.companyTitle}>{props.company}</div>
            {props.new && <div className={s.new}>NEW!</div>}
            {props.featured && <div className={s.featuring}>FEATURED</div>}
          </div>
          <div className={s.position}>{props.position}</div>
          <div className={s.additionalInfo}>
            <div>{props.postedAt}</div>
            <div>&#8226;</div>
            <div>{props.contract}</div>
            <div>&#8226;</div>
            <div>{props.location}</div>
          </div>
        </div>
      </div>
      <div className={s.tags}>
        <div
          className={`${s.tag} ${
            activeTags.includes(props.role) ? s.active : ""
          }`}
          onClick={() => handleClick(props.role)}
        >
          {props.role}
        </div>
        <div
          className={`${s.tag} ${
            activeTags.includes(props.level) ? s.active : ""
          }`}
          onClick={() => handleClick(props.level)}
        >
          {props.level}
        </div>
        <div className={`${s.tagsContainer}`}>{languages}</div>
        <div className={`${s.tagsContainer}`}>{tools}</div>
      </div>
    </div>
  );
};

export default Vacancy;
