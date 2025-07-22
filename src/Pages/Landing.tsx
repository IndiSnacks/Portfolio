export default function Landing() {
  return (
    <div id="landing" className="h-1/2 mt-4 flex-col text-start z-0">
      <h1 className="text-2xl lg:text-3xl ">HELLO I'M </h1>
      <h1 className="text-4xl lg:text-6xl py-3 sarina-font"> Sahil Gathe </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="pb-6 h-70 w-full lg:w-2/3 bg-(--dark-color) mr-5">
        </div>
        <p className="pt-4 lg:w-1/3"><span className='text-2xl'>I</span>'m am a developer and designer who just graduated form UC San Diego with a B.S in Computer Science. I focus on crafting and programing unique experiences on the web. I like to bled my love love for making games with web we interact with everyday.
        </p>
      </div>
    </div>
  );
}
