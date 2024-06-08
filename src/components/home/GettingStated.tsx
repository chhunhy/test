import React from "react";
import GettingCard from "./card/GettingCard";

const GettingStated = () => {
  return (
    <section className=" pt-6 dark:bg-DarkGray600">
      <div className="container">
        <div
          data-aos="zoom-in"
          className="pt-14 pb-10 grid place-content-center gap-5 md:gap-7 w-full"
        >
          <h2
            data-aos="zoom-in"
            className="text-h1 text-center text-primarycolor900 font-bold dark:text-secondarycolor"
          >
            Getting start with GradesBot
          </h2>
          <p
            data-aos="zoom-in"
            className="text-h5 text-fontcolorslate600 text-center dark:text-white"
          >
            Here the step for getting with Gradesbot{" "}
          </p>
          <GettingCard />
        </div>
      </div>
    </section>
  );
};

export default GettingStated;
