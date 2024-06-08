"use client";
import Image from "next/image";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className=" flex h-screen items-center justify-center p-5 w-full bg-white">
      <div className="container text-center font-Staatliches">
        <div className="inline-flex rounded-full bg-sky-100 p-4">
          <div className="rounded-full stroke-primarycolor200 bg-primarycolor300 p-4">
            <Image src="/assets/error.gif" alt="" className="rounded-full w-20" width={700} height={700}/>
          </div>
        </div>
        <h1 className="mt-5 text-[30px] tracking-wider font-bold]">
          {error && <p className="text-fontcolorslate700">{error.message}</p>}
        </h1>
        <p className="text-fontcolorslate700 mt-5 lg:text-lg tracking-wider">
          Oops something went wrong. Try to refresh this page or <br /> feel
          free to contact us if the problem presists.
        </p>
        <div title="Click try again">
          <button
            className="sm:w-full lg:w-auto my-2 border rounded-rounded12 py-4 px-8 text-center bg-primarycolor900 text-white transition-all hover:bg-primarycolor700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
            onClick={reset}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
