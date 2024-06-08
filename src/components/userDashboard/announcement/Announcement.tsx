"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";

export const Announcement = ({ announcement }: any) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <main className="">
      <div className="w-full h-[4rem] mt-8 rounded-tr-rounded12 rounded-tl-rounded12 bg-backgroundWhite flex place-items-center dark:bg-DarkGray600">
        <span className="text-h3 font-bold text-fontcolorslate700 ml-5 dark:text-white">
          Announcement
        </span>
      </div>
      <div className="relative grid gap-7 py-5 px-4 border-[1px] bg-backgroundWhite overflow-hidden border-t-primarycolor200 border-b-primarycolor100 dark:border-fontcolorslate700 dark:bg-DarkGray800">
        <div className="absolute -top-3 -left-3 bg-primarycolor800 w-5 h-screen dark:bg-secondarycolor"></div>
        <div className="flex place-items-center gap-4 ml-4">
          <Image
            src="/assets/user.jpg"
            width={700}
            height={700}
            alt="User Avatar"
            className="w-12 rounded-roundedFull"
          />
          <div className="flex items-center justify-between gap-1 w-full">
            <div className="flex items-start flex-col text-fontcolorslate700 dark:text-white">
              <span className="text-h5 font-semibold">{announcement.user}</span>
              <div className="flex items-center justify-between dark:text-white">
                <h3 className="font-semibold">{announcement.time}</h3>
              </div>
            </div>
            <div className="relative">
              <button onClick={() => setOpenMenu((prev) => !prev)} className="text-h4 transition-transform duration-300 ease-in-out lg:rotate-90 dark:text-white mr-4">
                <HiMiniEllipsisHorizontal className="rotate-90" />
              </button>
              {
                openMenu && (
                  <div>jjj</div>
                )
              }
            </div>
          </div>
        </div>
        <div className="ml-4 border-2 py-5 px-4 rounded-rounded12 font-medium text-fontcolorslate700 border-primarycolor200 dark:border-fontcolorslate700 dark:text-white">
          {announcement.text}
        </div>
      </div>
      <div className="w-full h-[4rem] rounded-br-rounded12 rounded-bl-rounded12 bg-backgroundWhite dark:bg-DarkGray600"></div>
    </main>
  );
};
