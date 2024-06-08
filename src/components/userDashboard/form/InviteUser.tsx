// "use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InviteUser () {
  return (
    <main className="create-class h-screen w-full z-50 bg-black bg-opacity-50">
        <div className="container flex items-center justify-center h-screen">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-start justify-center flex-col gap-5 bg-backgroundWhite overflow-hidden rounded-rounded16 px-11 py-6 md:w-[40rem] w-full dark:bg-DarkGray600"
          >
            <div className="flex gap-3 place-items-center text-primarycolor900 w-full pb-4 border-b-[1px] border-b-primarycolor100 dark:text-white">
              <Image
                src="/assets/icons-user-groups.png"
                alt="Icon Group"
                width={700}
                height={700}
                className="w-5"
              />
              <h1 className=" text-h4 font-bold ">Edit Announcement</h1>
            </div>
            <div className="grid gap-5 w-full  z-30 "></div>
          </motion.div>
        </div>
      </main>
  );
};
