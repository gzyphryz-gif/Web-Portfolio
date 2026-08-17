import { useState } from "react";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started ? (
        <Landing onStart={() => setStarted(true)} />
      ) : (
        <>
          <Navbar />

          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;