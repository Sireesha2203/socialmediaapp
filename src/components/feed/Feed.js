import React from 'react'
import './Feed.css' 
import Share from '../share/Share'
import Posts from '../posts/Posts'
import {Post} from "../../dummyData"
function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {Post.map(p=>(
           <Posts key={p.id} post={p} />
        ))}
              
      </div>
    </div>
  )
}

export default Feed
