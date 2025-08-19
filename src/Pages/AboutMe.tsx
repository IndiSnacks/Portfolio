export default function AboutMe() {
  return (
    <div id="about" className="h-fit mt-4 flex-col text-start z-0">
      <h1 className="text-4xl my-5">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <p className="pt-4">
            <span className="text-2xl">H</span>ey there! I'm Sahil Gathe, a
            software engineer based out of California. Crafting a web that feels
            as fun and interactive brought to life through thoughtful design and
            robust code. I absolutely love teaming up with folk form all
            background designers, developers, storyteller, and even musicians to make
            digital experiences truly shine. My journey into software
            engineering actually kicked off during the pandemic when I taught
            myself C# to build games in Unity. That little spark quickly grew
            into a full-blown passion for building software that people
            genuinely enjoy using.
          </p>
          <ul className="m-5">
            <li>
              {" "}
              <strong>Founding Software Engineer</strong> @ Doceo
            </li>
            <li>
              {" "}
              <strong>Software Engineer Intern</strong> @ Center For Health
              Design
            </li>
            <li>
              {" "}
              <strong>Student Software Engineer</strong> @ Center For Energy
              Research
            </li>
            <li>
              {" "}
              <strong>Web Developer</strong> @ Design Co
            </li>
          </ul>
          <p className="pt-4">
            <span className="text-2xl">W</span>when I'm not working, you'll
            probably find me pulling all nighters for a game jam, lifting at the
            gym, brewing the best coffee, diving into movies (come say hi on
            Letterboxd!), or out cycling. I'm always open to chatting about
            anything tech, career, games or even coffee just hit me up on <a href="https://www.linkedin.com/in/sahilgathe/"><u>LinkedIn</u></a>!
          </p>
        </div>
        <div className="mt-5 md:m-5 md:w-full relative aspect-[2/3]">
          <img
            src="/img/grad_photo.JPG"
            alt="Sahil Gathe's graduation photo in front of a modern building"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
