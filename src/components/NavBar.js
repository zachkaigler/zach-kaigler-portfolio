function NavBar() {
    return(
        <div className="nav">
            <a href="#main" className="logo-link"><img src="https://i.imgur.com/5ee7ZQh.png" alt="logo" style={{ height: "75px" }}/></a>
            <div className="nav-links-container">
                <a href="#about" className="nav-link">Me</a>
                <a href="#projects" className="nav-link">Stuff I Made</a>
                <a href="#contact" className="nav-link">Hit Me Up</a>
            </div>
        </div>
    )
}

export default NavBar