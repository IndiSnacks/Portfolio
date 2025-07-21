export default function Projects() {

  const projectData = [
    {
      url: "https://ucsddesign.co/",
      img: "../../public/img/test_img.png",
      title: "Desgin Frontiers",
      year: "2024",
      role: "Web Developer",
      letter: "D",
      discription: "esgin Frontiers is Design Co's annual design-a-thon where students get to present their design ideas and impmetations to industry designers. We created this site using React, SCSS, Vite, and hosted it using vercel. For the project I contributed the astroid interactions and the styling for main pages"
    },
    {
      url: "https://ucsddesign.co/",
      img: "../../public/img/test_img.png",
      title: "Desgin Frontiers",
      year: "2024",
      role: "Web Developer",
      letter: "D",
      discription: "esgin Frontiers is Design Co's annual design-a-thon where students get to present their design ideas and impmetations to industry designers. We created this site using React, SCSS, Vite, and hosted it using vercel. For the project I contributed the astroid interactions and the styling for main pages"
    },
    {
      url: "https://ucsddesign.co/",
      img: "../../public/img/test_img.png",
      title: "Desgin Frontiers",
      year: "2024",
      role: "Web Developer",
      letter: "D",
      discription: "esgin Frontiers is Design Co's annual design-a-thon where students get to present their design ideas and impmetations to industry designers. We created this site using React, SCSS, Vite, and hosted it using vercel. For the project I contributed the astroid interactions and the styling for main pages"
    },
    {
      url: "https://ucsddesign.co/",
      img: "../../public/img/test_img.png",
      title: "Desgin Frontiers",
      year: "2024",
      role: "Web Developer",
      letter: "D",
      discription: "esgin Frontiers is Design Co's annual design-a-thon where students get to present their design ideas and impmetations to industry designers. We created this site using React, SCSS, Vite, and hosted it using vercel. For the project I contributed the astroid interactions and the styling for main pages"
    },

  ];

  function renderProjects() {

    return (
      <>
        {projectData.map((item, index) => {
          return (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div key={index} className="flex flex-col md:flex-row lg:flex-col p-5 mb-12 md:mb-0
               group
               transition-all duration-500 ease-in-out
               bg-[var(--light-color)] hover:bg-[var(--dark-color)]
               text-[var(--dark-color)] hover:text-[var(--light-color)]
               shadow-lg 
              ">
                <img
                  className="hight-auto md:max-w-2/5 md:pr-6 lg:pr-0 lg:max-w-full lg:grayscale
                   transition-all duration-500 ease-in-out
                   group-hover:grayscale-0"
                  src={item.img}
                />
                <div className="">
                  <div className="flex flex-row">
                    <h1 className="">{item.title}</h1>
                    <h1 className="mx-2 font-normal"> | </h1>
                    <h1 className="font-light">{item.year}</h1>
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
