function Projects() {
    return(
        // eslint-disable-next-line
        <a id="projects">
            <div className="section">
                <div className="projects">
                    <h1>Project Work</h1>
                    <div className="line"></div>
                    <div className="projects-list">
                        <div className="project-container">
                            <img src="https://i.imgur.com/gkBUzX3.png" className="proj-screen" alt="gameon" />
                            <div className="project-info">
                                <div className="project-title"><h2>Game On</h2> <a href="https://github.com/zachkaigler/game-on-frontend" target="blank"><img className="gh-icon" src="https://i.imgur.com/Nkxx2Ht.png" alt="github"/></a></div>
                                <p>
                                    A social networking app designed to connect users to
                                    new friend groups through shared interests in hobbies
                                    and games.
                                </p>
                                <div className="project-tech">
                                    <span className="built-with">Built with:</span>
                                    <p>
                                        [React] [Ruby on Rails] [Action Cable] [WebSockets] [JWT] [Adobe Photoshop]
                                        [Adobe AfterEffects] [Semantic UI React] [Custom CSS]
                                    </p>
                                </div>
                                <a href="http://localhost:3000">Watch Demo</a>
                            </div>
                        </div>
                        <div className="project-container align-right">
                            <div className="project-info align-right">
                                <div className="project-title"><a href="https://github.com/jbrundagejr/phase-4-front-end" target="blank"><img className="gh-icon" src="https://i.imgur.com/Nkxx2Ht.png" alt="github"/></a> <h2>Vinylboxd</h2></div>
                                <p>
                                    A social platform for vinyl enthusiasts to share, rate, and review
                                    records in their collection.
                                </p>
                                <div className="project-tech align-right">
                                    <span className="built-with">Built with:</span>
                                    <p>
                                        [React] [Ruby on Rails] [JWT] [Adobe Photoshop] [Semantic UI React] [Custom CSS]
                                    </p>
                                </div>
                                <a href="http://localhost:3000">Watch Demo</a>
                            </div>
                            <img src="https://i.imgur.com/bT4bJ4O.png" className="proj-screen" alt="vinylboxd" />
                        </div>
                        <div className="project-container">
                            <img src="https://i.imgur.com/u5b95D4.png" className="proj-screen" alt="flexfox" />
                            <div className="project-info">
                                <div className="project-title"><h2>Flex Fox!</h2> <a href="https://github.com/zachkaigler/flex-fox" target="blank"><img className="gh-icon" src="https://i.imgur.com/Nkxx2Ht.png" alt="github"/></a></div>
                                <p>
                                    An adorable Flexbox visualizer designed to showcase
                                    the technology’s versatility in styling collections of
                                    items.
                                </p>
                                <div className="project-tech">
                                    <span className="built-with">Built with:</span>
                                    <p>
                                        [React] [styled-components] [Adobe Photoshop] [Custom CSS]
                                    </p>
                                </div>
                                <a href="https://zachkaigler.github.io/flex-fox/" target="blank">Check It Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Projects