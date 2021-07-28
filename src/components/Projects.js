import { projects } from "../projdata"
import ProjectCard from "./ProjectCard"
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

function Projects() {
    const [displayNum, setDisplayNum] = useState(2)

    const projectCards = projects.map((proj) => {
        if (projects.indexOf(proj) <= displayNum) {
            return <ProjectCard 
                    key={uuidv4()}
                    name={proj.name}
                    image={proj.image}
                    desc={proj.desc}
                    tools={proj.tools}
                    videoId={proj.videoId}
                    linkUrl={proj.linkUrl}
                    githubUrl={proj.githubUrl}
                    projects={projects}
                    proj={proj}
                    displayNum={displayNum}
                />
        } else {
            return null
        } 
    })

    return(
        <section id="projects">
            <div className="section">
                <div className="projects">
                    <h1>Project Work</h1>
                    <div className="line"></div>
                    <div className="projects-list">
                        {projectCards}
                    </div>
                    { displayNum >= projects.length ? <h3 className="show" onClick={() => setDisplayNum(2)}>Show Less</h3> : <h3 className="show" onClick={() => setDisplayNum(displayNum + 3)}>Show More</h3> }
                </div>
            </div>
        </section>
    )
}

export default Projects