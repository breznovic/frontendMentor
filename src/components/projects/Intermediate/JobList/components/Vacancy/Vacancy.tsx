import s from "./Vacancy.module.css";

type VacancyType = {
  id: number;
  company: string;
  logo: string;
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
      <div className={s.description}>{props.position}</div>
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
