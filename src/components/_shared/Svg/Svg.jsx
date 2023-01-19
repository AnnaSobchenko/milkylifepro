import Icons from "../../../images/symbol-defs.svg";
import s from "./Svg.module.scss";

const Svg = ({ name, isAllView = false }) => {
  return (
    <svg
      className={!isAllView ? s.navIcon : s.navIconTrue}
      width="23px"
      height="23px"
    >
      <use xlinkHref={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Svg;
