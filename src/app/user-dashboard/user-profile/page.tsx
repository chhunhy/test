"use client";
import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { motion } from "framer-motion";
import { NavbarOutClass } from "../../../components/userDashboard/NavbarOutClass";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function UserProfile() {
  return (
    <main className="w-full">
      <NavbarOutClass />
      <div className="container flex items-center justify-center">
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center justify-center gap-5 bg-backgroundWhite overflow-hidden rounded-rounded16 mt-[3rem]  mb-5 flex-col px-11 py-6 lg:w-[56rem] w-full dark:bg-DarkGray600"
          >
            <div className="text-h3 font-bold  dark:text-white">
              Your Profile Account
            </div>
            <div className="absolute bg-primarycolor900 w-[5rem] h-[5rem] -top-2 rounded-full -left-11 dark:bg-secondarycolor"></div>
            <div className="absolute bg-primarycolor700 w-[5rem] h-[5rem] -top-12 rounded-full -left-5 dark:bg-secondarycolor600"></div>
            <div className="absolute bg-primarycolor700 w-[5rem] h-[5rem] rounded-full -bottom-5 -right-5 dark:bg-secondarycolor"></div>
            <div className="grid gap-8 w-full mt-10">
              <div className="flex items-center justify-between gap-5 border-[1px] border-primarycolor100 p-4 rounded-rounded12 sm:flex-nowrap flex-wrap dark:border-fontcolorslate700">
                <div className="flex place-items-center gap-4">
                  <Image
                    src="/assets/user.jpg"
                    width={600}
                    height={600}
                    alt="Profile User"
                    className="rounded-roundedFull w-16"
                  />
                  <div className="text-fontcolorslate700 dark:text-white">
                    <h1 className="font-bold text-h4 text-primarycolor900 dark:text-white">
                      Phy Lymann
                    </h1>
                    <p>phylymann2099@gmail.com</p>
                  </div>
                </div>
                <button className="flex items-center justify-center place-items-center gap-2 text-h5 font-semibold border-[1px] border-primarycolor100 py-2 px-3 transition-all rounded-rounded12 text-primarycolor900 sm:w-max w-full hover:bg-primarycolor900 hover:text-white dark:text-white dark:border-fontcolorslate700">
                  <HiPencilSquare />
                  <span>Edit</span>
                </button>
              </div>
              <form action="" className="grid gap-8">
                <div className="grid gap-5 border-[1px] border-primarycolor100 p-4 rounded-rounded12 dark:border-fontcolorslate700">
                  <div className="flex items-center justify-between gap-5 ">
                    <h1 className="text-h4 font-bold text-fontcolorslate700 dark:text-white">
                      Personal Information
                    </h1>
                    <button className="flex place-items-center gap-2 text-h5 font-semibold border-[1px] border-primarycolor100 py-2 px-3 transition-all rounded-rounded12 text-primarycolor900 hover:bg-primarycolor900 hover:text-white dark:text-white dark:border-fontcolorslate700 ">
                      <HiPencilSquare />
                      Edit
                    </button>
                  </div>
                  <div className="grid gap-5">
                    <div className="flex gap-6 w-full lg:flex-row flex-col">
                      <div className="w-full">
                        <label
                          htmlFor=""
                          className="font-medium dark:text-white"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 mt-1 border-[1px] bg-backgroundWhiteSmoke rounded-rounded12 border-primarycolor100 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor=""
                          className="font-medium dark:text-white"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 mt-1 border-[1px] bg-backgroundWhiteSmoke rounded-rounded12 border-primarycolor100 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                        />
                      </div>
                    </div>
                    <div className="flex gap-6 w-full lg:flex-row flex-col">
                      <div className="w-full">
                        <label
                          htmlFor=""
                          className="font-medium dark:text-white"
                        >
                          Biography
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 mt-1 border-[1px] bg-backgroundWhiteSmoke rounded-rounded12 border-primarycolor100 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor=""
                          className="font-medium dark:text-white"
                        >
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          className="w-full p-2 mt-1 border-[1px] bg-backgroundWhiteSmoke rounded-rounded12 border-primarycolor100 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                        />
                      </div>
                    </div>
                    <div className="flex gap-6 w-full lg:flex-row flex-col">
                      <div className="w-full">
                        <label
                          htmlFor=""
                          className="font-medium dark:text-white"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 mt-1 border-[1px] bg-backgroundWhiteSmoke rounded-rounded12 border-primarycolor100 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor=""
                          className="font-medium dark:text-white"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          className="w-full p-2 mt-1 border-[1px] bg-backgroundWhiteSmoke rounded-rounded12 border-primarycolor100 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 border-[1px] border-primarycolor100 p-4 rounded-rounded12 dark:border-fontcolorslate700">
                  <div className="flex items-center justify-between gap-5">
                    <h1 className="text-h4 font-bold text-fontcolorslate700 dark:text-white">
                      Your Password
                    </h1>
                    <button className="flex place-items-center gap-2 text-h5 font-semibold border-[1px] border-primarycolor100 py-2 px-3 transition-all rounded-rounded12 text-primarycolor900 hover:bg-primarycolor900 hover:text-white dark:text-white dark:border-fontcolorslate700">
                      <HiPencilSquare />
                      Edit
                    </button>
                  </div>
                  <div className="grid gap-5">
                    <div className="flex flex-col w-full lg:flex-col">
                      <label htmlFor="" className="font-medium dark:text-white">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 mt-1 border-[1px] bg-backgroundWhiteSmoke rounded-rounded12 border-primarycolor100 dark:bg-DarkGray600 dark:text-[white] dark:border-fontcolorslate700"
                      />
                    </div>
                  </div>
                </div>
              </form>
              <Button className="button-primary w-max dark:bg-secondarycolor">
                Save
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
