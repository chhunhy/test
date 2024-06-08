import React from "react";
import WhyChooseCard from "./card/WhyChooseCard";

const WhyChoose = () => {
  return (
    <section className="dark:bg-DarkGray600">
      <div className="container">
        <div className="pt-14 pb-10 grid place-content-center gap-6 w-full">
          <h2
            data-aos="zoom-in"
            className="text-h1 text-center text-primarycolor900 font-bold dark:text-secondarycolor"
          >
            Why Choose GradesBot
          </h2>
          <p
            data-aos="zoom-in"
            className="text-h5 text-fontcolorslate600 text-center dark:text-white pb-2"
          >
            We have four main role for our feature.
          </p>
          <WhyChooseCard />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
