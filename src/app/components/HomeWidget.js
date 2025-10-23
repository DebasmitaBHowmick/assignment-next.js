"use client";
import { useState } from "react";


const HomeWidget = () => {
  const content = {
    about: "About Me content goes here...",
    experiences: "Experience content goes here...",
    recomended: "Recommended content goes here...",
  };

  const tabs = [
    { key: "about", label: "About Me" },
    { key: "experiences", label: "Experiences" },
    { key: "recomended", label: "Recommended" },
  ];

  const [active, setIsactive] = useState("about");

  return (
    <div className="bg-[#3a3a3a] rounded-2xl p-6 shadow-2xl text-white h-full flex flex-col relative overflow-hidden">
 <div className="absolute top-0 left-0 right-0 h-[2] bg-[#3a3a3a] opacity-50"></div>
 <div className="absolute top-3 left-3 bg-[#3a3a3a] w-7 h-7 rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 ease-out">
    <i className="bi bi-question text-gray-400 text-sm"></i>
  </div>
  <div className="absolute top-3 left-3 bg-[#3a3a3a] w-7 h-7 rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 ease-out my-30">
    <i className="bi bi-grid text-gray-400 text-sm"></i>
  </div>
      {/* Tab Bar */}
      <div className="flex items-center bg-[#111111] rounded-2xl px-2 py-2 w-fit mx-auto shadow-md space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setIsactive(tab.key)}
            className={`relative px-6 py-2 rounded-xl text-sm font-medium overflow-hidden transform transition-all duration-500 ease-out group ${
              active === tab.key
                ? "bg-[#403b3b] text-white shadow-lg scale-110"
                : "text-gray-300 hover:text-white hover:scale-105 hover:shadow-lg"
            }`}
          >
            {/* Hover Motion Layer */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] to-[#212020] opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)]"></span>

            {/* Label */}
            <span className="relative z-10">{tab.label}</span>
        
          </button>
        ))}
      </div>

      {/* Content Box */}
      
      <div className="relative rounded-2xl p-5 shadow-md h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-[#4a4a4a] scrollbar-track-[#2b2b2b]">
      
        <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-line ml-8">
          {content[active]}
        </p>

       
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3a3a3a] opacity-50"></div>
    </div>
  );
};

export default HomeWidget;

