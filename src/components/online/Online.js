import React from 'react'
import "./Online.css"

export default function Online({user}) {
  return (
    <div>
      <li className="rightbarFriend">
            <div className="rightbarProfContainer">
              <img src={user.profilePicture} alt="" className="rightbarProfImg" />
             <span className="rightbarOnline"></span>
            </div>
          <span className="rightbarUsername fw-semibold">{user.username}</span>
          </li>
    </div>
  )
}

 
