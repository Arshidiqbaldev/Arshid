import React, { useEffect } from "react";
import mariposa from "../assets/mariposa.webp";
import expats from "../assets/Expats-Reality.webp";
import cischool from "../assets/cischools-pk.webp";
import Carrot from "./Carrot";

const cardData = [
  {
    id: 1,
    img: mariposa,
    alt: "Mariposa Languages",
    action: "https://mariposalanguages.com/",
  },

  {
    id: 2,
    img: cischool,
    alt: "CI Schools",
    action: "https://cischools.pk/",
  },

  {
    id: 3,
    img: expats,
    alt: "Expats Reality",
    action: "https://www.expatsreality.cz/",
  },
];

const Card = ({ img, action, alt }) => {
  return (
    <>
      <div className=" flex flex-col  gap-2 border border-border-color w-full bg-black-2 rounded-3xl overflow-hidden ">
        <div className="rounded-br-2xl overflow-hidden rounded-bl-2xl">
          <img
            className="w-full  scale-105 object-cover object-top"
            src={img}
            alt={alt}
          />
        </div>

        <div className="flex grow flex-col  items-start p-2 gap-2">
          <h2 className="text-white-1 capitalize "> {alt}</h2>

          <a
            className="py-2 px-8  bg-brand text-black-2 rounded-2xl text-sm text-center"
            href={action}
          >
            Visit Site
          </a>
        </div>
      </div>
    </>
  );
};

const Work = () => {

   useEffect(() => {
      document.title = "Work @Arshidiqbal";
    });

  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        <Carrot>
          My work<span className="text-brand inline-flex">.</span>
        </Carrot>

        <div className="flex  gap-4 w-full flex-wrap">
          {cardData.map((card) => (
            <Card
              key={card.id}
              img={card.img}
              alt={card.alt}
              action={card.action}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
