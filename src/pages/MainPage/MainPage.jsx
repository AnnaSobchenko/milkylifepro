import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Helpful from "../../components/Helpful/Helpful";
import Price from "../../components/Price/Price";
import { getPrices } from "../../redux/prices/pricesOperations";


const MainPage = () => {
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
