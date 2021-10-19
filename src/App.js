import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Modal from "./components/Modal";
import Experience from "./components/Experience";
import { useState, useEffect } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState(null)
  const [active, setActive] = useState("none")

  useEffect(() => {
    const mainObserver = new IntersectionObserver(function(entries) {
      if(entries[0].isIntersecting === true)
      setActive("none")
    }, { threshold: [.5] });
    
    mainObserver.observe(document.querySelector("div.landing"));
  
    const aboutObserver = new IntersectionObserver(function(entries) {
      if(entries[0].isIntersecting === true)
      setActive("about")
    }, { threshold: [.5] });
    
    aboutObserver.observe(document.querySelector("div.about-me"));
  
    const experienceObserver = new IntersectionObserver(function(entries) {
      if(entries[0].isIntersecting === true)
      setActive("experience")
    }, { threshold: [.5] });
    
    experienceObserver.observe(document.querySelector("div.experience"));
  
    const projectsObserver = new IntersectionObserver(function(entries) {
      if(entries[0].isIntersecting === true)
      setActive("projects")
    }, { threshold: [.5] });
    
    projectsObserver.observe(document.querySelector("div.projects"));
  
    const blogsObserver = new IntersectionObserver(function(entries) {
      if(entries[0].isIntersecting === true)
      setActive("blogs")
    }, { threshold: [.5] });
    
    blogsObserver.observe(document.querySelector("div.blogs"));
  
    const contactObserver = new IntersectionObserver(function(entries) {
      if(entries[0].isIntersecting === true)
      setActive("contact")
    }, { threshold: [.5] });
    
    contactObserver.observe(document.querySelector("div.contact"));
  }, [])


  return (
    <section id="top">
      <div className="App">
        <Modal 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeVideo={activeVideo}
        />
        <NavBar 
          active={active}
        />
        <Landing />
        <AboutMe />
        <Experience />
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
