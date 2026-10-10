import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "../App.css";
import Loader from "./Loader";
const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      const handleLoad = () => setIsLoading(false);
      window.addEventListener("load", handleLoad);

      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <main className="flex flex-col items-center justify-center relative w-full min-h-dvh">
      {isLoading ? (
        <Loader />
      ) : (
        <section className=" flex flex-col items-center grow justify-center w-full px-4  pt-16 pb-32   max-w-160 ">
          {children}
        </section>
      )}

      <Navbar />
    </main>
  );
};

export default Layout;
