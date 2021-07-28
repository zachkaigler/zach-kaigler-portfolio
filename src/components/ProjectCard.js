import React, { useEffect, useState } from "react"
import ghIcon from '../images/github.png'
import ModalVideo from 'react-modal-video'
import { v4 as uuidv4 } from 'uuid';
import { useSpring, animated } from 'react-spring'

const ProjectCard = ({ name, image, desc, tools, videoId, linkUrl, githubUrl, projects, proj, displayNum }) => {
    const [isOpen, setOpen] = useState(false)
    const [isRendered, setIsRendered] = useState( projects.indexOf(proj) <= 2 ? true : false )

    useEffect(() => {
        setIsRendered(true)
    }, [])

    const alignRight = () => {
        if (projects.indexOf(proj) % 2 !== 0) {
            return true
        } else {
            return false
        }
    }

    const toolsList = tools.map((tool) => {
        return <span className="tool" key={uuidv4()}>[{tool}]</span>
    })

    const anim = useSpring({
        config: {
            duration: 400
        },
        opacity: isRendered ? 1 : 0,
        filter: isRendered ? `blur(0px)` : `blur(5px)`,
        transform: isRendered ? `translateY(0%)` : `translateY(-100%)`
    })

    return (
        <animated.div className={`project-container ${ alignRight() ? "align-right" : null }` } style={anim}>
            { !alignRight() ? <img src={image} className="proj-screen" alt={name} /> : null }
            <div className={`project-info ${ projects.indexOf(proj) % 2 !== 0 ? "align-right" : null }`}>
                { !alignRight() ? 
                    <div className="project-title"><h2>{name}</h2> <a href={githubUrl} target="_blank" rel="noreferrer"><img className="gh-icon" src={ghIcon} alt="github"/></a></div>
                :
                    <div className="project-title"><a href={githubUrl} target="_blank" rel="noreferrer"><img className="gh-icon" src={ghIcon} alt="github"/></a> <h2>{name}</h2></div> 
                }
                <p>{desc}</p>
                <div className={`project-tech ${ alignRight() ? "align-right" : null }`}>
                    <span className="built-with">Built with:</span>
                    <p>{toolsList}</p>
                </div>
                { videoId ?
                    <React.Fragment>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
                        <span onClick={()=> setOpen(true)}>Watch Demo</span>
                    </React.Fragment>
                :
                    <a href={linkUrl} target="blank">Check It Out</a>
                }
            </div>
            { alignRight() ? <img src={image} className="proj-screen" alt={name} /> : null }
        </animated.div>
    )
}

export default ProjectCard
