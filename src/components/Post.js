import { FaTrashAlt } from 'react-icons/fa'

const Post = ({ post, onDelete }) => {
    return (
      <div
        className='post'>
        <h3>
            {post.text}
            <FaTrashAlt style={{ 
                padding: 3,
                color: 'white', 
                backgroundColor: 'black' , 
                cursor : 'pointer' }}
                onClick={() => onDelete(post.id)}
                />
        </h3>
        <p>{post.day}</p>
      </div>
    )
  }
  
  export default Post