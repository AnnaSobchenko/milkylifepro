import { NavLink } from "react-router-dom";
import s from "./MainPage.module.scss";
import { getTheme } from "../../redux/theme/themeSelector";

import React from "react";
import { useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Helpful from "../../components/Helpful/Helpful";
import Price from "../../components/Price/Price";


const MainPage = () => {
  const theme = useSelector(getTheme);
  return (
   <>
   <Hero />
   <About />
   <Helpful />
   <Price />
   </>
  )
};

export default MainPage;
