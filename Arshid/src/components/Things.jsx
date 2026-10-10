import React, { useState, useEffect } from "react";
import bestfonts from "../assets/bestfonts.webp";
import socialCarousel from "../assets/socialmediacarousel.webp";
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
];

const Things = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Check if the browser has already loaded everything
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      // 2. Wait for all fonts, text, and heavy images to download
      const handleLoad = () => setIsLoading(false);
      window.addEventListener("load", handleLoad);

      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    document.title = "Things @Arshidiqbal";
  });
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col gap-6 w-full">Loading...</div>
      ) : (
        <div className="flex flex-col gap-6 w-full">
          <Carrot>
            Design Resources<span className="text-brand inline-flex">.</span>
          </Carrot>

          <div className="flex  gap-2 w-full flex-wrap ">
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
      )}
    </>
  );
};

export default Things;
