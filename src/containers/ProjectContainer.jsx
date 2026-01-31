import React from "react";
import Projectsbox from "../components/Projectsbox";
import p1 from "/images/pexels-elly-fairytale-3823207 1.svg";
import p2 from "/images/image2.svg";

const ProjectContainer = () => {
  return (
    <div className="w-full flex flex-col gap-22  ">
      <div className="flex justify-center items-center  bold text-2xl px-50 ">
        Projects
      </div>
      <div className="flex justify-center items-center ">
        <Projectsbox isFirst={false} heading={"Project Name"} para={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} Image={p1} />
      </div>
      <div className="flex justify-center items-center ">
        <Projectsbox isFirst={true} heading={"About Me"} para={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} Image={p2} />
      </div> 
      <div className="flex justify-center items-center ">
        <Projectsbox isFirst={false} heading={"About Me"} para={"I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."} Image={p2} />
      </div> 
    </div>
  );
};

export default ProjectContainer;