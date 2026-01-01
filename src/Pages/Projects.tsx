import { projectsData } from "../Data/projectsData";
import MediaDisplay from "../Components/MediaDisplay";

export default function Projects() {
  function renderProjects() {
    return (
      <>
        {projectsData.map((item, index) => {
          return (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div key={index} className="flex flex-col md:flex-row lg:flex-col lg:h-full p-5 mb-12 md:mb-0 
                md:justify-center md:items-cente group md:items-center
               transition-all duration-500 ease-in-out
               bg-[var(--light-color)] hover:bg-[var(--dark-color)]
               text-[var(--dark-color)] hover:text-[var(--light-color)]
               shadow-xl
              ">
                <MediaDisplay
                  video={item.video}
                  image={item.img}
                  alt={item.title} // Use item title as a fallback alt
                />
                <div className="md:min-w-1/3">
                  <div className="flex flex-row justify-between">
                    <h1 className="">{item.title}</h1>
                    <div className="flex flex-row items-center">
                      <h1 className="mx-1 font-light md:text-end"> | </h1>
                      <h1 className="font-light">{item.year}</h1>
                    </div>
                  </div>
                  <h1 className="text-[#6B6B5D] group-hover:text-[var(--light-color)] 
                    transition-all duration-500 ease-in-out
                    text-base font-semibold pb-2">{item.role}</h1>
                  <p className="text-inherit">
                    <span className="text-2xl">{item.letter}</span>
                    {item.discription}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </>
    );
  }

  return (
    <div id="projects" className="h-fit py-25 flex-col text-start z-0">
      <h1 className="text-4xl">PROJECTS</h1>
      <div
        className="flex flex-col md:flex-col md:gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-b-12 ">
        {renderProjects()}
      </div>
    </div>
  );
}
