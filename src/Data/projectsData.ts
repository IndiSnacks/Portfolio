interface projectData {
  url: string,
  github?: string,
  img?: string,
  video?: string,
  title: string,
  year: string,
  role: string,
  letter: string,
  discription: string;
}

export const projectsData: projectData[] = [
  {
    url: "https://github.com/ucsddesignco/frontiers25",
    github: "https://github.com/",
    video: "/vid/Design Frontiers 2025.mov",
    title: "Desgin Frontiers",
    year: "2025",
    role: "Web Developer",
    letter: "D",
    discription: "esign Co's annual design-a-thon. For this site I implemented a database using MongoDB to store user data and connected it to our project with Next.JS. For the layout and styling we using React, and Tailwind. Lastly we implemented a login system using BetterAuth."
  },
  {
    url: "/notebook/Music Gen Model.html",
    video: "/vid/myvid.mp4",
    title: "ML Music Generator",
    year: "2025",
    role: "Mechiene Learning Engineer",
    letter: "D",
    discription: "eveloped a machine learning model which conditionally generates symbolic music data (midi files). To create this model we using PyTorch, Python, SciKitLearn. "
  },
  {
    url: "https://github.com/ucsddesignco/stride2024",
    video: "/vid/Stride 2025.mov",
    title: "Stride",
    year: "2025",
    role: "Web Developer",
    letter: "D",
    discription: "esign Co's annual career annual design-forward career fair aiming to connect aspiring designers with company representatives. Built using React, Typescript, HTML, and, SCSS."
  },
  {
    url: "https://github.com/ucsddesignco/up-grade24",
    video: "/vid/Up-Grade 2024.mov",
    title: "Up Grade",
    year: "2024",
    role: "Web Developer",
    letter: "U",
    discription: "P-Grade is a 10-week summer internship program where students work with a local nonprofit to enhance their branding and increase community exposure. We created this site using React and integrated MatterJS to create some physics elements"
  },
  {
    url: "https://github.com/ucsddesignco/frontiers24",
    video: "/vid/Design Frontiers 2024.mp4",
    title: "Design Frontiers",
    year: "2024",
    role: "web developer",
    letter: "D",
    discription: "esign frontiers is design co's annual design-a-thon where students get to present their design ideas and imputations to industry designers. we created this site using react, scss, vite, and hosted it using vercel. for the project i contributed the astroid interactions and the styling for main pages."
  },
  {
    url: "https://github.com/IndiSnacks/CSE167-HW4",
    img: "/img/ray-tracer-out.png",
    title: "Ray Tracer",
    year: "2023",
    role: "Graphic Engineer",
    letter: "D",
    discription: "eveloped a ray traced graphics render using C++, and OpenGL. The program takes a txt file of geometry and renders them using a ray tracing algorithm. "
  },
  {
    url: "https://github.com/IndiSnacks/",
    img: "/img/flying Game.gif",
    title: "VR Flying Game",
    year: "2023",
    role: "Game Devloper",
    letter: "U",
    discription: "tilized Unity, and C# to build a flight simulator which allowed players to create custom point-to-point tracks in VR and race to set lap times."
  },
];

