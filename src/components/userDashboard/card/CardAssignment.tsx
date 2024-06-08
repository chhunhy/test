"use client";
import { cardAssignments } from "@/types/cards";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiEyeDropper, HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { motion } from "framer-motion";
import { EditAnnouncement } from "../form/EditAnnouncement";

export const CardAssignmentStream = ({ menuVariants }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [openEditAnnounce, setEditAnnounce] = useState(false);

  // Dark Mode
  useEffect(() => {
    const body = document.body;
    const darkModeEnabled = body.classList.contains("dark");
    setIsDarkMode(darkModeEnabled);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = body.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(body, {
      attributes: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  //ToggleMenu
  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <main className="mt-8 mb-8">
      {openEditAnnounce && (
        <EditAnnouncement setEditAnnounce={setEditAnnounce} />
      )}
      <div className="w-full h-[4rem] rounded-tr-rounded12 rounded-tl-rounded12 bg-backgroundWhite flex place-items-center dark:bg-DarkGray600">
        <span className="text-h3 font-bold text-fontcolorslate700 ml-5 dark:text-white">
          Assignment
        </span>
      </div>
      <div className="grid ">
        {cardAssignments().map((card) => (
          <div
            className="relative grid gap-3 py-4 px-3 border-[1px] bg-backgroundWhite border-t-primarycolor200 border-b-primarycolor100 dark:border-fontcolorslate700 dark:bg-DarkGray800"
            key={card.id}
          >
            <div className="absolute top-0 left-0 bg-primarycolor800 w-2 h-full dark:bg-secondarycolor"></div>
            <div className="flex place-items-center gap-4 ml-4">
              <Image
                src={
                  isDarkMode
                    ? "/assets/icons-assignment-light.png"
                    : "/assets/icons-assignment.png"
                }
                width={700}
                height={700}
                alt="Icon Assignment"
                className="w-12"
              />
              <div className="flex items-center justify-between gap-1 w-full">
                <div className="flex items-start flex-col">
                  <div className="flex gap-2 place-items-center w-full">
                    <h2 className="text-h5 font-bold text-secondarycolor400 truncate">
                      <span>{card.user}</span>
                      <span className="text-h5 text-fontcolorslate700 dark:text-white ml-2">
                        {card.assignment} :{" "}
                      </span>
                    </h2>
                    <p className="dark:text-white line-clamp-1">{card.name}</p>
                  </div>
                  <div className="flex items-center justify-between dark:text-white">
                    <h3>Due: {card.due}</h3>
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="text-h4 transition-transform duration-300 ease-in-out lg:rotate-90 dark:text-white mr-4"
                    onClick={() => toggleMenu(card.id)}
                    aria-expanded={openMenu === card.id}
                    aria-controls={`menu-${card.id}`}
                  >
                    <HiMiniEllipsisHorizontal />
                  </button>
                  {openMenu === card.id && (
                    <motion.div
                      className="Drop-Shadow absolute text-fontcolorslate700 w-56 -top-1 right-10 bg-backgroundWhite rounded-lg"
                      initial="hidden"
                      animate="visible"
                      variants={menuVariants}
                      id={`menu-${card.id}`}
                    >
                      <div
                        className="flex items-center px-2 py-2 gap-4 text-h5 font-semibold hover:bg-primarycolor200 hover:text-primarycolor900 cursor-pointer"
                        onClick={() => {
                          setEditAnnounce(true);
                          setOpenMenu(null);
                        }}
                      >
                        <HiEyeDropper />
                        <span>Edit Assignment</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[4rem] rounded-br-rounded12 rounded-bl-rounded12 bg-backgroundWhite dark:bg-DarkGray600"></div>
    </main>
  );
};

export const CardAssignmentClasswork = ({ menuVariants }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  // Dark Mode
  useEffect(() => {
    const body = document.body;
    const darkModeEnabled = body.classList.contains("dark");
    setIsDarkMode(darkModeEnabled);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = body.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(body, {
      attributes: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  //ToggleMenu
  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <main className="mt-8 mb-8 ">
      <div className="flex items-center justify-between w-full h-[4rem] rounded-tr-rounded12  rounded-tl-rounded12 bg-backgroundWhite place-items-center dark:bg-DarkGray600">
        <span className="text-h3 font-bold text-fontcolorslate700 ml-9 dark:text-white">
          Next
        </span>
        <button className="text-h4 mr-9 lg:rotate-90 dark:text-white">
          <HiMiniEllipsisHorizontal />
        </button>
      </div>
      <div className="grid ">
        {cardAssignments().map((card) => (
          <div
            className="relative grid gap-3 py-4 px-3 border-[1px] bg-backgroundWhite  border-t-primarycolor200 border-b-primarycolor100 dark:border-fontcolorslate700 dark:bg-DarkGray800"
            key={card.id}
          >
            <div className="absolute top-0 left-0 bg-primarycolor800 w-2 h-full dark:bg-secondarycolor"></div>
            <div className="flex place-items-center gap-4 ml-4">
              <Image
                src={
                  isDarkMode
                    ? "/assets/icons-assignment-light.png"
                    : "/assets/icons-assignment.png"
                }
                width={700}
                height={700}
                alt="Icon Assignment"
                className="w-12"
              />
              <div className="flex items-center justify-between gap-1 w-full">
                <div className="flex items-start flex-col">
                  <div className="flex gap-2 place-items-center w-full">
                    <h2 className="text-h5 font-bold text-secondarycolor400 truncate">
                      <span className="text-h5 text-fontcolorslate700 dark:text-white">
                        {card.assignment} :{" "}
                      </span>
                    </h2>
                    <p className="dark:text-white line-clamp-1">{card.name}</p>
                  </div>
                  <div className="flex items-center justify-between dark:text-white">
                    <h3>Due: {card.due}</h3>
                  </div>
                </div>
                <div className="relative">
                  <button
                    className="text-h4 transition-transform duration-300 ease-in-out lg:rotate-90 dark:text-white mr-4"
                    onClick={() => toggleMenu(card.id)}
                    aria-expanded={openMenu === card.id}
                    aria-controls={`menu-${card.id}`}
                  >
                    <HiMiniEllipsisHorizontal className="rotate-90" />
                  </button>
                  {openMenu === card.id && (
                    <motion.div
                      className="Drop-Shadow absolute text-fontcolorslate700 font-semibold -top-1 w-36 right-14 rounded-rounded12 z-50 bg-backgroundWhite dark:bg-DarkGray600"
                      initial="hidden"
                      animate="visible"
                      variants={menuVariants}
                      id={`menu-${card.id}`}
                      onClick={() => {
                        setOpenMenu(null);
                      }}
                    >
                      <div className="text-center p-3 text-gray-700 text-h5  rounded-tl-rounded12 rounded-tr-rounded12 hover:bg-fontcolorslate100 hover:text-primarycolor900 dark:hover:bg-secondarycolor dark:text-white">
                        Edit
                      </div>
                      <div className="text-center p-3 text-secondarycolor text-h5 rounded-bl-rounded12 rounded-br-rounded122 hover:bg-fontcolorslate100 dark:hover:bg-secondarycolor dark:text-white">
                        Delete
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[4rem] rounded-br-rounded12 rounded-bl-rounded12 bg-backgroundWhite dark:bg-DarkGray600"></div>
    </main>
  );
};
