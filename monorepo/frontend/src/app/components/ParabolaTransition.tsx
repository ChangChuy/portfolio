
import { AnimatePresence, motion, Variant } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";


interface ParabolaTransitionProps {
  children: ReactNode;
}

const ParabolaTransition: React.FC<ParabolaTransitionProps> = ({children}) => {

  const anim = (variants : Variant) => {

    return {
      initials: "initial", 
      animate: "enter",
      exit: "exit",
      variants 
    }
  }

  return (
    <div className="page">
      {children}
    </div>
  )
}

// create the SVG shape. 

const SVG = () => {

    return (
      <svg>

      </svg>

    )

}



export default ParabolaTransition;