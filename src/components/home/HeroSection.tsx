// components/AutoGradeFeatures.js
"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" z-10 bg-backgroundWhiteSmoke dark:bg-DarkGray600">
      <div className="container relative  mx-auto">

        <div className="z-30 grid gap-5 place-items-center px-4 sm:px-6 lg:px-8 pt-16">
          <h1
            data-aos="fade-down"
            className="z-10 text-center max-w-2xl text-h3 sm:text-h2 lg:text-h1 mt-14 font-bold text-primarycolor900 uppercase  
            dark:text-white"
          >
            Make Grading Go Faster With Our{" "}
            <span
              className="text-secondarycolor
            dark:text-secondarycolor"
            >
              Auto Grade
            </span>{" "}
            Features
          </h1>

          <p
            data-aos="zoom-out-up"
            className="max-w-2xl text-center text-h5 text-slate-600 
            dark:text-white "
          >
            GradesBot is a cutting-edge educational platform designed to
            optimize classroom management and enhance the teaching and learning
            experience.
          </p>

          <a
            data-aos="zoom-out-up"
            href="#"
            className="bg-primarycolor800 text-white rounded-lg px-4 py-2 hover:bg-primarycolor700 dark:bg-secondarycolor dark:hover:bg-secondarycolor600 dark:text-white"
          >
            Get Started
          </a>

          {/* Feature Section */}
          <div className="w-full hidden lg:block">

            <div
              data-aos="fade-down-right"
              className="f1-animation bg-backgroundWhite border-backgroundWhite px-10 py-3 rounded-full grid place-items-center gap-1 shadow-md absolute top-[340px] xl:top-[310px] left-8
              dark:bg-DarkGray800 dark:border dark:border-primarycolor900 "
            >
              <h3 className="text-h5 font-bold text-primarycolor900 dark:text-white">
                Auto Grading
              </h3>
              <p className="text-h7 text-fontcolorslate500 dark:text-white">
                Automated Grading Made Easy
              </p>
            </div>

            <div
              data-aos="zoom-in-right"
              className="f2-animation bg-backgroundWhite border-backgroundWhite px-10 py-3 rounded-full grid place-items-center gap-1 shadow-md absolute top-[440px] xl:top-[410px] left-40 xl:left-52 dark:bg-DarkGray800 dark:border dark:border-primarycolor900 "
            >
              <h3 className="text-h5 font-bold text-primarycolor900 dark:text-white">
                Notification
              </h3>
              <p className="text-h7 text-fontcolorslate500 dark:text-white">
                Real-Time Notifications
              </p>
            </div>

            <div
              data-aos="fade-down-left"
              className="f1-animation bg-backgroundWhite border-backgroundWhite px-10 py-3 rounded-full grid place-items-center gap-1 shadow-md absolute top-[340px] xl:top-[310px] right-8 dark:bg-DarkGray800 dark:border dark:border-primarycolor900 dark:text-secondarycolor"
            >
              <h3 className="text-h5 font-bold text-primarycolor900 dark:text-white">
                Assignment Submit
              </h3>
              <p className="text-h7 text-fontcolorslate500 dark:text-white">
                Streamlined Classwork Management
              </p>
            </div>

            <div
              data-aos="zoom-in-left"
              className="f2-animation bg-backgroundWhite border-backgroundWhite px-10 py-3 rounded-full grid place-items-center gap-1 shadow-md absolute top-[440px] xl:top-[410px] right-40 xl:right-52 dark:bg-DarkGray800 dark:border dark:border-primarycolor900"
            >
              <h3 className="text-h5 font-bold text-primarycolor900 dark:text-white">
                Classwork
              </h3>
              <p className="text-h7 text-fontcolorslate500 dark:text-white">
                Auto grading systems streamline
              </p>
            </div>
          </div>

          {/* Image Section */}


        </div>

        {/* Blur Background Elements */}
        <div className="w-1/2 z-10 dark:hidden">
          <div className="bg-blur1 top-28 -left-10"></div>
          <div className="bg-blur2 top-[480px] -left-28 hidden lg:flex"></div>
          <div className="bg-blur3 top-56 -right-24"></div>
          <div className="bg-blur4 top-[550px] -right-20 hidden lg:flex"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
