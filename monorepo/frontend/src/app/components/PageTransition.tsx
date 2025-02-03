"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait"> {/* Ensures old page stays until exit animation completes */}
      <motion.div
        key={pathname} // Triggers animation when route changes
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: - 20 }}
        transition={{ duration: 1}} // Adjusted duration for smoother transition
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;