function BlogCard({ title, image, url, date, content}) {
    
    let counter = 0
    const regEx = new RegExp(/[^\w\s]|_/g)
    const contentBlurb = content.split("<p>")[1].split(" ").map((word) => {
        if (counter < 30) {
            counter += 1
            if (word.includes("</p>")) {
                return word.split("</p>")[0]
            } else {
                return word
            }
        } else if (counter === 30) {
            counter += 1
            if (regEx.test(word[word.length - 1])) {
                return `${word.split("").slice(0, -1).join("")}...`
            } else {
                return `${word}...`
                }
        } else {
            return null
    }
    }).join(" ")

    return(
        <a href={url} target="_blank" rel="noreferrer" className="blog-card-a">
            <div className="blog-card">
                <div className="blog-title">
                    <h3>{title}</h3>
                </div>
                <div className="blog-thumbnail-container">
                    <img src={image} alt="thumbnail"/>
                </div>    
                <div className="blog-date-container">
                    <p className="blog-date">{date}</p>
                </div>
                <p className="blog-blurb">{contentBlurb}</p>
            </div>
        </a>
    )
}

export default BlogCard