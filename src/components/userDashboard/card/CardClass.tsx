import React, { useState } from "react";
import { cards } from "@/types/cards";
import Image from "next/image";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { motion } from "framer-motion";

const CardClass = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenu(openMenu === id ? null : id);
  };
  return (
    <div className="mt-[2rem] mb-8 -z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center ">
        {cards().map((card: any) => (
          <div key={card.id} className="">
            <div className=" flex flex-col relative bg-backgroundWhite rounded-s-rounded24 rounded-e-rounded24 dark:bg-DarkGray600">
              <div className=" bg-center bg-cover bg-no-repeat">
                <div className="relative">
                  <button
                    className="absolute top-4 left-4 p-1 text-white rounded-roundedFull text-h4 transition-transform bg-transparent opacity-35 bg-fontcolorslate700 duration-300 ease-in-out rotate-90"
                    onClick={() => toggleMenu(card.id)}
                    aria-expanded={openMenu === card.id}
                    aria-controls={`menu-${card.id}`}
                  >
                    <HiMiniEllipsisHorizontal />
                  </button>
                  {openMenu === card.id && (
                    <motion.div
                      className="Drop-Shadow relative "
                      initial="hidden"
                      animate="visible"
                      // variants={menuVariants}
                      id={`menu-${card.id}`}
                      onClick={() => {
                        setOpenMenu(null);
                      }}
                    >
                      <div className="absolute top-10 left-4 text-fontcolorslate700 w-56 bg-backgroundWhite rounded-lg">
                        <div className="">d</div>
                        <div className="">d</div>
                      </div>
                    </motion.div>
                  )}
                </div>
                <Image
                  src={card.banner}
                  alt="Card Banner"
                  width={700}
                  height={700}
                  className="w-full max-w-full rounded-tr-rounded24 rounded-tl-rounded24"
                />
              </div>
              <div className="relative -top-[46px] bg-black bg-opacity-50 h-[3rem] border-l-8 border-primarycolor900">
                <div className="flex items-center place-items-center justify-between">
                  <div className="relative top-[10px] left-4 text-h5 font-bold text-white">
                    {card.name}
                  </div>
                  <div className="absolute -top-3 right-5 sm:-top-4">
                    {card.thumbnail && (
                      <Image
                        src={card.thumbnail}
                        width={700}
                        height={700}
                        alt={`${card.name} thumbnail`}
                        className="mt-2 md:w-[90px] md:h-[90px] object-cover bg-center rounded-full sm:border-[10px] border-backgroundWhite dark:border-DarkGray600 h-[70px] w-[70px] border-[7px]"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="container relative -top-6 left-2 flex flex-col gap-2 text-sm text-gray-600 dark:text-[white]">
                <div>
                  <span className="font-bold text-h6">Subject</span>
                  <span className="ml-2 text-h6">
                    <span className="font-bold text-h6">:</span> {card.section}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-h6">Shift</span>
                  <span className="ml-7 text-h6">
                    <span className="font-bold text-h6">:</span> {card.shift}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-h6">Room</span>
                  <span className="ml-5 text-h6">
                    <span className="font-bold text-h6">:</span> {card.room}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardClass;
