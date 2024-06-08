"use client";
import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@nextui-org/react";

interface ClassProps {
  setActiveComponent: React.Dispatch<React.SetStateAction<string | null>>;
}

export function CreateClass({ setActiveComponent }: ClassProps) {
  return (
    <main className="create-class h-screen w-full z-[999] bg-black bg-opacity-50">
      <div className="container flex items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.2 }}
          className="relative flex items-center justify-center gap-5 bg-backgroundWhite overflow-hidden rounded-rounded16 px-11 py-6 md:w-[60rem] w-full dark:bg-DarkGray600"
        >
          <div className="absolute bg-primarycolor900 w-[5rem] h-[5rem] -top-2 rounded-full -left-11 dark:bg-secondarycolor"></div>
          <div className="absolute bg-primarycolor700 w-[5rem] h-[5rem] -top-12 rounded-full -left-5 dark:bg-secondarycolor600"></div>
          <div className="absolute bg-primarycolor700 w-[5rem] h-[5rem] rounded-full -bottom-5 -right-5 dark:bg-secondarycolor"></div>
          <div
            className="absolute right-3 top-3 text-h2 cursor-pointer p-1 dark:text-white"
            onClick={() => {
              setActiveComponent(null);
            }}
          >
            <HiMiniXMark />
          </div>
          <div className="grid gap-5 w-full z-30">
            <h1 className="text-border text-h2 font-bold text-fontcolorslate700 dark:text-white">
              Create Class
            </h1>
            <form action="" className="grid gap-5">
              <div className="sm:flex gap-6 w-full sm:flex-col lg:flex-row">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-medium dark:text-white">
                    Class Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border-2 rounded-rounded12 border-primarycolor200 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-medium dark:text-white">
                    Section
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border-2 rounded-rounded12 border-primarycolor200 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                  />
                </div>
              </div>
              <div className="sm:flex gap-6 w-full sm:flex-col lg:flex-row">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-medium dark:text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border-2 rounded-rounded12 border-primarycolor200 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="font-medium dark:text-white">
                    Room
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border-2 rounded-rounded12 border-primarycolor200 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                  />
                </div>
              </div>
            </form>
            <Button className="button-primary w-max dark:bg-secondarycolor">
              Create
            </Button>
          </div>
          <Image
            src="/assets/createClass.png"
            alt=""
            className="lg:w-[50%] w-[20rem] hiddens md:block"
            width={700}
            height={700}
          />
        </motion.div>
      </div>
    </main>
  );
}

export function JoinClass({ setActiveComponent }: ClassProps) {
  return (
    <main className=" create-class h-screen w-full z-[999] bg-black bg-opacity-50">
      <div className="container flex items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.2 }}
          className="relative flex items-center justify-center gap-5 bg-backgroundWhite overflow-hidden rounded-rounded16 px-11 py-6 md:w-[40rem] w-full dark:bg-DarkGray600"
        >
          <div className="absolute bg-primarycolor900 w-[5rem] h-[5rem] -top-2 rounded-full -left-11 dark:bg-secondarycolor"></div>
          <div className="absolute bg-primarycolor700 w-[5rem] h-[5rem] -top-12 rounded-full -left-5 dark:bg-secondarycolor600"></div>
          <div className="absolute bg-primarycolor700 w-[5rem] h-[5rem] rounded-full -bottom-5 -right-5 dark:bg-secondarycolor"></div>
          <div
            className="absolute right-3 top-3 text-h2 cursor-pointer p-1 dark:text-white"
            onClick={() => {
              setActiveComponent(null);
            }}
          >
            <HiMiniXMark />
          </div>
          <div className="grid gap-5 w-full z-30">
            <h1 className="text-border text-h2 font-bold text-fontcolorslate700 dark:text-white">
              Join Class
            </h1>
            <form action="" className="grid gap-5">
              <div className="flex flex-col">
                <label htmlFor="" className="font-medium dark:text-white">
                  Code
                </label>
                <input
                  type="text"
                  className="w-full p-2 mt-1 border-2 rounded-rounded12 border-primarycolor200 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                />
              </div>
            </form>
            <Button className="button-primary w-max dark:bg-secondarycolor">
              Create
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
