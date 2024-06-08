"use client";
import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { CreateClass, JoinClass } from "./CreateClass";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonCreateClassProps {
  setNewClass: React.Dispatch<React.SetStateAction<boolean>>;
  openNewClass: boolean;
  setOpenProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonCreateClass: React.FC<ButtonCreateClassProps> = ({
  setNewClass,
  setOpenProfile,
  openNewClass
}) => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  return (
    <div>
      <div className="relative">
        <button
          className="flex place-items-center gap-2 font-semibold text-h5 border-2 border-primarycolor200 sm:px-6 sm:py-2 rounded-rounded12 text-primarycolor900 transition-all p-3 dark:text-white dark:border-fontcolorslate700"
          onClick={() => {
            setNewClass((prev) => !prev);
            setOpenProfile(false);
          }}
        >
          <h1 className="hiddens sm:block">New Class</h1>
          <HiOutlinePlus />
        </button>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.2 }}
          className={`absolute bg-backgroundWhite w-[10rem] text-h5 font-semibold mt-2 border-[1px] border-primarycolor20 rounded-rounded12 transition-all ${
            openNewClass ? "inline-block" : "hidden"
          }`}
        >
          <div
            className="px-4 py-3 rounded-tl-rounded12 text-fontcolorslate700 rounded-tr-rounded12 hover:bg-primarycolor200 hover:text-primarycolor900 cursor-pointer"
            onClick={() => {
              setActiveComponent("JoinClass");
              setNewClass(false);
            }}
          >
            Join Class
          </div>

          <div
            className="px-4 py-3 rounded-bl-rounded12 text-fontcolorslate700 rounded-br-rounded12 hover:bg-primarycolor200 hover:text-primarycolor900 cursor-pointer"
            onClick={() => {
              setActiveComponent("CreateClass");
              setNewClass(false);
            }}
          >
            Create Class
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {activeComponent === "JoinClass" && (
          <div className="z-50">
            <JoinClass setActiveComponent={setActiveComponent} />
          </div>
        )}
        {activeComponent === "CreateClass" && (
          <div className="z-50">
            <CreateClass setActiveComponent={setActiveComponent} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonCreateClass;
