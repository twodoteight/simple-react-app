import { FaTrashAlt } from "react-icons/fa"

const Post = ({ post, onDelete }) => {
  return (
    <div className="post">
      <h3>{post.text}</h3>

      <div className="post-date">
        <p>{new Date(post.date).toLocaleDateString()}</p>
        <FaTrashAlt
          style={{
            padding: 3,
            color: "white",
            backgroundColor: "black",
            cursor: "pointer",
            width: 20,
            height: 20,
          }}
          onClick={() => onDelete(post.id)}
        />
      </div>
    </div>
  )
}

export default Post
