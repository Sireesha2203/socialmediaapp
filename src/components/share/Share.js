import React from 'react'
import {PermMedia,SwitchVideo,AddReaction} from '@mui/icons-material'
import './Share.css'
function Share() {
  return (
    <div className='share'>
       <div className="shareWrapper">
        <div className="shareTop">
            <img src="\assets\download.jpeg" width="45px" height="40px"  alt="" className="shareProfileImg rounded-circle m-1" />
            <input type=""
              placeholder="What's in your mind ,John?" 
              className='shareInput p-2 m-1 me-2 '/>
        </div>
          <hr className="shareHr m-1" />
          <div className="shareBottom m-1">
                <div className="shareOption ">
                    <PermMedia className='shareIcon m-2' />
                    <span className='shareOptionText '>Photo/Video</span>
                </div>
                <div className="shareOption ">
                    <SwitchVideo className='shareIcon m-2' />
                    <span className='shareOptionText '>Live Video</span>
                </div>
                <div className="shareOption ">
                    <AddReaction className='shareIcon m-2' />
                    <span className='shareOptionText '>Feelings or Activity</span>
                </div>
          </div>  
      
       </div>
    </div>
  )
}

export default Share
