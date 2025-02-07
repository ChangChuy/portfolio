"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface ParabolaTransitionProps {
  children: ReactNode;
}

interface SVGProps {
  width: number;
  height: number;
}

// This make the code a lot cleaner, instead of smudinging the whole variant into the html
// Tailwinds is already very cluster imo. 
  const anim = (variants : Variants) => ({

    initials: "initial", 
    animate: "enter",
    exit: "exit",
    variants 
})

const ParabolaTransition: React.FC<ParabolaTransitionProps> = ({children}) => {


  // this is so that the dimension for the parabola can be change dynamically. 
  const [dimensions, setDimensions] = useState({
    height: 0, 
    width: 0
  })

  useEffect( () => {

    const resize = () => {
      setDimensions({
        width: window.innerWidth, 
        height: window.innerHeight
      })
    }
    resize(); 
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize)
  }, [])

  return (
    <div className="p-10 min-h-[calc(100vh-80px)]" >
    {/* <div className={`fixed inset-0 w-screen h-[calc(100vh+600px)] pointer-events-none ${dimensions.width == null ? "opacity-100" : "opacity-0"}`} /> */}
      {dimensions.width != null && <SVG {...dimensions}/>}
      {children}
    </div>
  )
}


const SVG: React.FC<SVGProps> = ({width, height}) => {

  //
  const initialPath = `
        M0 300 

        Q ${width/2} 0 ${width} 300

        L${width} ${height + 300}

        Q${width/2} ${height + 600} 0 ${height + 300}

        L0 
  `
  return (
      <svg className="fixed left-0 top-0 w-screen h-[calc(100vh+600px)] bg-red-400 pointer-events-none -translate-y-[300px]">
        <path d={initialPath} ></path>
      </svg>
    )
}



export default ParabolaTransition;