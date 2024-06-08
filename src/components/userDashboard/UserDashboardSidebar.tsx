"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  HiHome,
  HiUsers,
  HiAcademicCap,
  HiMiniArchiveBoxArrowDown,
  HiFaceSmile,
  HiMiniCog8Tooth,
  HiOutlineArrowRightOnRectangle
} from "react-icons/hi2";


const UserDashboardSidebar = () => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  
  const handleProfileClick = () => {
    setOpenProfile((prev) => !prev);
  };

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
      attributes: true,
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <button
        type="button"
        className="fixed top-[17px] left-5 z-[99]"
        onClick={() => setIsToggleSidebar((prev) => !prev)}
      >
        <HiMenuAlt1 className="text-[28px] font-bold dark:text-white" />
      </button>
      <main
        className={`bg-backgroundWhite h-screen lg:sticky lg:left-[-100%] top-0 transition-all dark:bg-[#242526] z-[100] overflow-hidden ${
          isToggleSidebar ? "w-[18rem]" : "w-[82px]"
        } ${isToggleSidebar ? "sm:w-[18rem] left-0" : "sm:w-[82px] left-[-100%]"} fixed`}
      >
        <div className="pt-3 px-3">
          <div className="flex items-center justify-between">
            <Image
              src={
                isDarkMode
                  ? "/assets/GradesBot Logo-07.png"
                  : "/assets/GradesBot Logo-04.png"
              }
              alt="GradesBot Logo"
              className={`overflow-hidden transition-all ${
                isToggleSidebar ? "w-14" : "hidden"
              }`}
              width={100}
              height={100}
            />
            <button
              type="button"
              className={`text-[28px] font-bold dark:text-white ${
                isToggleSidebar ? "m-1" : "ml-[14px]"
              }`}
              onClick={() => setIsToggleSidebar((prev) => !prev)}
            >
              <HiMenuAlt1 />
            </button>
          </div>
          <div className="pt-10">
            <ul className="grid gap-2 text-h5 font-semibold text-primarycolor900">
              <li>
                <Link
                  href="/user-dashboard"
                  className="flex items-center gap-5 rounded-rounded6 hover:bg-primarycolor100 p-3 dark:text-white dark:hover:bg-secondarycolor"
                >
                  <HiHome className="text-h2" />
                  <h1
                    className={`overflow-hidden transition-all ${
                      isToggleSidebar ? "inline-block" : "hidden"
                    }`}
                  >
                    Home
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center gap-5 rounded-rounded6 hover:bg-primarycolor100 p-3 dark:text-white dark:hover:bg-secondarycolor"
                >
                  <HiUsers className="text-h2" />
                  <h1
                    className={`overflow-hidden transition-all ${
                      isToggleSidebar ? "inline-block" : "hidden"
                    }`}
                  >
                    Teaching
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center gap-5 rounded-rounded6 hover:bg-primarycolor100 p-3 dark:text-white dark:hover:bg-secondarycolor"
                >
                  <HiAcademicCap className="text-h2" />
                  <h1
                    className={`overflow-hidden  ${
                      isToggleSidebar ? "inline-block" : "hidden"
                    }`}
                  >
                    Enrolled
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  href="/user-dashboard/archive"
                  className="flex items-center gap-5 rounded-rounded6 hover:bg-primarycolor100 p-3 dark:text-white dark:hover:bg-secondarycolor"
                >
                  <HiMiniArchiveBoxArrowDown className="text-h2" />
                  <h1
                    className={`overflow-hidden transition-all ${
                      isToggleSidebar ? "inline-block" : "hidden"
                    }`}
                  >
                    Archive
                  </h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 w-full  sm-hidden">
          {openProfile && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                <Link href="/user-dashboard/user-profile">
                  <div className="flex place-items-center gap-2 px-4 py-3 text-fontcolorslate700 hover:bg-primarycolor200 hover:text-primarycolor900 dark:text-white dark:hover:bg-secondarycolor">
                    <HiFaceSmile className="text-h4" />
                    View Profile
                  </div>
                </Link>
                <Link href="/user-dashboard/setting">
                  <div className="flex place-items-center gap-2 px-4 py-3 text-fontcolorslate700 hover:bg-primarycolor200 hover:text-primarycolor900 dark:text-white dark:hover:bg-secondarycolor">
                    <HiMiniCog8Tooth className="text-h4" />
                    Setting
                  </div>
                </Link>
                <div className="flex place-items-center gap-2 px-4 py-3 text-fontcolorslate700 hover:bg-primarycolor200 hover:text-primarycolor900 dark:text-white dark:hover:bg-secondarycolor">
                  <HiOutlineArrowRightOnRectangle className="text-h4" />
                  Log out
                </div>
              </div>
            </motion.div>
          )}

          <div
            className="cursor-pointer flex place-items-center text-fontcolorslate700 gap-3 border-t-[1px] border-fontcolorslate500 px-2 py-2"
            onClick={handleProfileClick}
          >
            <Image
              src="/assets/user.jpg"
              alt="User Profile"
              width={50}
              height={50}
              className="rounded-roundedFull"
            />
            <div className="text-fontcolorslate700 dark:text-white">
              <h1 className="text-[17px] font-bold ">Phy Lymann</h1>
              <p className="text-[13px]">phylymann2099@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default UserDashboardSidebar;
