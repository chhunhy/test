import React, { useEffect } from "react";
import { NavbarOutClass } from "../../../components/userDashboard/NavbarOutClass";
import Image from "next/image";

export default function Archive() {
  return (
    <div className="w-full ">
      <NavbarOutClass />
      <div className="container flex items-center justify-center flex-col overflow-hidden gap-5 h-screen">
        <div className="sm:w-[45%] mt-5 overflow-hidden w-[85%]">
          <Image
            src="/assets/archiveClass.svg"
            alt="Archive Class"
            className="w-full "
            width={700}
            height={700}
          />
        </div>
        <p className="text-fontcolorslate700 font-medium text-h5 dark:text-white">None of your classes have been archived</p>
      </div>
    </div>
  );
}
