import React from "react";
import Navbar from "./Navbar";
import "../App.css"
const Layout = ({ children }) => {
  return (
    <main className="flex flex-col items-center justify-center relative w-full min-h-dvh">
      <section className=" flex flex-col items-center grow justify-center w-full px-4  pt-16 pb-32   max-w-160 ">
        {children}
      </section>

      <Navbar />
    </main>
  );
};

export default Layout;
