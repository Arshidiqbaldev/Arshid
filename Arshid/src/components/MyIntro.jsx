import React from "react";

const MyIntro = () => {
  return (
    <>
      <article className="flex flex-col gap-2 w-full ">
        <p>
          Hello, I’m <strong>Arshidiqbal</strong>, web designer & frontend
          developer. Designing and building modern, high-performing websites
          that help people and businesses stand out online.
        </p>

        <p>
          Currently working as a WordPress Designer at{" "}
          <a
            href="https://xevenpixels.com"
            target="_blank"
            rel="noreferrer"
            className=" text-white-1 hover:decoration-brand transition-all duration-300 ease-in-out decoration-1 decoration-white-2/50 underline-offset-4 decoration-solid underline "
          >
            Xeven Pixels
          </a>{" "}
          a web development agency, where I design and build websites for
          clients.
        </p>

        <p>
          These days, I’m studying Artificial Intelligence, diving deeper into
          full-stack web development and sharpening my graphic design skills.
        </p>
      </article>
    </>
  );
};

export default MyIntro;
