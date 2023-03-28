import {React,useState} from 'react'
import {MoreVert,ThumbUpRounded} from '@mui/icons-material'
import './Posts.css'
import {Users} from "../../dummyData"


function Posts({post}) {
  const [like,setLike]=useState(post.like)
  const [isLiked,setIsLiked]=useState(false)

  const likeHandler = () =>{
    setLike(isLiked ? like-1 : like + 1)
  }

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
             <img src={post.photo} alt="" className="postProf " />
             <span className="postUsername">{Users.filter((u)=>u.id === post.userId)[0].username} </span>
             <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert/>
          </div>
        </div>
        <div className="postCenter">
           <span className="postText"> {post?.desc} </span>
           <img src={post.post} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="reactions">
            <img src="\assets\Like-Button-.png"  onClick={likeHandler}  width="25px" alt="" className="likeIcon" />
            <img src="\assets\like2.png"  onClick={likeHandler}  width="25px" alt="" className='likeIcon rounded-circle'/>
          <span className="postLikeCounter">{post.like} people liked it</span>
          </div>
          <span className="postCommentText">{post.comment} comments</span>

        </div>
        <div className="postBottomRight">
        </div>
      </div>    
    </div>
  )
}

export default Posts
