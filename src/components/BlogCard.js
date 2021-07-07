function BlogCard({ title, image, url, date, content}) {
    
    let counter = 0
    const contentBlurb = content.split("<p>")[1].split(" ").map((word) => {
        if (counter < 30) {
            counter += 1
            return word
        } else if (counter === 30) {
            counter += 1
            return `${word}...`
        } else {
            return null
        }
    }).join(" ")

    return(
        <a href={url} target="_blank" rel="noreferrer" className="blog-card-a">
            <div className="blog-card">
                <h3>{title}</h3>
                <img src={date !== "2021-05-13 03:20:44" ? image : "https://miro.medium.com/max/1400/0*J0hMbtYo_hos3FnH"} alt="thumbnail"/>
                <p className="blog-date">{date}</p>
                <p className="blog-blurb">{contentBlurb}</p>
            </div>
        </a>
    )
}

export default BlogCard