import { NavLink } from "react-router-dom";
import s from "./MainPage.module.scss";
import { getTheme } from "../../redux/theme/themeSelector";

import React from "react";
import { useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";


const MainPage = () => {
  const theme = useSelector(getTheme);
  return (
   <>
   <Hero />
   <About />
   </>
  )
};

export default MainPage;
