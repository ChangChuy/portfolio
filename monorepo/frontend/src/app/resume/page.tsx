"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

// about me data field
const about = {
  title: "About me",
  description: "text about me",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Chang Chuy",
    },
    {
      fieldName: "email",
      fieldValue: "changj_chuy@hotmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ years",
    },
    {
      fieldName: "Degree",
      fieldValue: "Honours Bachelor of Science in Computer Science",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Mandarin, Cantonese",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Accumulated 4+ years of experience building different side gaming projects with Godot, Web App with JavaScript, React, SQL/NoSQL/GraphQL. Over 4 years of programming experience with a strong drive to work under time constraints and collaborate effectively with teams.",
  items: [
    {
      company: "Best Buy",
      position: "Computer Solution",
      duration: "October 2024 to December 2024",
    },
    {
      company: "Oply",
      position: "Ex-Founder",
      duration: "June 2018 to September 2019",
    },
    {
      company: "Flipd",
      position: "Quality Assurance.",
      duration: "May 2017 to Aug 2017",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "my education",
  description: "My education details here.",
  items: [
    {
      institution: "University of Toronto Scarborough Campus",
      degree: "Honours Bachelor of Computer Science",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Description about my skills.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ],
};

const tabs = ["Experience", "Education", "Skills", "About Me"];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <ul className="flex text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm dark:divide-gray-700 dark:text-gray-400 gap-4">
          {tabs.map((tab) => (
            <li key={tab} className="w-full">
              <button
                className={`text-lg font-semibold inline-block w-full p-4 border border-gray-200 dark:border-gray-700 rounded-full
                ${
                  activeTab === tab
                    ? "text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                }
              `}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
        <div className="p-4 mt-10 h-[800px]">
          {activeTab === "Experience" && (
            <div className="flex flex-col gap-[30px] text-center">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] mx-auto">{experience.description}</p>
              <div className="h-[480px] overflow-y-auto p-4">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rouded-xl flex flex-col justify-center items-center lg-items-start gap-1 rounded-full"
                      >
                        <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <span className="text-green-400 font-bold">
                          {" "}
                          {item.duration}{" "}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                          <p className="text-white/60 font-bold">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "Education" && (
            <div className="flex flex-col gap-[30px] text-center">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] mx-auto">{education.description}</p>
              <div className="h-[480px] overflow-y-auto p-4">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 flex flex-col justify-center items-center lg:items-center gap-1 rounded-full"
                      >
                        <h3 className="text-xl max-w-[260px] min-h-[40px] text-center">
                          {item.institution}
                        </h3>
                        <div className="flex items-center gap-3 mt-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                          <p className="text-white/60 font-bold m-0 inline-block">
                            {item.degree}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "Skills" && (
            <div className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center">
                  <h3 className="text-4xl font-bond">{skills.title}</h3>
                  <p>{skills.description}</p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index} className="relative group">
                          <div className="h-[150px] bg-[#232329] rounded-full flex justify-center items-center group mb-4 mr-4">
                            <div className="text-6xl transition-all duration-300 group-hover:text-green-400">
                              {skill.icon}
                            </div>
                          </div>
                          <div
                            id={skill.name}
                            role="tooltip"
                            className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 
                                    invisible opacity-0 group-hover:visible group-hover:opacity-100 
                                    transition-opacity duration-300 px-3 py-2 text-sm font-medium 
                                    text-white bg-gray-900 rounded-lg shadow-xs dark:bg-gray-700"
                          >
                            <p className="capitalize">{skill.name}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {activeTab === "About Me" && 
          
          <div className="flex flex-col gap-[30px] items-center">
            <h3 className="text-4xl font-bold">
              {about.title}
            </h3>
            <p className="max-w-[600px] text-white/60 mx-auto">
              {about.description}
            </p>
            <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item,index) => {
                return (
                  <li key={index} className="flex items-center justify0center xl:justify-start gap-4">
                    <span className="text-white/60 text-2xl font-semibold">
                      {item.fieldName}
                    </span>
                    <span className="text-green-400 text-2xl font-semibold">
                      :
                    </span>
                    <span className="text-white/60 text-2xl font-semibold">
                      {item.fieldValue}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
          }
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
