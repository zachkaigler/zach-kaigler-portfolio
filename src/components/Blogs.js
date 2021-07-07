import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import uuid from 'react-uuid'

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zachkaigler")
        .then(resp => resp.json())
        .then(data => {
            setBlogs([...data.items])
            setIsLoaded(true)
        })
    }, [])

    if (isLoaded) {

        const lastThreeBlogs = blogs.map((blog) => {
            if (blogs.indexOf(blog) <= 2) {
                return <BlogCard
                        key = {uuid()} 
                        title = {blog.title}
                        image = {blog.thumbnail}
                        url = {blog.link}
                        date = {blog.pubDate}
                        content = {blog.content}
                      />
            } else {
                return null
            }
        })

        return(
            <section id="blogs">
                <div className="section">
                    <div className="blogs">
                        <div className="blogs-list">
                            {lastThreeBlogs}
                        </div>
                        <p>Read more on <a href="https://zachkaigler.medium.com/" className="inline-link" target="_blank" rel="noreferrer">Medium</a>.</p>
                    </div>
                </div>
            </section>
        )
    } else {
        return(
            <section id="blogs">
                <div className="section">
                    <div className="blogs">
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Blogs