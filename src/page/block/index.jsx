import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const BlogPage = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => {
            setPost(data)
        })
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>
                            <Link to={`/blog/${post.id}`}>
                            { post.title }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}