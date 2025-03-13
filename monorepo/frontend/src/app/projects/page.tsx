"use client"

import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link"; 
import image from "next/image"; 

const applications = [

  {
    num: '01', 
    category: 'Game',
    title: "Project 1", 
    description: "description for PalMaple",
    stack: [ {name: "Godot"}, {name: "GDScript"}],
    image: "/",
    github: "", 
  }, 
  {
    num: '01', 
    category: 'Game',
    title: "Project 1", 
    description: "description for PalMaple",
    stack: [ {name: "Godot"}, {name: "GDScript"}],
    image: "/",
    github: "", 
  }, 
  {
    num: '02', 
    category: 'PalPlumber',
    title: "Project 2", 
    description: "description for PalPlumber",
    stack: [ {name: "Godot"}, {name: "GDScript"}],
    image: "/",
    github: "", 
  }, 
  {
    num: '03', 
    category: 'Pong',
    title: "Project 3", 
    description: "description for Pong",
    stack: [ {name: "Godot"}, {name: "GDScript"} ],
    image: "/",
    github: "", 
  }, 
  {
    num: '04', 
    category: 'RockPaperScissorSimulator',
    title: "Project 4", 
    description: "description for RockPaperSciessorSimulator",
    stack: [ {name: "Godot"}, {name: "GDScript"} ],
    image: "/",
    github: "", 
  },
  {
    num: '05', 
    category: 'E-Commerce Website',
    title: "Project 5", 
    description: "description for E-Commerce Website",
    stack: [ {name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
    image: "/",
    github: "", 
  },
  {
    num: '06', 
    category: 'E-Commerce Website',
    title: "Project 6", 
    description: "description for E-Commerce Website",
    stack: [ {name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
    image: "/",
    github: "", 
  },
]

const Projects = () => {


  const [application, setApplication] = useState(applications[0]);

  return (
    <motion.div  initial={{opacity:0}} animate={{opacity: 1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"> 
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent" style={{ WebkitTextStroke: "2px white" }}>
                {application.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-400 transition-all duration-500 capitalize">
                {application.category} project
              </h2>
              <p className="text-white/60">{application.description}</p>
              <ul className="flex gap-4 ">
                {application.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl font-semibold text-green-400">
                      {item.name}
                      {index !== application.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="relative inline-block">
                <Link href={application.github}>
                  <div className="relative inline-block w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-green-400"/>
                  </div>
                </Link>
                <div
                id={application.github}
                className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 
                        invisible opacity-0 group-hover:visible group-hover:opacity-100 
                        transition-opacity duration-300 px-3 py-2 text-sm font-medium 
                        text-white bg-gray-900 rounded-lg shadow-xs dark:bg-gray-700"
                >
                <p className="capitalize">Github Link</p>
                </div>
              </div>
            </div>     
          </div>
          <div>
            slider
          </div>
          <div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects