import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import uuid from 'react-uuid'

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [error, setError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40zachkaigler&api_key=jvucslukdc1fzxrukznmegrpqo1imimzy921eykk")
        .then(resp => resp.json())
        .then(data => {
            if (data.status === "ok") {
                setBlogs([...data.items])
                setIsLoaded(true)
            } else {
                setError(true)
                setIsLoaded(true)
            }
        })
    }, [])

    if (isLoaded) {
        
        let lastThreeBlogs
        if (!error) {
            lastThreeBlogs = blogs.map((blog) => {
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
        } else {
            lastThreeBlogs = <p>Huh, looks like we had a problem loading these.</p>
        }

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