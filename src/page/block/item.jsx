import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const BlockItemPage = () => {
    const [post, setPost] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then((data) => {
            setPost(data)
        })
    }, [id])

    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.body}</p>
        </div>
    )
}