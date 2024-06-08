"use client";
import React, { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiMiniEllipsisHorizontal,
  HiLink,
  HiClipboard,
  HiArrowPath,
  HiBackspace,
  HiEyeDropper
} from "react-icons/hi2";
import { FaGithub, FaYoutube } from "react-icons/fa6";
import { IoLinkSharp } from "react-icons/io5";
import { PiUploadSimpleBold } from "react-icons/pi";
import { Button } from "@nextui-org/react";

import { NavbarInClass } from "@/components/userDashboard/NavbarOutClass";
import { CardAssignmentStream } from "@/components/userDashboard/card/CardAssignment";
import { Announcement } from "@/components/userDashboard/announcement/Announcement";

export default function Stream() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAnnounce, setAnnounce] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState("");

  const toggleMenu = () => setOpenMenu(!openMenu);
  const openAnnounceForm = () => setAnnounce(true);
  const closeAnnounceForm = () => setAnnounce(false);

  const announceVariants = {
    closed: {
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { height: "full", transition: { duration: 0.3, ease: "easeInOut" } }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const handlePostAnnouncement = () => {
    if (announcementText.trim() !== "") {
      const newAnnouncement = {
        text: announcementText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }),
        user: "Phy Lymann" // Replace with dynamic user data as needed
      };
      setAnnouncements([...announcements, newAnnouncement]);
      setAnnouncementText("");
      closeAnnounceForm();
    }
  };

  return (
    <div className="w-full">
      <NavbarInClass />
      <div className="container">
        <div className="flex items-start gap-4 mt-8">
          <motion.div
            className="grid gap-3 w-full bg-backgroundWhite py-2 px-4 rounded-lg dark:bg-DarkGray600"
            initial="closed"
            animate={openAnnounce ? "open" : "closed"}
            variants={announceVariants}
          >
            <div className="flex gap-5 w-full items-start mt-1 mb-1">
              <Image
                src="/assets/user.jpg"
                alt="User Announce"
                width={700}
                height={700}
                className="w-11 rounded-full"
              />
              <form className="w-full">
                <textarea
                  className={`w-full p-2 rounded-lg border border-primarycolor200 resize-none transition-height duration-300 ease-in-out dark:bg-DarkGray600 dark:text-slate-50 dark:border-fontcolorslate700 ${
                    openAnnounce ? "h-36" : "h-[45px]"
                  }`}
                  onClick={openAnnounceForm}
                  value={announcementText}
                  onChange={(e) => setAnnouncementText(e.target.value)}
                  placeholder="Write your announcement here..."
                />
              </form>
            </div>
            {openAnnounce && (
              <div className="relative flex items-center justify-between gap-3 pl-16 flex-col sm:flex-row">
                <div className="container flex items-center  justify-between  sm:justify-start gap-2">
                  {[FaGithub, FaYoutube, PiUploadSimpleBold, IoLinkSharp].map(
                    (Icon, index) => (
                      <div
                        key={index}
                        className={`w-max sm:p-2 rounded-full sm:text-h2 border border-primarycolor200 dark:text-white hover:bg-primarycolor900 hover:text-white dark:border-fontcolorslate700 p-2 text-h3 ${
                          Icon === FaYoutube ? "text-secondarycolor" : ""
                        } ${
                          Icon === PiUploadSimpleBold
                            ? "text-primarycolor400"
                            : ""
                        } ${
                          Icon === IoLinkSharp ? "text-primarycolor400" : ""
                        }`}
                      >
                        <Icon />
                      </div>
                    )
                  )}
                </div>
                <div className="flex items-center justify-between sm:justify-center gap-3 w-full sm:w-auto">
                  <Button
                    className="bg-primarycolor900 text-white"
                    onClick={closeAnnounceForm}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-primarycolor900 text-white"
                    onClick={handlePostAnnouncement}
                  >
                    Post
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
          <div className="flex gap-5 items-center justify-center bg-backgroundWhite py-[22px] px-4 lg:w-80 w-12 rounded-lg dark:bg-DarkGray600 dark:text-white">
            <div className="text-fontcolorslate700 dark:text-white hiddens lg:block">
              <span className="font-semibold">Class Code : </span>
              <span className="font-bold text-h5">6q7rvu</span>
            </div>
            <div className="relative z-10">
              <button
                className="text-h4 transition-transform duration-300 ease-in-out lg:rotate-90"
                onClick={toggleMenu}
              >
                <HiMiniEllipsisHorizontal />
              </button>
              {openMenu && (
                <motion.div
                  className="Drop-Shadow absolute text-fontcolorslate700 w-56 right-0 top-10 bg-backgroundWhite overflow-hidden rounded-lg"
                  initial="hidden"
                  animate="visible"
                  variants={menuVariants}
                >
                  <div className="menu px-4 py-3 border-b border-primarycolor200">
                    <span className="font-semibold">Class Code : </span>
                    <span className="font-bold text-h5">6q7rvu</span>
                  </div>
                  {[HiClipboard, HiLink, HiArrowPath, HiBackspace].map(
                    (Icon, index) => (
                      <div
                        key={index}
                        className="flex items-center px-4 py-3 gap-4 text-h5 font-semibold hover:bg-primarycolor200 hover:text-primarycolor900"
                      >
                        <Icon className="text-xl" />
                        <span>
                          {
                            [
                              "Copy class code",
                              "Copy invite Link",
                              "Reset class code",
                              "Turn off"
                            ][index]
                          }
                        </span>
                      </div>
                    )
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div
            className="relative h-[22rem] w-full overflow-hidden rounded-lg"
            style={{
              backgroundImage: "url('/assets/ttu.png')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <Button className="flex items-center gap-3 bg-primarycolor900 text-h4 mt-4 ml-4 rounded-lg text-white">
              <HiEyeDropper />
              Customize
            </Button>
            <div className="absolute py-4 px-14 left-0 bottom-0 bg-slate-900 bg-opacity-65 w-full">
              <div className="float-right text-white text-h3 font-semibold">
                DevOps
              </div>
            </div>
          </div>
        </div>
        {announcements.map((announcement, index) => (
          <Announcement key={index} announcement={announcement} />
        ))}
        <CardAssignmentStream menuVariants={menuVariants} />
      </div>
    </div>
  );
}
