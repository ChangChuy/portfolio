"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


interface SVGProps {
  width: number;
  height: number;
}

// This make the code a lot cleaner, instead of smudinging the whole variant into the html
// Tailwinds is already very cluster imo. 
const anim = (variants: Variants) => ({
  initial: "initial", 
  animate: "enter",
  exit: "exit",
  variants 
});

const routes: Record<string, string> = {
  
  "/": "Home .", 
  "/services": "Services .", 
  "/resume": "Resume .", 
  "/projects": "Projects .",
  "/contact": "Contact .", 

}

const ParabolaTransition = () => {

  const pathname = usePathname();

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
    return () => {window.removeEventListener("resize", resize)}
  }, [])

  const text = {

    initial: {
      opacity: 1
    },
    enter: {
      opacity: 0, 
      top: -100,
      transition: {
        duration: .75, 
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1]
       }
    }
  }

  return (
    <div className="p-10 min-h-[calc(100vh-80px)]" >
      <div key={pathname}>
        <AnimatePresence>
          <motion.p {...anim(text)} className="absolute left-[44%] top-[40%] text-[46px] z-[3] text-center">{routes[pathname]}</motion.p>
        </AnimatePresence>
        <div className={`fixed inset-0 w-screen h-[calc(100vh+600px)] pointer-events-none ${dimensions.width === 0 ? "opacity-100" : "opacity-0"}`} />
            {dimensions.width > 0 && <SVG {...dimensions}/>}
      </div>
    </div>
  )
}


const SVG: React.FC<SVGProps> = ({width, height}) => {

  //
  const initialPath = `
        M0 300 

        Q ${width/2} 0 ${width} 300

        L ${width} ${height + 300}

        Q ${width/2} ${height + 600} 0 ${height + 300}

        L0 0
  `
  const endPath = `
    M0 300 

    Q ${width/2} 0 ${width} 300

    L ${width} ${height}

    Q ${width/2} ${height} 0 ${height}

    L0 0
`
  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: endPath,
      transition: {
        duration: .75, 
        delay: 0.35,
        ease: [0.76, 0, 0.24, 1]
       }
    }
  };

  const slide = {

    initial: {
      top: "0px"
    }, 
    enter: {
      top: "calc(-100vh)",
      transition: {
      duration: .75, 
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1]
      },
      // transitionEnd : {
      //   top: "calc(100vh+150px)"
      // }
     }
  }

  return (
      <AnimatePresence mode="wait">
        <motion.svg className="fixed left-0 top-0 w-screen h-[calc(100vh+600px)] pointer-events-none -translate-y-[300px]" {...anim(slide)}>
          <motion.path {...anim(curve)} />
        </motion.svg>
      </AnimatePresence>
    )
}

export default ParabolaTransition;