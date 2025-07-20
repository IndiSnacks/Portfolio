import './App.css'
import { useState } from "react";
import NavIcon from './assets/svg/navIcon';
import Logo from './assets/svg/logo';
import MobileNavbar from './Components/MobileNavbar'
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
// import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects';

function App() {

  const [hamOpen, hamToggle] = useState<boolean>(false);

  const handleHam = () => {
    hamToggle(!hamOpen)
  }

  return (
    <>
      <div className='flex flex-row min-md:hidden'>
        <div className='flex items-center w-full justify-between'>
          <Logo />
          <button onClick={handleHam} className="py-2 px-3 ">
            <NavIcon />
          </button>
        </div>
        <MobileNavbar hamOpen={hamOpen} hamToggle={handleHam} />
      </div>

      <div className="hidden md:block">
        <Navbar />
      </div>
      <Landing />
      <Projects />
    </>
  )
}

export default App
