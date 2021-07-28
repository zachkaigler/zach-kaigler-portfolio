import { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../images/logo.png'

function NavBar() {
    const [active, setActive] = useState("none")

    return(
        <div className="nav">
            <Link to="top" className="logo-link" smooth={true} duration={1000} onClick={() => setActive("none")}><img src={logo} alt="logo"/></Link>
            <div className="nav-links-container">
                <Link to="about" className={active === "about" ? "nav-link active" : "nav-link"} smooth={true} duration={1000} onClick={() => setActive("about")}>Me</Link>
                <Link to="projects" className={active === "projects" ? "nav-link active" : "nav-link"} smooth={true} duration={1000} onClick={() => setActive("projects")}>Stuff I Made</Link>
                <Link to="blogs" className={active === "blogs" ? "nav-link active" : "nav-link"} smooth={true} duration={1000} onClick={() => setActive("blogs")}>Things I Wrote</Link>
                <Link to="contact" className={active === "contact" ? "nav-link active" : "nav-link"} smooth={true} duration={1000} onClick={() => setActive("contact")}>Hit Me Up</Link>
            </div>
        </div>
    )
}

export default NavBar