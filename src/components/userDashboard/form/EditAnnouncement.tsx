import React, { useState } from "react";
import { BiSolidCommentEdit } from "react-icons/bi";
import { motion } from "framer-motion";
import { HiMiniXMark } from "react-icons/hi2";
import { Button, Checkbox } from "@nextui-org/react";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { PiUploadSimpleBold } from "react-icons/pi";
import { IoLinkSharp } from "react-icons/io5";
export const EditAnnouncement = ({ setEditAnnounce }: any) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdown = () => {
    setOpenDropdown((prev) => !prev);
  };
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
            <BiSolidCommentEdit className="text-h2" />
            <h1 className=" text-h4 font-bold ">Edit Announcement</h1>
          </div>
          <div className="grid gap-5 w-full  z-30 ">
            <div>
              <Button className="" onClick={dropdown}>
                Class Select
                <RiArrowUpSLine
                  className={`${openDropdown ? "rotate-0" : "rotate-180"}`}
                />
              </Button>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.2 }}
                className={`bg-backgroundWhiteSmoke mt-2 w-max p-3 rounded-rounded12 transition-all delay-150 ${
                  openDropdown ? "block" : "hidden"
                }`}
              >
                <Checkbox
                  color="secondary"
                  defaultValue={["buenos-aires"]}
                  label="Select cities"
                  className="grid gap-2"
                >
                  <div className="flex flex-col gap-2 w-full">
                    <Checkbox className="py-2 px-6" value="buenos-aires">
                      Buenos Aires
                    </Checkbox>
                    <Checkbox className="py-2 px-6" value="sydney">
                      Sydney
                    </Checkbox>
                    <Checkbox className="py-2 px-6" value="london">
                      London
                    </Checkbox>
                    <Checkbox className="py-2 px-6" value="tokyo">
                      Tokyo
                    </Checkbox>
                  </div>
                </Checkbox>
              </motion.div>
            </div>
            <form action="" className="grid gap-5">
              <div className="flex flex-col">
                <textarea
                  id="announcement"
                  className="w-full p-2 h-32 rounded-lg border border-primarycolor200 resize-none transition-height duration-300 ease-in-out dark:bg-DarkGray600 dark:text-slate-50 dark:border-fontcolorslate700"
                  placeholder="Write your announcement here..."
                />
              </div>
            </form>
            <div className="flex items-center justify-between gap-5 flex-col sm:flex-row w-full">
              <div className="container flex items-center gap-6 justify-between sm:justify-start sm:gap-2">
                {[FaGithub, FaYoutube, PiUploadSimpleBold, IoLinkSharp].map(
                  (Icon, index) => (
                    <div
                      key={index}
                      className={`w-max sm:p-2 rounded-full sm:text-h2 border border-primarycolor200 dark:text-white hover:bg-primarycolor900 hover:text-white dark:border-fontcolorslate700 p-1 text-h4 ${
                        Icon === FaYoutube ? "text-secondarycolor" : ""
                      } ${
                        Icon === PiUploadSimpleBold
                          ? "text-primarycolor400"
                          : ""
                      } ${Icon === IoLinkSharp ? "text-primarycolor400" : ""}`}
                    >
                      <Icon />
                    </div>
                  )
                )}
              </div>
              <div className="flex items-center  justify-start gap-3 sm:w-full">
                <Button
                  className="bg-primarycolor900 text-white"
                  onClick={() => setEditAnnounce(false)}
                >
                  Cancel
                </Button>
                <Button className="bg-primarycolor900 text-white">Post</Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
