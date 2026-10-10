import React from "react";

const Education = () => {
  return (
    <>
      <dl className="flex  flex-col gap-2">
        <div className="flex flex-col md:flex-row md:items-center  gap-2 md:gap-4">
          <dt className="text-white-2">2023 - 25</dt>
          <dd className="grow">Faculty of Science, Computer Science.</dd>
        </div>
        <div className=" flex flex-col md:flex-row md:items-center  gap-2 md:gap-4">
          <dt className="text-white-2">
            2026 - {" "}
            <span className="  text-xl md:text-[23px] leading-0 inline-block">∞</span>
          </dt>
          <dd className="grow">
            Bachelor of Science, Artificial Intelligence.
          </dd>
        </div>
      </dl>
    </>
  );
};

export default Education;
