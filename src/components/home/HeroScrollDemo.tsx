import React from "react";
import HeroScrollMobile from "./heroScrollDemo/HeroScrollMobile";
import HeroScrollTablet from "./heroScrollDemo/HeroSrollTablet";
import HeroScrollDesktop from "./heroScrollDemo/HeroScrollDektop";

const HeroScrollDemo = () => {
  return (
    <>
      <section className=" flex justify-center items-center dark:bg-DarkGray600">
        <section className="flex sm:hidden">
          <HeroScrollMobile />
        </section>
        <section className="hidden sm:flex lg:hidden">
          <HeroScrollTablet />
        </section>
        <section className="hidden lg:flex ">
          <HeroScrollDesktop />
        </section>
      </section>
    </>
  );
};

export default HeroScrollDemo;
