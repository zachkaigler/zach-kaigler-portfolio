function BlogCard({ title, image, url, date, content}) {
    
    let counter = 0
    const contentBlurb = content.split("<p>")[1].split(" ").map((word) => {
        if (counter < 30) {
            counter += 1
            return word
        } else if (counter === 30) {
            counter += 1
            if (word.search(/[^\w\s]|_/g) === -1) {
                return `${word}...`
            } else {
                let noPunc = word.split("")
                noPunc.pop()
                return `${noPunc.join("")}...`
            }
        } else {
            return null
        }
    }).join(" ")

    return(
        <a href={url} target="_blank" rel="noreferrer" className="blog-card-a">
            <div className="blog-card">
                <h3>{title}</h3>
                <img src={image} alt="thumbnail"/>
                <p className="blog-date">{date}</p>
                <p className="blog-blurb">{contentBlurb}</p>
            </div>
        </a>
    )
}

export default BlogCard