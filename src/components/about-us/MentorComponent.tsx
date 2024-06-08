import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MentorType {
  mentorName: string;
  image: string;
}

const mentors: MentorType[] = [
  {
    mentorName: "Chan Chhaya",
    image: "/assets/aboutUs/cher-chhaya.png",
  },
  {
    mentorName: "Sin Sreyphea",
    image: "/assets/aboutUs/cher-phea.png",
  },
];

export default function MentorComponent() {
  return (
    <section className="dark:bg-DarkGray600">

      <div className="container mt-20 mb-10 flex flex-col justify-center items-center">
        <h2 className="text-h1 text-fontcolorslate700 font-bold dark:text-white">Our Mentor</h2>

        <div className="flex w-[90%] justify-center items-center ">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-3 justify-center items-center m-2 p-4"
            >
              <div className="w-full flex justify-center">
                <Image
                  className="w-[35%]"
                  src={mentor.image}
                  alt={mentor.mentorName}
                  width={1000}
                  height={1000}
                />
              </div>
              <h4 className="text-h4 text-primarycolor700 font-semibold">
                {mentor.mentorName}
              </h4>
              <h4 className="text-h4 text-secondarycolor font-semibold ">
                Mentor
              </h4>

              <div className="flex gap-x-4 justify-center items-center dark:text-white">
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
