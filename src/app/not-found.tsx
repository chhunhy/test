"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  const route = useRouter();
  return (
    <div className="bg-backgroundWhite h-screen items-center flex justify-center overflow-hidden">
      <div className="container items-center text-center flex justify-center flex-col md:gap-5 gap-3">
        <div className="lg:w-[60%] w-full">
          <Image
            src="/assets/404.png"
            alt="Not Found"
            width={900}
            height={900}
            className="w-[100%]"
          />
        </div>
        <div className="text-fontcolorslate700">
          <h1 className="text-h1 font-bold">Page Not Found</h1>
          <p className="mt-2">
            The page you are looking for doesn&#39;t exist or an other error
            occurred, go back to the homepage
          </p>
        </div>
        <button
          onClick={() => route.push("/user-dashboard")}
          className="sm:w-full lg:w-auto my-2 border rounded-rounded12 py-4 px-8 text-center bg-primarycolor900 text-white transition-all hover:bg-primarycolor700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
        >
          Back to home!
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
