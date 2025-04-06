import { FiDownload } from "react-icons/fi";
import SocialButtons from "../components/SocialButtons";
import Photo from "../components/Photo";
import Stats from "../components/Stats";




export default function Home() {
  return (
    <div className="min-h-screen flex items-center">  {/* Outer container fills viewport & centers content */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-[25px]">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-lightGreen">Chang Chuy</span>
            </h1>
            <p className="max-w-[500px] text-[24px] mb-9 text-white/80 mx-auto">
              I&apos;m a software engineer, I have accumulated 4+ years of experience building various side gaming projects with Godot, web apps with JavaScript, React, SQL/NoSQL/GraphQL. Over 4 years of programming experience with a strong drive to work under time constraints and collaborate effectively with teams.
            </p>
            {/* Buttons for socials */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <button className="py-5 px-6 flex items-center text-xl text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Download CV
                <FiDownload className="w-5 h-5 ml-2" />
              </button>
              <div className="mb-8 xl:mb-0">
                <SocialButtons
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-700 rounded-full flex justify-center items-center text-blue-700 text-base hover:bg-blue-700 hover:border-blue-700 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </div>
  );
}
