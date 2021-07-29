import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section id="top">
      <div className="App">
        <Modal 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeVideo={activeVideo}
        />
        <NavBar />
        <Landing />
        <AboutMe />
        <Projects 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeVideo={activeVideo}
          setActiveVideo={setActiveVideo}
        />
        <Blogs />
        <Contact />
        <div className="footer">
          <p>Designed and built by Zach Kaigler. <a href="https://github.com/zachkaigler/zach-kaigler-portfolio" target="_blank" rel="noreferrer" className="inline-link">Check out the repo.</a></p>
        </div>
      </div>
    </section>
  );
}

export default App;
