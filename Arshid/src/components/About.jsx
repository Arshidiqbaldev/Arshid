import React, { useEffect } from "react";
import Myheader from "./Myheader";
import MyIntro from "./MyIntro";
import Myfooter from "./Myfooter";
import Carrot from "./Carrot";

const About = () => {
  useEffect(() => {
    document.title = "Arshidiqbal designer & frontend developer";
  });

  return (
    <div className="flex flex-col gap-5 w-full">
      <Myheader />
      <Carrot>About me</Carrot>
      <MyIntro />
      <Carrot>Follow me</Carrot>
      <Myfooter />
      <Carrot>Contact me</Carrot>
    </div>
  );
};

export default About;
