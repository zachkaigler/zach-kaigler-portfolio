import { Link } from 'react-scroll'

function NavBar() {
    return(
        <div className="nav">
            <Link to="main" className="logo-link" smooth={true} duration={1000}><img src="https://i.imgur.com/5ee7ZQh.png" alt="logo" style={{ height: "75px" }}/></Link>
            <div className="nav-links-container">
                <Link to="about" className="nav-link" smooth={true} duration={1000}>Me</Link>
                <Link to="projects" className="nav-link" smooth={true} duration={1000}>Stuff I Made</Link>
                <Link to="contact" className="nav-link" smooth={true} duration={1000}>Hit Me Up</Link>
            </div>
        </div>
    )
}

export default NavBar