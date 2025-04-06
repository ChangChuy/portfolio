"use client"


import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa" 
import { motion } from "framer-motion"; 


const info = [

  {
    icon: <FaPhoneAlt/>, 
    title: "Phone", 
    description: "(+1) 647-706-7618"
  },
  {
    icon: <FaEnvelope/>, 
    title: "Email", 
    description: "changj_chuy@hotmail.com"
  },
  {
    icon: <FaMapMarkerAlt/>, 
    title: "Address", 
    description: "Toronto, Ontario, Canada"
  }
]


const Contact = () => {


  return (
    <motion.section initial={{ opacity: 0}} animate={{opacity: 1, transition: {delay: 1.5, duration: 0.4, ease: "easeIn"}}} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-green-400">
              Let&apos;s work together. 
            </h3>
            <p className="text-white/60">
              Description about us working together. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="firstname" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Firstname" required />
              <input type="lastname" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lastname" required />
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
              <input type="phone" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required />
            </div>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option defaultValue="Choose a service">Choose a service</option>
              <option value="Web">Web Development</option>
              <option value="UI/UX">UI/UX design</option>
              <option value="DB">Database</option>
              <option value="Server">Server</option>
            </select>
            <textarea className="h-[200px] p-4 border border-gray-300 rounded-lg" placeholder="Send me a message."/>
            <div className="flex justify-end">
              <button type="button" className="text-black/60 bg-green-500 font-bold hover:bg-green-400 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Send Message</button>
            </div>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0 mt-12"> 
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-green-400 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact