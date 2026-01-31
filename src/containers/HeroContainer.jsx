import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import apni_pic from "/images/image.svg";
import ProjectContainer from "./ProjectContainer";
import Projectsbox from "../components/Projectsbox";


const HeroContainer = () => {
  return (
    <div className="relative h-screen">
      <Header />
      <div className="flex  justify-start items-start px-30">
        <div className="mt-13.75">
          <Intro />
        </div>

        <div>
          <img
            className="absolute top-0 right-0 -z-10"
            src={apni_pic}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
