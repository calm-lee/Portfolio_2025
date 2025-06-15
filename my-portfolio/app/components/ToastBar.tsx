import { AnimatePresence, motion } from "motion/react";
import React from "react";

export default function ToastBar(props: { isOpen: boolean; message: string }) {
  const { isOpen, message } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={` bg-gray-600 dark:bg-white p-3 w-80 rounded-lg opacity-50 text-center text-white dark:text-gray-600`}
          >
            <span className="">{message}</span>
          </motion.span>
        </div>
      )}
    </AnimatePresence>
  );
}
