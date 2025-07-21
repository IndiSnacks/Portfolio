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
    return navLinks.map((item) => {
      const commonNavItemClasses = `
	        group relative overflow-hidden z-0
          text-2xl
	        px-3 py-1
	        text-[var(--dark-color)]
	        hover:text-[var(--light-color)] /* Text color change on hover */
	        transition-colors duration-300 ease-in-out /* Smooth text color transition */
	        
	        /* === PSEUDO-ELEMENT STYLING FOR BACKGROUND FILL === */
	        /* Default state of the ::before pseudo-element */
	        before:content-['']
	        before:absolute
	        before:top-0
	        before:right-0
	        before:w-full  /* Full width */
	        before:h-full  /* Full height */
	        before:bg-[var(--dark-color)] {/* The fill color */}
	        before:z-[-1]
	        before:origin-right
	        before:scale-x-0 {/* Start scaled down */}
	        before:transition-transform before:duration-300 before:ease-out
	        
	        /* Hover state of the ::before pseudo-element */
	        hover:before:scale-x-100 {/* Scale up on hover */}
	      `;

      if (item.type === 'external') {
        return (
          <a
            key={item.id}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={commonNavItemClasses}
          >
            <h1 className="relative z-10 text-2xl">{item.name}</h1>
          </a>
        );
      } else if (item.type === 'route') {
        return (
          <Link
            key={item.id}
            to={item.path}
            className={commonNavItemClasses}
          >
            <h1 className="relative z-10 text-2xl">{item.name}</h1>
          </Link>
        );
      } else {
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.targetId!)}
            className={`
	              ${commonNavItemClasses} /* Apply common classes here */
	              focus:outline-none  focus:bg-[var(--dark-color)] focus:text-[var(--light-color)]	            `}
          >
            <h1 className="relative z-10 text-2xl">{item.name}</h1>
          </button>
        );
      }
    });
  }

  return (
    <>
      <div className="w-full h-[2px] bg-[var(--dark-color)]"></div>
      <nav className="w-full flex flex-row justify-between px-3 py-1 items-center">
        {renderNav()}
      </nav>
      <div className="w-full h-[2px] bg-[var(--dark-color)]"></div>
    </>
  );
}
