// import { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../images/logo.png'

function NavBar({ active }) {
    // const [active, setActive] = useState("none")

    return(
        <div className="nav">
            <Link to="top" className="logo-link" smooth={true} duration={1000} ><img src={logo} alt="logo"/></Link>
            <div className="nav-links-container">
                <Link to="about" id="nav-about" className={active === "about" ? "nav-link active" : "nav-link"} smooth={true} duration={1000} ><span>Me</span></Link>
                <Link to="experience" id="nav-experience" className={active === "experience" ? "nav-link active" : "nav-link"} smooth={true} duration={1000} ><span>Where I've Worked</span></Link>
                <Link to="projects" id="nav-projects" className={active === "projects" ? "nav-link active" : "nav-link"} smooth={true} duration={1000} ><span>Stuff I Made</span></Link>
                <Link to="blogs" id="nav-blogs" className={active === "blogs" ? "nav-link active" : "nav-link"} smooth={true} duration={1000} ><span>Things I Wrote</span></Link>
                <Link to="contact" id="nav-contact" className={active === "contact" ? "nav-link active" : "nav-link"} smooth={true} duration={1000} ><span>Hit Me Up</span></Link>
            </div>
        </div>
    )
}

export default NavBar