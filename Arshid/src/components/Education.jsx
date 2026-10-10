import React from "react";

export const Education = () => {
  return (
    <>
      <dl class="flex  flex-col gap-2">
        <div class="flex flex-col md:flex-row md:items-center  gap-2 md:gap-4">
          <dt className="text-white-1  ">2023 - 25</dt>
          <dd className="grow">Faculty of Science, Computer Science.</dd>
        </div>
        <div class=" flex flex-col md:flex-row md:items-center  gap-2 md:gap-4">
          <dt className="text-white-1">
            2026 - <span className="text-[23px] leading-0  inline-flex">∞</span>
          </dt>
          <dd className="grow">
            Bachelor of Science, Artificial Intelligence.
          </dd>
        </div>
      </dl>
    </>
  );
};
