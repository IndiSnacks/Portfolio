import { Link } from "react-router-dom";
import { navLinks } from "../Data/navData";
import CrossIcon from "../assets/svg/crossIcon";

interface MobileNavbarProps {
  hamOpen: boolean;
  hamToggle: () => void;
}

export default function MobileNavbar({ hamOpen, hamToggle }: MobileNavbarProps) {

  const handelHamburger = () => {
    hamToggle();
  };

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      handelHamburger();
    }
  };

  function renderNav() {
    return (
      <>
        {navLinks.map((item, index) => {
          return (
            <div key={index} className="text-start w-full px-1 py-1">
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
          );
        })}
      </>
    );
  }

  return (
    <div>
      {hamOpen && (
        <div
          className="absolute inset-0"
          onClick={handelHamburger}
        ></div>
      )}
      <div className={`fixed top-0 left-1/3 w-screen h-screen ${hamOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`pt-[32px] px-[32px] bg-(--light-color) shadow-lg/50 w-2/3 h-screen flex flex-col transition-all duration-300 ease-in-out ${hamOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex-row self-end">
            <button onClick={handelHamburger} className="py-2 px-3">
              <CrossIcon />
            </button>
          </div>
          {renderNav()}
        </div>
      </div>
    </div>
  );
}



