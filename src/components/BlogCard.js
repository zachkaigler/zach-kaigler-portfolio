function BlogCard({ title, image, url, date, content}) {
    
    let counter = 0
    const regEx = new RegExp(/[^\w\s]|_/g)
    const contentBlurb = content.split("<p>")[1].split(" ").map((word) => {
        if (counter < 30) {
            counter += 1
            return word
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
                <h3>{title}</h3>
                <img src={image} alt="thumbnail"/>
                <p className="blog-date">{date}</p>
                <p className="blog-blurb">{contentBlurb}</p>
            </div>
        </a>
    )
}

export default BlogCard