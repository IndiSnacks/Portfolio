import { Link } from "react-router-dom";
import { navLinks } from "../Data/navData";

export default function Navbar() {

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function renderNav() {
    return navLinks.map((item, index) => {
      return (
        <div key={index}>
          <div className="px-3 text-[var(--dark-color)] 
            hover:text-[var(--light-color)] hover:bg-[var(--dark-color)]
                /* Default state of the ::before pseudo-element */
                before:content-['']
                before:absolute
                before:top-0
                before:right-0                  
                before:w-full
                before:h-full
                before:bg-[var(--dark-color)]
                before:z-[-1]
                before:origin-right 
                before:scale-x-0 
                before:transition-transform before:duration-300 before:ease-out
                hover:before:scale-x-100 
            ">
            {item.type === 'external' ? (
              <a
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1>{item.name}</h1>
              </a>
            ) : item.type === 'route' ? (
              <Link
                to={item.path}
              >
                <h1>{item.name}</h1>
              </Link>
            ) : (
              <button
                onClick={() => scrollToSection(item.targetId!)}
              >
                <h1>{item.name}</h1>
              </button>
            )}

          </div>
        </div>
      )
    })
  }

  return (
    <>
      <div className="w-full h-[2px] bg-[var(--dark-color)]"></div>
      <div className="w-full flex flex-row justify-between px-3">
        {renderNav()}
      </div>
      <div className="w-full h-[2px] bg-[var(--dark-color)]"></div>
    </>
  );
}
