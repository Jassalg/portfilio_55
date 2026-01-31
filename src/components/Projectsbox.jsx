import React from "react";

const Projectsbox = ({heading , para , Image , isFirst}) => {
  return (
    <div className={`flex h-131 w-248 text-black bg-gray-300 justify-between items-center rounded-lg ${isFirst? "flex-row-reverse":""}`}>
        <div className="flex rounded-lg flex-col gap-4 justify-center items-start pl-23 w-[50%] rounded-2xl    ">
          <h2 className="text-[40px] font-bold">{heading}</h2>
          <p className="text-[20px] w-[85%]">
            {para}
          </p>
          <button className="rounded-2xl text-black px-8 py-1 mt-8 bg-yellow-400">View Project</button>
        </div>
        <div className="w-[50%] rounded-tr-lg">
          <img className="w-full rounded-t-lg" src={Image} alt="pic" />
        </div>
    </div>
  );
};

export default Projectsbox;
