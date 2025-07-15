import './App.css'
import { useState } from "react";
import MobileNavbar from './Components/MobileNavbar'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects';

function App() {

  const [hamOpen, hamToggle] = useState<boolean>(false);

  const handleHam = () => {
    hamToggle(!hamOpen)
  }

  return (
    <>
      <button onClick={handleHam}><h1>Ham</h1></button>
      <MobileNavbar hamOpen={hamOpen} hamToggle={handleHam} />
      <AboutMe />
      <Projects />
    </>
  )
}

export default App
