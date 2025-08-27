"use client";

import { motion } from "framer-motion";

const MotionDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 1.4, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
