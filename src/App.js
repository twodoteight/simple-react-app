import { useState, useEffect } from "react"

import Header from "./components/Header"
import Posts from "./components/Posts"
import AddPost from "./components/AddPost"
import Filter from "./components/Filter"

function App() {
  const [posts, setPosts] = useState([])
  const [selected, setSelected] = useState(1000)

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }
    getPosts()
  }, [])

  // Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch("http://localhost:5000/posts")
    const data = await res.json()
    console.log(data)

    return data
  }

  // Fetch Post
  const fetchPost = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`)
    const data = await res.json()

    return data
  }

  // Select Posts According To Date
  const selectPosts = async (duration) => {
    var today = new Date()
    var startDate = new Date(new Date().setDate(today.getDate() - duration))

    const data = await fetchPosts()
    var filteredPosts = data.filter(function (p) {
      var dateStr = p.date
      var date = new Date(dateStr)

      return date >= startDate && date <= today
    })
    setSelected(duration)
    setPosts(filteredPosts)
  }

  // Delete Post
  const deletePost = async (id) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setPosts(posts.filter((post) => post.id !== id))
      : alert("Error Deleting This Task")
  }

  // Add Post
  const addPost = async (post) => {
    const today = new Date()
    const newPost = { ...post, date: today.toISOString() }

    const res = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    })

    const data = await res.json()
    setPosts([...posts, data])
  }

  return (
    <div className="container">
      <AddPost onAdd={addPost} />
      <Header />
      <Filter onSelect={selectPosts} selected={selected} />
      {posts.length > 0 ? (
        <Posts posts={posts} onDelete={deletePost} />
      ) : (
        "No posts at the moment"
      )}
    </div>
  )
}

export default App
