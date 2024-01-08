import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Hero darkTheme={darkTheme} />
      <About darkTheme={darkTheme} />
      <Education darkTheme={darkTheme} />
      <TechStack darkTheme={darkTheme} />
      <Projects darkTheme={darkTheme} />
      <Contact darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </>
  );
}

export default App;
