import { useNavigate } from "react-router-dom";

type LinkType = {
  url: string;
  title?: string;
};

export const Link = ({ url, title }: LinkType) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };

  return <div onClick={handleClick}>{title}</div>;
};
