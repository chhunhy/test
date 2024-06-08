"use client";
import React from "react";
import { motion } from "framer-motion";
import { NavbarOutClass } from "../../../components/userDashboard/NavbarOutClass";

export default function Setting() {
  return (
    <main className="w-full">
      <NavbarOutClass />
      <div className="container flex items-center justify-center">
        <div className="mt-[3rem] mb-5">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
            className="relative gap-5 bg-backgroundWhite overflow-hidden rounded-rounded16 mb-5 px-11 py-6 lg:w-[56rem] h-screen w-full dark:bg-DarkGray600"
          >
            <div className="grid gap-5">
              <h1 className="text-h3 font-bold text-center text-fontcolorslate700 dark:text-white">
                Notification
              </h1>
              <div className="text-fontcolorslate700 mt-11 dark:text-white">
                <div className="grid gap-3">
                  <div className="grid gap-2">
                    <h1 className="text-h3 font-bold">Email</h1>
                    <p>Manage the notifications you receive by email.</p>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="font-semibold">Allow email notifications</h3>
                    <label className="setting">
                      <input type="checkbox" />
                      <span className="setting-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-fontcolorslate700 dark:text-white">
                <div className="grid gap-3">
                  <div className="grid gap-2">
                    <h1 className="text-h3 font-bold">GradesBot</h1>
                    <p>Customize the notifications you receive from GradesBot via email.</p>
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="font-semibold">Toggle to allow or disallow GradesBot email notifications.</h3>
                    <label className="setting">
                      <input type="checkbox" />
                      <span className="setting-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
