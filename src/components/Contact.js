import resume from '../kaigler_resume_SE_2022.pdf'
import ghIcon from '../images/github.png'
import liIcon from '../images/linkedin.png'
import igIcon from '../images/ig.png'

function Contact() {
    return(
        <section id="contact">
            <div className="section">
                <div className="contact">
                    <h1>Want to know more?</h1>
                    <span>Feel free to <a href={resume} target="_blank" rel="noreferrer" className="inline-link">peep the resume</a> or <a href="mailto: zjkaig@gmail.com" className="inline-link">shoot me an email</a>.</span>
                    <div className="socials">
                        <span>You can also find me on any of these fine platforms:</span>
                        <div className="social-icons">
                            <a href="https://github.com/zachkaigler" target="_blank" rel="noreferrer"><img src={ghIcon} alt="github"/></a> 
                            <a href="https://www.linkedin.com/in/zachkaigler/" target="_blank" rel="noreferrer"><img src={liIcon} alt="linkedin"/></a>
                            <a href="https://www.instagram.com/zkaigz/" target="_blank" rel="noreferrer"><img src={igIcon} alt="instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact