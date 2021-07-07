import AboutMe from "./components/AboutMe";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <section id="top">
      <div className="App">
        <NavBar />
        <Landing />
        <AboutMe />
        <Projects />
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
