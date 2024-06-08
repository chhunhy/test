"use client";
import React, { useEffect, useState } from "react";
import { HiBell, HiMenuAlt1 } from "react-icons/hi";
import {
  HiMiniCog8Tooth,
  HiFaceSmile,
  HiOutlineArrowRightOnRectangle
} from "react-icons/hi2";
import DarkModeSwitch from "../darkModeSwitch/DarkModeSwitch";
import UserDashboardSidebar from "./UserDashboardSidebar";
import ButtonCreateClass from "./createclass/ButtonCreateClass";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

// NavbarOutClass
export const NavbarOutClass = () => {
  const [openNewClass, setNewClass] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showCreateClass, setShowCreateClass] = useState(false);
  const handleProfileClick = () => {
    setOpenProfile((prev) => !prev);
    setNewClass(false);
  };

  useEffect(() => {
    const body = document.body;
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === "true");
      if (storedDarkMode === "true") {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const body = document.body;
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  };
  return (
    <div className="sticky top-0 bg-backgroundWhite w-full h-max p-2 z-[1] dark:bg-DarkGray600">
      <div className="container flex items-center justify-between">
        <div className="flex place-items-center gap-4">
          <HiMenuAlt1 className="menu text-[28px] font-bold dark:text-white opacity-0 -z-10 " />
          <Link href="/user-dashboard">
            <Image
              src={
                isDarkMode
                  ? "/assets/GradesBot Logo-08.png"
                  : "/assets/GradesBot Logo-03.png"
              }
              alt="GradesBot Logo"
              className="sm:w-32 w-28"
              width={600}
              height={600}
            />
          </Link>
        </div>
        <div className="flex place-items-center gap-8 md:gap-4">
          <ButtonCreateClass
            setNewClass={setNewClass}
            setOpenProfile={setOpenProfile}
            openNewClass={openNewClass}
            setShowCreateClass={setShowCreateClass}
            showCreateClass={showCreateClass}
          />
          <div className="flex gap-2 items-center justify-center">
            <DarkModeSwitch
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
            />
            <div className="text-h4 p-3 h-max rounded-rounded12 text-fontcolorslate700 hover:bg-primarycolor200 hover:text-primarycolor900 dark:text-[white] dark:hover:text-primarycolor900">
              <HiBell />
            </div>
          </div>
          <div className="relative w-auto hiddens sm:block">
            <div className="cursor-pointer" onClick={handleProfileClick}>
              <Image
                src="/assets/user.jpg"
                alt="User Profile"
                width={600}
                height={600}
                className="rounded-roundedFull w-12"
              />
            </div>
            <div
              className={`absolute bg-backgroundWhite w-48 md:w-48 text-h5 right-8 font-semibold mt-2 border-[1px] border-primarycolor20 rounded-rounded12 ${
                openProfile ? "inline-block" : "hidden"
              }`}
            >
              <Link href="/user-dashboard/user-profile">
                <div className="flex place-items-center gap-2 px-4 py-3 rounded-tl-rounded12 text-fontcolorslate700 rounded-tr-rounded12 hover:bg-primarycolor200 hover:text-primarycolor900">
                  <HiFaceSmile className="text-h4" />
                  View Profile
                </div>
              </Link>
              <Link href="/user-dashboard/setting">
                <div className="flex place-items-center gap-2 px-4 py-3 text-fontcolorslate700 hover:bg-primarycolor200 hover:text-primarycolor900">
                  <HiMiniCog8Tooth className="text-h4" />
                  Setting
                </div>
              </Link>
              <div className="flex place-items-center gap-2 px-4 py-3 rounded-bl-rounded12 text-fontcolorslate700 rounded-br-rounded12 hover:bg-primarycolor200 hover:text-primarycolor900">
                <HiOutlineArrowRightOnRectangle className="text-h4" />
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// NavbarInClass for class detail
export const NavbarInClass = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    // Set the active link based on the current path
    const path = pathname?.split("/").pop();
    setActiveLink(path);
  }, [pathname]);

  const handleProfileClick = () => {
    setOpenProfile((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === "true");
      if (storedDarkMode === "true") {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const body = document.body;
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    if (newDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  };
  
  return (
    <div className="sticky top-0 z-[70]">
      <div className=" bg-backgroundWhite w-full h-max p-2 drop-shadow2 dark:bg-DarkGray600">
        <div className="container flex items-center justify-between">
          <div className="flex place-items-center gap-4">
            <HiMenuAlt1 className="menu text-[28px] font-bold dark:text-white opacity-0 -z-10 " />
            <Link href="/user-dashboard">
              <Image
                src={
                  isDarkMode
                    ? "/assets/GradesBot Logo-08.png"
                    : "/assets/GradesBot Logo-03.png"
                }
                alt="GradesBot Logo"
                className="sm:w-32 w-28"
                width={600}
                height={600}
              />
            </Link>
          </div>
          <div className="flex place-items-center gap-8 md:gap-4">
            <div className="flex gap-2 items-center justify-center">
              <DarkModeSwitch
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
              <div className="text-h4 p-3 h-max rounded-rounded12 text-fontcolorslate700 hover:bg-primarycolor200 hover:text-primarycolor900 dark:text-[white] dark:hover:text-primarycolor900">
                <HiBell />
              </div>
            </div>
            <div className="relative w-auto hiddens sm:block">
              <div className="cursor-pointer" onClick={handleProfileClick}>
                <Image
                  src="/assets/user.jpg"
                  alt="User Profile"
                  width={600}
                  height={600}
                  className="rounded-roundedFull w-12 "
                />
              </div>
              <div
                className={`absolute bg-backgroundWhite w-48 md:w-48 text-h5 right-8 font-semibold mt-2 border-[1px] border-primarycolor20 rounded-rounded12 ${
                  openProfile ? "inline-block" : "hidden"
                }`}
              >
                <Link href="/user-dashboard/user-profile">
                  <div className="flex place-items-center gap-2 px-4 py-3 rounded-tl-rounded12 text-fontcolorslate700 rounded-tr-rounded12 hover:bg-primarycolor200 hover:text-primarycolor900">
                    <HiFaceSmile className="text-h4" />
                    View Profile
                  </div>
                </Link>
                <Link href="/user-dashboard/setting">
                  <div className="flex place-items-center gap-2 px-4 py-3 text-fontcolorslate700 hover:bg-primarycolor200 hover:text-primarycolor900">
                    <HiMiniCog8Tooth className="text-h4" />
                    Setting
                  </div>
                </Link>
                <div className="flex place-items-center gap-2 px-4 py-3 rounded-bl-rounded12 text-fontcolorslate700 rounded-br-rounded12 hover:bg-primarycolor200 hover:text-primarycolor900">
                  <HiOutlineArrowRightOnRectangle className="text-h4" />
                  Log out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 bg-backgroundWhite dark:text-white dark:bg-DarkGray600">
        <Link href="/user-dashboard/class-room-details/teacher/stream">
          <div
            className={`p-3 border-b-4 ${
              activeLink === "stream"
                ? "border-primarycolor900 dark:border-secondarycolor active-link"
                : "border-transparent"
            }`}
            onClick={() => setActiveLink("stream")}
          >
            Stream
          </div>
        </Link>
        <Link href="/user-dashboard/class-room-details/teacher/classwork">
          <div
            className={`p-3 border-b-4 ${
              activeLink === "classwork"
                ? "border-primarycolor900 dark:border-secondarycolor active-link"
                : "border-transparent"
            }`}
            onClick={() => setActiveLink("classwork")}
          >
            Classwork
          </div>
        </Link>
        <Link href="/user-dashboard/class-room-details/teacher/people">
          <div
            className={`p-3 border-b-4 ${
              activeLink === "people"
                ? "border-primarycolor900 dark:border-secondarycolor active-link"
                : "border-transparent"
            }`}
            onClick={() => setActiveLink("people")}
          >
            People
          </div>
        </Link>
        <Link href="/user-dashboard/class-room-details/teacher/grade">
          <div
            className={`p-3 border-b-4 ${
              activeLink === "grade"
                ? "border-primarycolor900 dark:border-secondarycolor active-link"
                : "border-transparent"
            }`}
            onClick={() => setActiveLink("grade")}
          >
            Grade
          </div>
        </Link>
      </div>
    </div>
  );
};
