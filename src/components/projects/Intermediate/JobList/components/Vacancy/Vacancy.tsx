import s from "./Vacancy.module.css";
import logo from "../../images/faceit.svg";

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
  let languages = props.languages.map((l, index) => (
    <div key={index} className={s.tag}>
      {l}
    </div>
  ));

  let tools = props.tools.map((t, index) => (
    <div key={index} className={s.tag}>
      {t}
    </div>
  ));

  return (
    <div className={s.mainBlock}>
      <div className={s.description}>
        <div>
          <img src={logo} />
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
            <div> {props.contract}</div>
            <div>&#8226;</div>
            <div>{props.location}</div>
          </div>
        </div>
      </div>
      <div className={s.tags}>
        <div className={s.tag}>{props.role}</div>
        <div className={s.tag}>{props.level}</div>
        <div className={s.tagsContainer}>{languages}</div>
        <div className={s.tagsContainer}>{tools}</div>
      </div>
    </div>
  );
};

export default Vacancy;
