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
    discription: "esign Co's annual design-a-thon. We built a full-stack event registration platform for Design Co's annual design-a-thon using Next.js, MongoDB, and React with Tailwind CSS. Implemented secure user authentication with BetterAuth and database integration to manage participant data for 100+ attendees. Collaborated with designers and marketers to create an engaging user experience that streamlined event registration and information delivery"
  },
  {
    url: "/notebook/Music Gen Model.html",
    video: "/vid/myvid.mp4",
    title: "ML Music Generator",
    year: "2025",
    role: "Mechiene Learning Engineer",
    letter: "D",
    discription: "eveloped an end-to-end neural music generation pipeline using PyTorch and Python that produces listenable ambient music with recognizable genre characteristics. Trained LSTM architecture on MIDI datasets with custom preprocessing workflows, achieving unconditional sequential music generation in just 2 weeks. "
  },
  {
    url: "https://github.com/ucsddesignco/stride2024",
    video: "/vid/Stride 2025.mov",
    title: "Stride",
    year: "2025",
    role: "Web Developer",
    letter: "C",
    discription: "reated a dynamic career fair website for Design Co's annual design-forward networking event connecting students with recruiters from Google, Deloitte, and Illumina. Built using React, TypeScript, and SCSS to showcase company profiles, schedule, and information"
  },
  {
    url: "https://github.com/ucsddesignco/up-grade24",
    video: "/vid/Up-Grade 2024.mov",
    title: "Up Grade",
    year: "2024",
    role: "Web Developer",
    letter: "U",
    discription: "P-Grade is a 10-week summer internship program where students work with a local nonprofit to enhance their branding and increase community exposure. We developed an interactive website intergrating Matter.js elemnts to creating engaging physics based visuals."
  },
  {
    url: "https://github.com/ucsddesignco/frontiers24",
    video: "/vid/Design Frontiers 2024.mp4",
    title: "Design Frontiers",
    year: "2024",
    role: "web developer",
    letter: "C",
    discription: "ontributed to Design Co's flagship design-a-thon website by implementing interactive asteroid animations and styling core pages using React, SCSS, and Vite. Focused on creating engaging visual interactions that reflected the event's creative and innovative spirit"
  },
  {
    url: "https://github.com/IndiSnacks/CSE167-HW4",
    img: "/img/ray-tracer-out.png",
    title: "Ray Tracer",
    year: "2023",
    role: "Graphic Engineer",
    letter: "B",
    discription: "uilt a software ray tracer from scratch using C++ and OpenGL that renders complex 3D scenes with realistic lighting and shadows. Implemented core ray tracing algorithms with bounding box acceleration structures for spatial partitioning, enabling efficient rendering of geometric primitives."
  },
  {
    url: "https://github.com/IndiSnacks/",
    img: "/img/flying Game.gif",
    title: "VR Flying Game",
    year: "2023",
    role: "Game Devloper",
    letter: "D",
    discription: "eveloped an immersive VR fligh gane using Unity and C# that allows players to create custom point-to-point racing tracks in virtual reality. Implemented intuitive VR controls and physics-based flight mechanics for aerial navigation and competitive lap timing."
  },
];

