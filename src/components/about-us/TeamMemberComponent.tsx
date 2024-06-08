import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeamType {
  teamName: string;
  image: string;
  subject: string;
}

const team1: TeamType[] = [
  {
    teamName: "Dim Vipha",
    image: "/assets/aboutUs/vipha.png",
    subject: "Frontend",
  },
  {
    teamName: "Tha Thyda",
    image: "/assets/aboutUs/thyda.png",
    subject: "Frontend",
  },
  {
    teamName: "Chhem Chhunhy",
    image: "/assets/aboutUs/chhunhy.png",
    subject: "Frontend",
  },
];

const team2: TeamType[] = [
  {
    teamName: "Ly Taingey",
    image: "/assets/aboutUs/taingey.png",
    subject: "Frontend",
  },
  {
    teamName: "Phy Lymann",
    image: "/assets/aboutUs/lymann.png",
    subject: "Backend",
  },
  {
    teamName: "Thoeng Mengseu",
    image: "/assets/aboutUs/mengseu.png",
    subject: "Backend",
  },
  {
    teamName: "Pov Sokny",
    image: "/assets/aboutUs/sokny.png",
    subject: "Backend",
  },
];

export default function TeamComponent() {
  return (
    <section className="dark:bg-DarkGray600">
      <div className="container mt-20 mb-10 flex flex-col justify-center items-center">
        <h2 className="text-h1 text-fontcolorslate700 font-bold pt-14 dark:text-white">
          Our Amazing Team{" "}
        </h2>

        <div className="flex w-[90%] justify-center items-center ">
          {team1.map((team, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-3 justify-center items-center m-2 p-4"
            >
              <div className="w-full flex justify-center">
                <Image
                  className="w-[55%]"
                  src={team.image}
                  alt={team.teamName}
                  width={1000}
                  height={1000}
                />
              </div>
              <h4 className="text-h4 text-primarycolor700 font-semibold">
                {team.teamName}
              </h4>
              <h4 className="text-h4 text-secondarycolor font-semibold ">
                {team.subject}
              </h4>
              <div className="flex gap-x-4 justify-center items-center ">
                <Link href="#">
                  <Image
                    src="/assets/aboutUs/instagram.png"
                    alt="Instagram"
                    width={100}
                    height={100}
                    className="w-[80%] "
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/assets/aboutUs/github.png"
                    alt="Github"
                    width={100}
                    height={100}
                    className="w-[80%] "
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/assets/aboutUs/facebook.png"
                    alt="Facebook"
                    width={100}
                    height={100}
                    className="w-[80%] "
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-[95%] justify-center items-center ">
          {team2.map((team, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-3 justify-center items-center m-2 p-4"
            >
              <div className="w-full flex justify-center">
                <Image
                  className="w-[70%]"
                  src={team.image}
                  alt={team.teamName}
                  width={1000}
                  height={1000}
                />
              </div>
              <h4 className="text-h4 text-primarycolor700 font-semibold">
                {team.teamName}
              </h4>
              <h4 className="text-h4 text-secondarycolor font-semibold ">
                {team.subject}
              </h4>
              <div className="flex gap-x-8 justify-center items-center ">
                <Link href="#">
                  <Image
                    src="/assets/aboutUs/instagram.png"
                    alt="Instagram"
                    width={100}
                    height={100}
                    className="w-[80%] "
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/assets/aboutUs/github.png"
                    alt="Github"
                    width={100}
                    height={100}
                    className="w-[80%] "
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/assets/aboutUs/facebook.png"
                    alt="Facebook"
                    width={100}
                    height={100}
                    className="w-[80%] "
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
