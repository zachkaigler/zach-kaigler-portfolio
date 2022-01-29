import { useState } from 'react'
import { Link } from 'react-scroll'
import selfie from '../images/selfie.jpg'
import mustache from '../images/mustache.gif'
import js from '../images/js.png'
import reactIcon from '../images/react.png'
import rubyIcon from '../images/ruby.png'
import railsIcon from '../images/rails.png'
import semanticIcon from '../images/semantic.png'
import htmlIcon from '../images/html.png'
import cssIcon from '../images/css.png'
import psIcon from '../images/ps.png'
import aeIcon from '../images/ae.png'
import nodeIcon from '../images/node.png'
import reduxIcon from '../images/redux.png'
import sassIcon from '../images/sass.png'
import expressIcon from '../images/express.png'
import awsIcon from '../images/aws.png'
import sbIcon from '../images/storybook.png'

function AboutMe() {
    const [isMustacheVisible, setIsMustacheVisible] = useState(false)

    return(
        <section id="about">
            <div className="section">
                <div className="about-me">
                    <div className="bio-container">
                        <div className="selfie-container" onClick={() => setIsMustacheVisible(true)}>
                            <img src={selfie} alt="me" className="selfie"/>
                            { isMustacheVisible ? <img src={mustache} alt="mustache" className="mustache"/> : null }
                        </div>
                        <div className="bio">
                            <h1>This Guy</h1>
                            <p>
                                Hello friends! My name is Zach Kaigler, and I’m a full stack 
                                software engineer based in Brooklyn. With a background in film and 
                                advertising post production, I possess a keen eye for design,
                                a flexible and technical skillset honed over countless hours
                                of on-the-job learning, and years of experience in client
                                based work environments.
                            </p>
                            <p>
                                Currently I'm working with <a href="https://www.clearmix.com/" target="_blank" rel="noreferrer" className="inline-link">ClearMix</a> to 
                                develop tools built to help make video production easier
                                and more accessible to the masses - and so at the moment I'm not looking
                                for new opportunities. I am, however, always open to discussing interesting ideas! 
                                Feel free to <Link to="contact" className="inline-link" smooth={true} duration={1000}>reach out </Link>
                                if you want to talk shop.
                            </p>
                        </div>
                    </div>
                    <div className="tools">
                        <h3>Tools I Use</h3>
                        <div className="tools-icons">
                            <img src={js} alt="js" title="JavaScript"/>
                            <img src={reactIcon} alt="react" title="React"/>
                            <img src={reduxIcon} alt="redux" title="Redux"/>
                            <img src={nodeIcon} alt="node" title="Node.js"/>
                            <img src={awsIcon} alt="aws" title="Amazon Web Services"/>
                            <img src={expressIcon} alt="express" title="Express"/>
                            <img src={rubyIcon} alt="ruby" title="Ruby"/>
                            <img src={railsIcon} alt="rails" title="Rails"/>
                            <img src={sbIcon} alt="storybook" title="Storybook.js"/>
                            <img src={sassIcon} alt="sass" title="Sass"/>
                            <img src={htmlIcon} alt="html" title="HTML"/>
                            <img src={cssIcon} alt="css" title="CSS"/>
                            <img src={semanticIcon} alt="semantic" title="Semantic UI React"/>
                            <img src={psIcon} alt="photoshop" title="Adobe Photoshop"/>
                            <img src={aeIcon} alt="aftereffects" title="Adobe AfterEffects"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe