import React from "react";
import Arshid from "../assets/arshiddesigner.webp";

const Myheader = () => {
  return (
    <>
      <header className="flex w-full  gap-4 justify-between ">
        <img
          fetchPriority="high"
          className="size-16 aspect-square rounded-2xl bg-black-2 hover:bg-brand transition-all ease-in-out duration-300 cursor-pointer "
          src={Arshid}
          alt={document.title}
        />

        <div className="flex grow flex-col gap-1 justify-center">
          <h1 className="text-xl text-white-1 font-semibold">
            Arshidiqbal<span className="text-brand">.</span>
          </h1>
          <p className="text-white-2 text-sm">Designer & frontend developer</p>
        </div>
      </header>
    </>
  );
};

export default Myheader;
