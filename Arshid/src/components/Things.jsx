import React from "react";
import bestfonts from "../assets/bestfonts.webp";
import socialCarousel from "../assets/socialmediacarousel.webp";
import miniProjects from "../assets/mini-projects.webp";
import Card from "./Card";
import Carrot from "./Carrot";

const cardData = [
  {
    id: 1,
    img: bestfonts,
    alt: "best fonts",
    detail: "A collection of the best fonts for web & graphic design.",
    action: "/Best-fonts.zip",
    ctaContent: "Download",
  },

  {
    id: 2,
    img: socialCarousel,
    alt: "social media carousel",
    detail: "Use my social media carousel design in Figma.",
    action:
      "https://www.figma.com/community/file/1633843015680063781/social-media-carousel-by-arshiddesigner",
    ctaContent: "Use in figma",
  },

  {
    id: 3,
    img: miniProjects,
    alt: "Mini projects",
    detail: "A collection of start up projects.",
    action: "https://arshidprojects.vercel.app/",
    ctaContent: "See projects",
  },

  {
    id: 4,
    img: miniProjects,
    alt: "Small mini projects",
    detail: "See my small javaScript projects best for learning",
    action: "https://arshidprojects.vercel.app/",
    ctaContent: "See projects",
  },
];

const Things = () => {
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <Carrot >Design Resources<span className="text-brand" >.</span></Carrot>

        <div className="flex  gap-2 w-full flex-wrap">
          {cardData.map((card) => (
            <Card
              key={card.id}
              img={card.img}
              alt={card.alt}
              detail={card.detail}
              action={card.action}
              ctaContent={card.ctaContent}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Things;
