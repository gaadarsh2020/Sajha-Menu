import React from "react";
import Hero from "../../components/Hero";
import Sajhaworks from "../../components/sajhaworks";
import ClearThings from "../../components/ClearThings";
import Offering from "../../components/Offering";
import Choice from "../../components/Choice";
import Swiper from "../../components/swiper";
import Digitize from "../../Digitize";
import { Parallax } from "react-scroll-parallax";

const Home = () => {
  return (
    <>
      <Hero />
      <ClearThings />
      <Offering />
      <Choice />
      <Swiper />
      <Digitize />
    </>
  );
};

export default Home;
