import React from "react";
import Image from "next/image";

const LoadingComponent = () => {
  return (
    <div className="h-screen flex w-full justify-center items-center">
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="relative w-32 h-32 border-8 text-primarycolor900 animate-spin border-gray-300 flex items-center justify-center border-t-primarycolor900 rounded-full"></div>
        <Image
          src="/assets/GradesBot Logo-04.png"
          alt=""
          width={700}
          height={700}
          className="absolute mt-5 w-16 animate-bounce"
        />
      </div>
    </div>
  );
};

export default LoadingComponent;
