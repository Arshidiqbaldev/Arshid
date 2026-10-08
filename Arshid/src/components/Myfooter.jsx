import React from "react";

const Myfooter = () => {
  return (
    <>
      <footer className="flex w-full items-center gap-2 ">
        <a
          className="transition-all ease-in-out duration-300 p-1 hover:text-brand "
          href="https://github.com/Arshidiqbaldev"
        >
          Github
        </a>

        <span className="select-none text-white-2">|</span>

        <a
          className="transition-all ease-in-out duration-300 p-1 hover:text-brand "
          href="https://figma.com/@arshiddesigner"
        >
          Figma
        </a>

        <span className="select-none text-white-2 ">|</span>

        <a
          className="transition-all ease-in-out duration-300 p-1 hover:text-brand "
          href="https://www.instagram.com/arshiddesigner"
        >
          Instagram
        </a>

        <span className="select-none text-white-2">|</span>

        <a
          className="transition-all ease-in-out duration-300 p-1 hover:text-brand "
          href="https://www.tiktok.com/@arshiddesigner"
        >
          Tiktok
        </a>
      </footer>
    </>
  );
};

export default Myfooter;
