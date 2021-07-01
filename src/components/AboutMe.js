function AboutMe() {
    return(
        <div className="section">
            <div className="about-me">
                <div className="bio-container">
                    <img src="https://i.imgur.com/WEGbYN2.jpg" alt="me" className="selfie"/>
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
                            A graduate of Flatiron School’s Software Engineering program,
                            I seek to work on engaging projects in collaborative and
                            friendly environments. <a href="http://localhost:3000" className="inline-link">Interested?</a>
                        </p>
                    </div>
                </div>
                <div className="tools">
                    <h3>Tools I Use</h3>
                    <div className="tools-icons">
                        <img src="https://i.imgur.com/Vbald9g.png" alt="js"/>
                        <img src="https://i.imgur.com/lR9sD5i.png" alt="react"/>
                        <img src="https://i.imgur.com/8KYzkvF.png" alt="ruby"/>
                        <img src="https://i.imgur.com/Cg13vFV.png" alt="rails"/>
                        <img src="https://i.imgur.com/4bTBgfa.png" alt="semantic"/>
                        <img src="https://i.imgur.com/N7epbmx.png" alt="html"/>
                        <img src="https://i.imgur.com/mxErRZ5.png" alt="css"/>
                        <img src="https://i.imgur.com/DjCFFW6.png" alt="photoshop"/>
                        <img src="https://i.imgur.com/a94IK4u.png" alt="aftereffects"/>
                        <img src="https://i.imgur.com/Zmd1Qen.png" alt="premiere"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe