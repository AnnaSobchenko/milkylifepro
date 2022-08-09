import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/theme/themeSelector";
import Icons from "../../../images/symbol-defs.svg";
import s from "./Svg.module.scss";

const Svg = ({ name }) => {
  const theme = useSelector(getTheme);
  return (
    <svg className={s.navIcon} width="23px" height="23px">
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Svg;
