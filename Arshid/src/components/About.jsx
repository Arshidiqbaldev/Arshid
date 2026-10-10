import React, { useEffect } from "react";
import Myheader from "./Myheader";
import MyIntro from "./MyIntro";
import Myfooter from "./Myfooter";
import Carrot from "./Carrot";
import { Education } from "./Education";

const About = () => {
  useEffect(() => {
    document.title = "Arshidiqbal designer & frontend developer";
  });

  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <Myheader />
        <Carrot>About</Carrot>
        <MyIntro />
        <Carrot>Follow</Carrot>
        <Myfooter />
        <Carrot>Education</Carrot>
        <Education/>
      </div>
    </>
  );
};

export default About;
