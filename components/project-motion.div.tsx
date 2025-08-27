"use client";

import { motion } from "framer-motion";

const PMotionDiv = ({ children , index }: { children: React.ReactNode, index: number }) => {
  return (
    <motion.div
      key={index}
      className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default PMotionDiv;
