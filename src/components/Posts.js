import Post from "./Post"

const Posts = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default Posts
