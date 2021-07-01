function NavBar() {
    return(
        <div className="nav">
            <img src="https://i.imgur.com/5ee7ZQh.png" alt="logo" style={{ height: "75px" }}/>
            <div className="nav-links-container">
                <a href="http://localhost:3000" className="nav-link">Me</a>
                <a href="http://localhost:3000" className="nav-link">Stuff I Made</a>
                <a href="http://localhost:3000" className="nav-link">Hit Me Up</a>
            </div>
        </div>
    )
}

export default NavBar