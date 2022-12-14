import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/theme/themeSlice";
import { getTheme } from "../../redux/theme/themeSelector";
import s from "./SwitchTheme.module.scss";

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  return (
    <div className={s.switch_theme_div}>
      {theme === "light" ? (
        <button
          className={s.btnD}
          onClick={() => dispatch(changeTheme("dark"))}
        >
          <span role="img" aria-label="moon">
            &#127766;
          </span>
        </button>
      ) : (
        <button
          className={s.btnL}
          onClick={() => dispatch(changeTheme("light"))}
        >
          <span role="img" aria-label="sun">
            &#127768;
          </span>
        </button>
      )}
    </div>
  );
};

export default SwitchTheme;
