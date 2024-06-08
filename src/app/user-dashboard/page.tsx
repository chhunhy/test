"use client";
import React from "react";
import CardClass from "@/components/userDashboard/card/CardClass";
import { TypeAnimation } from "react-type-animation";
import { NavbarOutClass } from "@/components/userDashboard/NavbarOutClass";
import Image from "next/image";
export default function HomePage() {
  return (
    <div className="w-full">
      <NavbarOutClass />
      <div className="container mx-auto">
        <div className="bg-primarycolor900 rounded-rounded24 lg:h-[390px] h-auto dark:bg-[#242526]">
          <div className="sm:flex items-center lg:justify-between sm:flex-col lg:flex-row px-10 lg:mt-24 mb-8 mt-[2rem] justify-center">
            <div className="text-white mb-32 w-full lg:relative lg:left-14 lg:text-start text-center left-0">
              <h1 className="text-[45px] font-bold">
                <TypeAnimation
                  sequence={[
                    "Welcome To GradesBot",
                    2000,
                    "Thank You For Using GradesBot",
                    2000
                  ]}
                  repeat={Infinity}
                />
              </h1>
              <p className="lg:w-[70%] w-full">
                Grades Bot automates grading, tracks assignments, and offers
                powerful insights, fostering collaboration and personalized
                learning. Join us now!
              </p>
            </div>
            <div className="lg:w-full w-auto">
              <Image
                src="/assets/welcome-robot.png"
                alt="welcome robot"
                width={700}
                height={700}
                className="drop-shadow relative lg:left-14 -top-20 w-[400px] left-0"
              />
            </div>
          </div>
        </div>
        <CardClass />
      </div>
    </div>
  );
}
