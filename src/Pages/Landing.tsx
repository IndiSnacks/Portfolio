export default function Landing() {
  return (
    <div id="landing" className="flex flex-row h-1/2 mt-6  gap-8 items-center z-0">
      <div className=" flex-col text-start">
        <h1 className="text-2xl lg:text-3xl ">HELLO I'M </h1>
        <h1 className="text-4xl lg:text-6xl py-3 sarina-font"> Sahil Gathe </h1>
        <p className="pt-4 text-xl"><span className='text-4xl'>I</span>'m am a developer and designer who just graduated form UC San Diego with a B.S in Computer Science. I focus on crafting and programing unique experiences on the web. I like to bled my love for making games with web we interact with everyday.
        </p>
      </div>
      <img
        className="w-1/4 h-auto max-sm:hidden pt-5 px-5"
        src="/img/Mug V2.png"
      />
    </div>
  );
}
