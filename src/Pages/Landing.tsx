import { lazy, Suspense } from "react";

const Mug = lazy(() => import("../Components/Mug"));

export default function Landing() {
  return (
    <div
      id="landing"
      className="flex flex-col md:flex-row lg:h-[65vh] mt-6 gap-8 items-center z-0"
    >
      <div className=" flex-col text-start md:w-2/3 w-full">
        <h1 className="text-2xl lg:text-3xl ">HELLO I'M </h1>
        <h1 className="text-4xl lg:text-6xl py-3 sarina-font"> Sahil Gathe </h1>
        <p className="pt-4 text-xl">
          <span className="text-4xl">I</span>'m am a developer and designer who
          just graduated form UC San Diego with a B.S in Computer Science. I
          focus on crafting and programming unique experiences on the web. I
          like to blend my love for making games with web we interact with
          everyday.
        </p>
      </div>
      <div className="md:w-1/3 w-full">
        <Suspense>
          <Mug />
        </Suspense>
      </div>
    </div>
  );
}
