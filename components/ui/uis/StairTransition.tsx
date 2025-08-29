"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname} className="pointer-events-none">
          <div className="h-full w-screen fixed top-0 left-0 right-0  z-40 flex ">
            <Stairs />
          </div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
            className="h-screen w-screen fixed bg-primary "
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
