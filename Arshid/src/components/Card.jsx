import React from "react";

const Card = ({ img, detail, action, alt, ctaContent }) => {
  return (
    <>
      <div className="  flex flex-col gap-2    w-full md:w-1/3 bg-black-3 rounded-2xl overflow-hidden grow ">
        <img className="w-full" src={img} alt={alt} />
        <div className="flex grow flex-col justify-stretch p-2 gap-2">
          <h2 className="text-white-1 capitalize " > {alt}</h2>
          <p className="text-[12px] grow">{detail}</p>
          <a
            className="p-2 bg-brand text-black-3 rounded-xl text-center"
            href={action}
          >
            {ctaContent}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
