import React from "react";
import { Blocks } from "loading-dev";

<Blocks size={48} />;

const Loader = () => {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center  w-full">
        <Blocks className="text-brand" size={28} />
      </div>
    </>
  );
};

export default Loader;
