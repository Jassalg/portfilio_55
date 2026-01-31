import React, { useState } from "react";

const Header = () => {
  const [show,setShow] = useState(false);
  
  return (
    <div className="sticky top-2 bg-green-900/70 mx-50 rounded-2xl ">
      <div className="flex justify-between items-center px-30 py-3 ">
        <div>
          <h1 onMouseOver={()=>{
            setShow(!show);
          }} className={`text-[18px] font-bold text-white ${show?"text-yellow-400 text-3xl" :""}`}>{show?"Hi Bro":"Tanish Jassal"}</h1>
        </div>
        <div className="flex gap-8 list-none z-10">
          <li className="text-gray-300 px-8 py-1 rounded-2xl hover:text-red-400 hover:bg-gray-200 hover:cursor-pointer">
            About
          </li>
          <li className="text-gray-300 px-8 py-1 rounded-2xl  hover:text-red-400 hover:bg-gray-200 hover:cursor-pointer ">
            Projects
          </li>
          <li className="text-gray-300 px-8 py-1 rounded-2xl  hover:text-red-400 hover:bg-gray-200 hover:cursor-pointer">
            Contacts
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
