import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import Image from "next/image";

const Feature = () => {
  return (
    <section id="feature" className="dark:bg-DarkGray600">
      <div className="container">
        <div className="pt-14 pb-10 grid place-content-center gap-y-10 md: w-full ">
          <h2
            data-aos="zoom-in"
            className="text-h1 text-center text-primarycolor900 font-bold dark:text-secondarycolor"
          >
            GradesBot Features
          </h2>

          {/* feature1 submission*/}
          <div className="mt-6 w-full flex flex-col lg:flex-row justify-center items-center">
            <div data-aos="zoom-in-right" className="w-full  lg:w-1/2 ">
              <div className="mx-auto w-[95%] lg:w-[80%] grid grid-cols-1 place-content-center items-center gap-y-3 lg:place-content-start">
                <div className="mx-auto lg:mx-0 text-h7 w-36 text-primarycolor900 p-3 rounded-rounded8 border border-primarycolor250 flex justify-center lg:justify-start gap-x-2 dark:text-white dark:border-primarycolor700">
                  <span className="text-h4">
                    <HiPencilSquare />
                  </span>
                  <span className="font-semibold text-center lg:text-left">
                    Submission
                  </span>
                </div>
                <h3 className="text-h1 font-bold text-center lg:text-left dark:text-white">
                  Assignment Submission
                </h3>
                <p className="text-fontcolorslate600 text-h5 text-center lg:text-left dark:text-white">
                  Easily submit assignments on GradesBot. Upload your work,
                  track submission status, and receive feedback, all in one
                  place for a streamlined experience.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in-left" className="w-full  md:w-[80%] lg:w-1/2">
              <Image
                src="/assets/features/team.png"
                width={1000}
                height={1000}
                alt="Submision feature image"
                className="w-[90%]"
              ></Image>
            </div>
          </div>

          {/* feature2 auto grading*/}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center">
            <div data-aos="zoom-in-right" className="w-full sm:w-[80%] lg:w-1/2">
              <Image
                src="/assets/features/auto-grade.png"
                width={1000}
                height={1000}
                alt="Auto grading feature image"
                className="w-[90%]"
              ></Image>
            </div>

            <div data-aos="zoom-in-right" className="w-full  lg:w-1/2 ">
              <div className="mx-auto w-[95%] lg:w-[80%] grid grid-cols-1 place-content-center items-center gap-y-3 lg:place-content-start">
                
                <div className="mx-auto lg:mx-0 text-h7 w-40 text-primarycolor900 p-3 rounded-rounded8 border border-primarycolor250 flex justify-center lg:justify-start gap-x-2 dark:text-white dark:border-primarycolor700 pr-4 ">
                  <span className="text-h4">
                    <HiPencilSquare />
                  </span>
                  <span className="font-semibold text-center lg:text-left">
                    Auto-Grading
                  </span>
                </div>
                <h3 className="text-h1 font-bold text-center lg:text-left dark:text-white">
                  Grading and Feedback
                </h3>
                <p className="text-fontcolorslate600 text-h5 text-center lg:text-left dark:text-white">
                  GradesBot simplifies grading and feedback. Quickly assess assignments, provide detailed comments, and deliver timely feedback to support student growth and learning.
                </p>
              </div>
            </div>
          </div>

          {/* feature3 notificatiion */}
          <div className="mt-6 w-full flex flex-col lg:flex-row justify-center items-center">
            <div data-aos="zoom-in-right" className="w-full  lg:w-1/2 ">
              <div className="mx-auto w-[95%] lg:w-[80%] grid grid-cols-1 place-content-center items-center gap-y-3 lg:place-content-start">
                <div className="mx-auto lg:mx-0 text-h7 w-36 text-primarycolor900 p-3 rounded-rounded8 border border-primarycolor250 flex justify-center lg:justify-start gap-x-2 dark:text-white dark:border-primarycolor700">
                  <span className="text-h4">
                    <HiPencilSquare />
                  </span>
                  <span className="font-semibold text-center lg:text-left">
                  Notification
                  </span>
                </div>
                <h3 className="text-h1 font-bold text-center lg:text-left dark:text-white">
                  Notification
                </h3>
                <p className="text-fontcolorslate600 text-h5 text-center lg:text-left dark:text-white">
                  Stay informed with GradesBot's notifications. Receive instant alerts for new assignments, grades, and class updates, ensuring you never miss important information.
                </p>
              </div>
            </div>
            <div data-aos="zoom-in-left" className="w-full  md:w-[80%] lg:w-1/2">
              <Image
                src="/assets/features/notification.png"
                width={1000}
                height={1000}
                alt="Submision feature image"
                className="w-[90%]"
              ></Image>
            </div>
          </div>

          {/* feature4 classwork*/}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center">
            <div data-aos="zoom-in-right" className="w-full sm:w-[80%] lg:w-1/2">
              <Image
                src="/assets/features/auto-grade.png"
                width={1000}
                height={1000}
                alt="Auto grading feature image"
                className="w-[90%]"
              ></Image>
            </div>

            <div data-aos="zoom-in-right" className="w-full  lg:w-1/2 ">
              <div className="mx-auto w-[95%] lg:w-[80%] grid grid-cols-1 place-content-center items-center gap-y-3 lg:place-content-start">
                <div className="mx-auto lg:mx-0 text-h7 w-32 text-primarycolor900 p-3 rounded-rounded8 border border-primarycolor250 flex justify-center lg:justify-start gap-x-2 dark:text-white dark:border-primarycolor700">
                  <span className="text-h4">
                    <HiPencilSquare />
                  </span>
                  <span className="font-semibold text-center lg:text-left">
                    Classwork
                  </span>
                </div>
                <h3 className="text-h1 font-bold text-center lg:text-left dark:text-white">
                  Classwork
                </h3>
                <p className="text-fontcolorslate600 text-h5 text-center lg:text-left dark:text-white">
                  Manage classwork efficiently with GradesBot. Organize assignments, materials, and discussions in one place, facilitating collaboration and enhancing the learning experience for students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
