import React from "react";
import Navbar from "./Navbar";
import "../App.css"
const Layout = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center relative w-full gap-2 min-h-dvh">
      <section className=" flex flex-col items-center grow justify-center w-full px-4  py-24  max-w-150 ">
        {children}
      </section>

      <Navbar />
    </main>
  );
};

export default Layout;
