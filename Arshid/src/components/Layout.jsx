import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Loader from "./Loader";
import "../App.css";

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
      {isLoading && <Loader />}

      <section
        className={`flex flex-col items-center grow justify-center w-full px-4 pt-16 pb-32 max-w-160 transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </section>

      <nav
        className={`flex w-full fixed z-40   bottom-4 left-0 px-4 justify-center transition-all duration-100 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />
      </nav>
    </main>
  );
};

export default Layout;
