"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [

  {
    num: '01', 
    title: 'Web Development', 
    description: 'The description of the website would be here.', 
    href: "",
  },
  {
    num: '02', 
    title: 'UI/UX', 
    description: 'The description concept and user flow of the design would be here.',
    href: "",
  },
  {
    num: '03', 
    title: 'Logo Design', 
    description: 'The description of the Design would be here.',
    href: "",
  },
  {
    num: '04', 
    title: 'SEO', 
    description: 'The description of the Search Engine Optimization would be here.',
    href: "",
  },

]



const Services = () => {
  return (
    <section className="min-h[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div initial={{opacity: 0}} animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn"} }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold group-hover:text-lightGreen">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-lightGreen transtion-all duration-500 flex justify-center items-center hover:-rotate-45">
                   <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text=[42px] font-bold leading-none text-white group-hover:text-lightGreen transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b bordere-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services