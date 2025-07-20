export default function Projects() {

  const projectData = [
    {
      img: "../../public/img/test_img.png",
      title: "Desgin Frontiers",
      year: "2024",
      role: "Web Developer",
      letter: "D",
      discription: "esgin Frontiers is Design Co's annual design-a-thon where students get to present their design ideas and impmetations to industry designers. We created this site using React, SCSS, Vite, and hosted it using vercel. For the project I contributed the astroid interactions and the styling for main pages"
    },
    {
      img: "../../public/img/test_img.png",
      title: "Desgin Frontiers",
      year: "2024",
      role: "Web Developer",
      letter: "D",
      discription: "esgin Frontiers is Design Co's annual design-a-thon where students get to present their design ideas and impmetations to industry designers. We created this site using React, SCSS, Vite, and hosted it using vercel. For the project I contributed the astroid interactions and the styling for main pages"
    },
    {
      img: "../../public/img/test_img.png",
      title: "Desgin Frontiers",
      year: "2024",
      role: "Web Developer",
      letter: "D",
      discription: "esgin Frontiers is Design Co's annual design-a-thon where students get to present their design ideas and impmetations to industry designers. We created this site using React, SCSS, Vite, and hosted it using vercel. For the project I contributed the astroid interactions and the styling for main pages"
    },
    {
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
            <div key={index} className="flex flex-col md:max-w-full md:flex-row lg:flex-col lg:max-w-1/2 pr-4 pb-12">
              <img className="hight-auto md:max-w-2/5 md:pr-6 lg:max-w-full lg:p-0" src={item.img} />
              <div>
                <div className="flex flex-row">
                  <h1 className="">{item.title}</h1>
                  <h1 className="mx-2 font-normal"> | </h1>
                  <h1 className="font-light">{item.year}</h1>
                </div>
                <h1 className="text-[#6B6B5D] text-base font-semibold pb-2">{item.role}</h1>
                <p>
                  <span className="text-2xl">{item.letter}</span>
                  {item.discription}
                </p>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <div id="projects" className="h-fit py-5 flex-col text-start z-0">
      <h1 className="text-4xl">PROJECTS</h1>
      <div className="flex flex-col lg:flex-row">
        {renderProjects()}
      </div>
    </div>
  );
}
