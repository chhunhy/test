"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { HiOutlinePlus } from "react-icons/hi2";
import { NavbarInClass } from "@/components/userDashboard/NavbarOutClass";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CardAssignmentClasswork } from "@/components/userDashboard/card/CardAssignment";
export default function ClassWork() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All topics");

  const dropdown = () => {
    setOpenDropdown((prev) => !prev);
    if (!openDropdown) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOpenDropdown(false); // Close openDropdown if isOpen is opened
    }
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
    setOpenDropdown(false);
  };
  // Animation
  const announceVariants = {
    closed: {
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { height: "full", transition: { duration: 0.3, ease: "easeInOut" } }
  };
  return (
    <main className="w-full">
      <NavbarInClass />
      <div className="container">
        <div className="flex items-center justify-between mt-[2rem]">
          <motion.div
            animate={openDropdown ? "open" : "closed"}
            variants={announceVariants}
            className="relative z-30"
          >
            <Button
              className="bg-primarycolor900 dark:bg-secondarycolor"
              onClick={dropdown}
            >
              <span className="flex place-items-center gap-2 px-2 p-3 text-white text-h5">
                Create{" "}
                <HiOutlinePlus
                  className={`${openDropdown ? "rotate-45" : " rotate-0"}`}
                />
              </span>
            </Button>
            {openDropdown && (
              <div className="absolute flex flex-col mt-2 bg-backgroundWhite rounded-rounded12 w-48 text-h5 text-fontcolorslate700 drop-shadow2 dark:bg-DarkGray600 dark:text-white">
                <Link
                  href=""
                  className="p-3 hover:bg-fontcolorslate100 rounded-tr-rounded12 rounded-tl-rounded12 dark:hover:bg-secondarycolor"
                >
                  Assignment
                </Link>
                <div className="p-3 hover:bg-fontcolorslate100 rounded-br-rounded12 rounded-bl-rounded12 dark:hover:bg-secondarycolor">
                  Topic
                </div>
              </div>
            )}
          </motion.div>
          <div className="relative z-30">
            <Button
              type="button"
              className="inline-flex gap-5 justify-center w-52 rounded-rounded8 px-4 py-2 bg-primarycolor900 text-h4 font-semibold text-white dark:bg-secondarycolor"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <Image
                src="/assets/icons-filter.png"
                alt="filter"
                width={700}
                height={700}
                className="w-5"
              />
              {selectedOption}
            </Button>
            {isOpen && (
              <div
                className="origin-top-right absolute left-0 mt-2 w-52 rounded-rounded12 drop-shadow2 bg-white ring-1 ring-black ring-opacity-5 dark:bg-DarkGray600"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="rounded-rounded12" role="none">
                  <div
                    className="block p-3 text-gray-700 text-h5 rounded-tl-rounded12 rounded-tr-rounded12 hover:bg-fontcolorslate100 dark:hover:bg-secondarycolor dark:text-white"
                    role="menuitem"
                    onClick={() => handleOptionClick("All topics")}
                  >
                    All topics
                  </div>
                  <div
                    className="block p-3 text-gray-700 text-h5 hover:bg-fontcolorslate100 dark:hover:bg-secondarycolor dark:text-white"
                    role="menuitem"
                    onClick={() => handleOptionClick("Next Js")}
                  >
                    Next Js
                  </div>
                  <div
                    className="block p-3 text-gray-700 hover:bg-fontcolorslate100 dark:hover:bg-secondarycolor dark:text-white"
                    role="menuitem"
                    onClick={() => handleOptionClick("Spring Framework")}
                  >
                    Spring Framework
                  </div>
                  <div
                    className="block p-3 text-gray-700 rounded-bl-rounded12 rounded-br-rounded12 hover:bg-fontcolorslate100 dark:hover:bg-secondarycolor dark:text-white"
                    role="menuitem"
                    onClick={() => handleOptionClick("Java Programmings")}
                  >
                    Java Programming
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <CardAssignmentClasswork />
      </div>
    </main>
  );
}
