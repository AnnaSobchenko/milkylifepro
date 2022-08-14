import { NavLink } from "react-router-dom";
import s from "./MainPage.module.scss";
import { getTheme } from "../../redux/theme/themeSelector";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Helpful from "../../components/Helpful/Helpful";
import Price from "../../components/Price/Price";
import { getPrices } from "../../redux/prices/pricesOperations";


const MainPage = () => {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrices());
  }, []);
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
