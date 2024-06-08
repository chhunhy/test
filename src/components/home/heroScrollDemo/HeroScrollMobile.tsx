"use client";
import Image from "next/image";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 10], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-64 mx-auto h-max w-full border-4 border-white p-2 md:p-6 bg-white bg-transparent rounded-[30px] shadow-primarycolor700"
    >
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-backgroundWhiteSmoke dark:bg-col md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function HeroScrollMobile() {
  return (
    <section className="bg-backgroundWhiteSmoke dark:bg-DarkGray600 h-[45rem] ">
      <div className="flex flex-col overflow-hidden justify-center items-center">
        <ContainerScroll
          titleComponent={  
            <>
              {/* <h1 className="text-4xl font-semibold  text-primarycolor800 dark:text-white">
                <span className="text-2xl md:text-4xl font-bold leading-none">
                  User Dashboard
                </span>
              </h1> */}
            </>
          }
        >
          <Image
            src="/assets/home/a1.jpg"
            alt="Dashboard image"
            width={1500}
            height={1500}
            className="w-full opacity-100 rounded-rounded8"
          ></Image>
        </ContainerScroll>
      </div>
    </section>
  );
}
