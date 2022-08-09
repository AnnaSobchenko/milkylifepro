import { React } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icons from "../../../images/symbol-defs.svg";
import s from "./AppBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsAdmin,
  getIsLoggedIn,
  getUserName,
} from "../../../redux/auth/authSelector";
import { logout } from "../../../redux/auth/authOperations";
import SwitchTheme from "../../SwitchTheme/SwitchTheme";
import { getTheme } from "../../../redux/theme/themeSelector";
import Svg from "../../_shared/Svg/Svg";
// import SwitchLang from "../SwitchLang/SwitchLang";

const Logo = require("../../../images/logo.png");

const AppBar = () => {
  const userInfo = useSelector(getUserName);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);
  const isAdmin = useSelector(getIsAdmin);

  return (
    <>
      <header
        className={s.header}
        style={{
          backgroundColor:
            theme === "light"
              ? "var(--primary-bg-color)"
              : "var(--second-bg-color)",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <div className={s.logo}>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className={s.header_navLink}>
          {isAdmin && (
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              <p> Users</p>
              <Svg name="users" />
            </NavLink>
          )}

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
          >
            <p>Головна</p>
            <Svg name="home" />
          </NavLink>
          <NavLink
            to="/mama-marafon"
            className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
          >
            <p>Мама-марафон</p>
            <Svg name="marafon" />
          </NavLink>
        </div>

        <div className={s.logout}>
          {!isLoggedIn && (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? s.activeStyle : s.link)}
            >
              <p>&#9032;</p>
              <Svg name="login" />
            </NavLink>
          )}
          {isLoggedIn && (
            <div
              className={s.flex}
              style={{
                backgroundColor:
                  theme === "light"
                    ? "var(--primary-bg-color)"
                    : "var(--second-bg-color)",
                color: theme === "light" ? "black" : "white",
              }}
            >
              <div className={s.name_wrapper}>
                <div
                  className={s.letter_wrapper}
                  style={{
                    backgroundColor: theme === "light" ? "#b3d4af" : "#7c817b",
                    color: theme === "light" ? "black" : "white",
                  }}
                >
                  {userInfo.slice(0, 1) && (
                    <span className={s.firs_letter}>
                      {userInfo.slice(0, 1)}
                    </span>
                  )}
                </div>

                {userInfo && (
                  <div className={s.text_transform}>
                    <span className={`${s.name} ${s.animation__scss}`}>
                      {userInfo}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
          <SwitchTheme />

          {isLoggedIn && (
            <NavLink
              to="/"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <div
                className={s.navIconMenu_wrapper}
                style={{
                  backgroundColor:
                    theme === "light"
                      ? "var(--primary-bg-color)"
                      : "var(--second-bg-color)",
                  fill: theme === "light" ? "black" : "white",
                }}
              >
                <svg
                  className={s.navIcon_signOut}
                  style={{
                    backgroundColor:
                      theme === "light"
                        ? "var(--primary-bg-color)"
                        : "var(--second-bg-color)",
                    // fill: theme === "light" ? "black" : "white",
                  }}
                  width="16px"
                  height="16px"
                >
                  <use xlinkHref={`${Icons}#icon-sign-out`} />
                </svg>
              </div>
            </NavLink>
          )}
        </div>
        {/* <SwitchLang /> */}
      </header>
      <Outlet className="container" />
    </>
  );
};

export default AppBar;
