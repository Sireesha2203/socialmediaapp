import React from 'react'
import './Rightbar.css'
import {Users} from "../../dummyData"
import Online from "../online/Online"

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
         <div className="birthdayContainer">
            <img src="\assets\gift.jpeg" alt="" className="birthdayImg m-3"  />
            <span className="birthdayText">
              <b>Funnieman</b> and <b>3 other friends </b>have a birthday Today
            </span>
         </div>
         <img src="\assets\-max-ad-.jpg" alt="" className="rightbarAd" />
         <h4 className="rightbarTitle">Online Friends</h4>
         <ul className="rightbarFriendList">
           {Users.map(u=>(
            < Online key={u.id} user={u}/>
           ))}
         </ul>
      </div>
    </div>
  )
}

export default Rightbar
