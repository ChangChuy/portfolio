"use client"

import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { BsGithub } from "react-icons/bs";

import Link from "next/link"; 
import Image from "next/image"; 
import SliderBtns from "../components/SliderBtns";

const applications = [

  {
    num: '01', 
    category: 'PalMaple',
    title: "Project 1", 
    description: "description for PalMaple",
    stack: [ {name: "Godot"}, {name: "GDScript"}],
    image: "/PalMaple_Image.png",
    github: "", 
  }, 
  {
    num: '02', 
    category: 'PalPlumber',
    title: "Project 2", 
    description: "description for PalPlumber",
    stack: [ {name: "Godot"}, {name: "GDScript"}],
    image: "/PalPlumber_Image.png",
    github: "", 
  }, 
  {
    num: '03', 
    category: 'Pong',
    title: "Project 3", 
    description: "description for Pong",
    stack: [ {name: "Godot"}, {name: "GDScript"} ],
    image: "/Pong_Image.png",
    github: "", 
  }, 
  {
    num: '04', 
    category: 'RockPaperScissorSimulator',
    title: "Project 4", 
    description: "description for RockPaperSciessorSimulator",
    stack: [ {name: "Godot"}, {name: "GDScript"} ],
    image: "/RockPaperScissor_Image.png",
    github: "", 
  },
]

const Projects = () => {

  interface SwiperType {
    activeIndex: number;
  }
  
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setApplication(applications[currentIndex]); 
  };

  const [application, setApplication] = useState(applications[0]);

  return (
    <motion.div  initial={{opacity:0}} animate={{opacity: 1, transition: {delay: 1.5, duration: 0.4, ease: "easeIn"} }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"> 
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
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {applications.map((project, index) => {

                return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center">
                        <div></div>
                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-contain object-center" alt=""/>
                        </div>
                      </div>
                    </SwiperSlide>
                )
              })}
              <SliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"/>
            </Swiper> 
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects