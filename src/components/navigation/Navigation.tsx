"use client";
import React, { useEffect, useState } from "react";
import DarkModeSwitch from "../darkModeSwitch/DarkModeSwitch";
import Link from "next/link";
import Image from "next/image";
import { HiMiniBars3, HiMiniXMark, HiUser } from "react-icons/hi2";
import {Button} from "@nextui-org/react";

export default function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // handle hurburger
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed w-full bg-backgroundWhite py-3 dark:bg-DarkGray800 z-50">
        <section className="container mx-auto">
          <div className="flex items-center justify-around md:justify-around lg:justify-between text-h5">
            {/* Hamburger button */}
            <button
              onClick={toggleMobileMenu}
              className="text-3xl text-fontcolorslate900 md:hidden dark:text-white"
            >
              {isMobileMenuOpen ? <HiMiniXMark /> : <HiMiniBars3 />}
            </button>

            <Link href="/" className="ml-4 mr-10">
              {/* logo for light mode */}
              <span className=" flex dark:hidden ">
                <Image
                  src={"/assets/logo/logol.png"}
                  alt="Logo GradesBot light mode"
                  width={500}
                  height={500}
                  className="w-44"
                ></Image>
              </span>

              {/* logo for light mode */}
              <span className=" hidden dark:flex  ">
                <Image
                  src={"/assets/logo/logod.png"}
                  alt="Logo GradesBot light mode"
                  width={500}
                  height={500}
                  className="w-44"
                ></Image>
              </span>
              
            </Link>

            {/* menu for desktop */}
            <nav className="hidden md:inline-block">
              <ul className="flex gap-10 text-fontcolorslate600 font-medium dark:text-white">
                <li>
                  <Link
                    href="#feature"
                    className="hover:text-primarycolor900 hover:dark:text-secondarycolor"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-primarycolor900 hover:dark:text-secondarycolor"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact-us"
                    className="hover:text-primarycolor900 hover:dark:text-secondarycolor"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex place-items-center gap-5 md:ml-4 lg:ml-1">
              <DarkModeSwitch
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
              />
             
              <Button className="hidden md:flex justify-center text-[18px] items-center gap-2 text-white  bg-primarycolor800 hover:bg-primarycolor700 dark:bg-secondarycolor dark:hover:bg-secondarycolor800 "><HiUser />Log in</Button>
            </div>

          </div>
        </section>
      </header>

      {/* mobile menu */}
      <nav
        className={`fixed top-0 z-40 left-0 w-full h-[300px] bg-backgroundWhite dark:bg-DarkGray800  transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col ml-4 pt-10 items-start justify-center h-full gap-5 text-fontcolorslate600 font-medium dark:text-white px-5">
          <li>
            <Link
              href="#feature"
              className="hover:text-primarycolor900 hover:dark:text-secondarycolor"
              onClick={toggleMobileMenu}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="hover:text-primarycolor900 hover:dark:text-secondarycolor"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#contact-us"
              className="hover:text-primarycolor400 hover:dark:text-secondarycolor"
              onClick={toggleMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="w-full border-t-1 border-primarycolor400">
            <Button className="flex justify-center text-[18px] items-center text-fontcolorslate800 bg-white -ml-4 mt-3 dark:bg-DarkGray800 dark:text-white"><HiUser />Log in</Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
