import React from "react";
import HeroSection from "../HeroSection";

import { homeObjOne, homeObjtwo, homeObjthree, homeObjfour } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjtwo} />
      <HeroSection {...homeObjthree} />
      <HeroSection {...homeObjfour} />
    </>
  );
}

export default Home;
