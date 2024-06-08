import { InviteUser } from "@/components/userDashboard/form/InviteUser";
import { NavbarInClass } from "@/components/userDashboard/NavbarOutClass";
import Image from "next/image";
import React from "react";
import { HiMiniEllipsisHorizontal, HiMiniUserPlus } from "react-icons/hi2";

export default function People() {
  return (
    <div className="w-full">
      <NavbarInClass />
      <div className="container ">
        <div className=" w-full h-[4rem] mt-8 px-5 rounded-tr-rounded12 rounded-tl-rounded12 bg-backgroundWhite flex items-center justify-between place-items-center dark:bg-DarkGray600">
          <span className=" text-h3 font-bold text-fontcolorslate700 dark:text-white">
            Teacher
          </span>
          <button className="bg-primarycolor900 p-2 text-h4 text-white rounded-roundedFull mr-3">
            <HiMiniUserPlus />
          </button>
        </div>
        <div className="border-[1px] bg-backgroundWhite border-fontcolorslate100 dark:border-fontcolorslate600 dark:bg-DarkGray600">
          <div className="flex items-center gap-5 p-4">
            <div className="flex gap-1">
              <div className="bg-primarycolor900 w-1 h-5 rounded-rounded12 dark:bg-secondarycolor"></div>
              <div className="bg-primarycolor900 w-1 h-5 rounded-rounded12 dark:bg-secondarycolor"></div>
            </div>
            <div className="flex items-center justify-between gap-5 w-full">
              <div className="flex gap-5">
                <Image
                  src="/assets/user.jpg"
                  alt="user"
                  width={700}
                  height={700}
                  className="w-12 rounded-roundedFull"
                />
                <div className="grid gal-2">
                  <h1 className="text-h5 text-secondarycolor400 font-semibold">
                    Chan Chhaya
                  </h1>
                  <p className="text-fontcolorslate700 dark:text-white">Owner</p>
                </div>
              </div>
              <button className="text-h4 transition-transform duration-300 ease-in-out lg:rotate-90 dark:text-white mr-4">
                <HiMiniEllipsisHorizontal className="rotate-90" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[4rem] rounded-br-rounded12 rounded-bl-rounded12 bg-backgroundWhite dark:bg-DarkGray600"></div>
        <div className="grid mb-8">
          <div className=" w-full h-[4rem] mt-8 px-5 rounded-tr-rounded12 rounded-tl-rounded12 bg-backgroundWhite flex items-center justify-between place-items-center border-b-[1px] border-fontcolorslate100 dark:border-fontcolorslate600 dark:bg-DarkGray600">
            <span className=" text-h3 font-bold text-fontcolorslate700 dark:text-white">
              Student
            </span>
            <button className="bg-primarycolor900 p-2 text-h4 text-white rounded-roundedFull mr-3">
              <HiMiniUserPlus />
            </button>
          </div>
          <div className="flex items-center justify-center flex-col py-6 bg-backgroundWhite dark:bg-DarkGray600">
            <Image
              src="/assets/invite-user.png"
              alt="Not User"
              width={700}
              height={700}
              className="w-[70%] sm:w-[35%]"
            />
            <div className="flex items-center justify-center flex-col gap-3">
              <h1 className="text-h3 font-semibold text-fontcolorslate700 dark:text-white">
                Add students to this class
              </h1>
              <div className="flex place-items-center gap-2 text-h5 font-medium cursor-pointer text-secondarycolor">
                <HiMiniUserPlus />
                <p>Invited Student</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[4rem] rounded-br-rounded12 rounded-bl-rounded12 bg-backgroundWhite border-t-[1px] border-fontcolorslate100 dark:border-fontcolorslate600 dark:bg-DarkGray600"></div>
        </div>

        <div className="grid mb-8">
          <div className=" w-full h-[4rem] mt-8 px-5 rounded-tr-rounded12 rounded-tl-rounded12 bg-backgroundWhite flex items-center justify-between place-items-center border-b-[1px] border-fontcolorslate100 dark:border-fontcolorslate600 dark:bg-DarkGray600">
            <span className=" text-h3 font-bold text-fontcolorslate700 dark:text-white">
              Group
            </span>
            <button className="bg-primarycolor900 p-2 text-h4 text-white rounded-roundedFull mr-3">
              <HiMiniUserPlus className="text-h4"/>
            </button>
          </div>
          <div className="flex items-center justify-center flex-col py-6 bg-backgroundWhite dark:bg-DarkGray600">
            <Image
              src="/assets/invite-user.png"
              alt="Not User"
              width={700}
              height={700}
              className="w-[70%] sm:w-[35%]"
            />
            <div className="flex items-center justify-center flex-col gap-3">
              <h1 className="text-h3 font-semibold text-fontcolorslate700 dark:text-white">
                Add students to this group
              </h1>
              <div className="flex place-items-center gap-2 text-h5 font-medium cursor-pointer text-secondarycolor">
                <HiMiniUserPlus className="text-h4"/>
                <p>Create group</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[4rem] rounded-br-rounded12 rounded-bl-rounded12 bg-backgroundWhite border-t-[1px] border-fontcolorslate100 dark:border-fontcolorslate600 dark:bg-DarkGray600"></div>
        </div>
      </div>
      {/* <InviteUser /> */}
    </div>
  );
}
