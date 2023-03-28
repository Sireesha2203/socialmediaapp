import './Sidebar.css'
import { RssFeed,OndemandVideoRounded,Groups2Rounded,HelpCenterRounded,FavoriteRounded,ChatBubbleRounded,EventNote,KeyboardArrowDown} from '@mui/icons-material'
import React from 'react'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText ">Feed</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideoRounded className='sidebarIcon'/>
            <span className="sidebarListItemText">Watch</span>
          </li>
          <li className="sidebarListItem">
            <Groups2Rounded className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <HelpCenterRounded className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FavoriteRounded className='sidebarIcon'/>
            <span className="sidebarListItemText">Favourites</span>
          </li>
          <li className="sidebarListItem">
            <ChatBubbleRounded className='sidebarIcon'/>
            <span className="sidebarListItemText">ChatBox</span>
          </li>
          <li className="sidebarListItem">
            <EventNote className='sidebarIcon'/>
            <span className="sidebarListItemText">ChatBox</span>
          </li>
        </ul>         
          <button className="btn p-0 "><KeyboardArrowDown className='aricon rounded-circle ' />See More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFrndList ">
          <li className="sidebarFrnd ">
            <img src="\assets\images.jpeg" alt="" className="sidebarFrndImg rounded-circle m-1 " width="38px" height="38px"/>
            <span className="sidebarFrndName">Jennyfer</span>
          </li>
          <li className="sidebarFrnd ">
            <img src="\assets\istockphoto-947115508-612x612.jpg" alt="" className="sidebarFrndImg rounded-circle m-1 " width="38px" height="38px"/>
            <span className="sidebarFrndName">Laila</span>
          </li>
          <li className="sidebarFrnd ">
            <img src="\assets\images.jpeg" alt="" className="sidebarFrndImg rounded-circle m-1 " width="38px" height="38px"/>
            <span className="sidebarFrndName">Musthafa</span>
          </li>
          <li className="sidebarFrnd ">
            <img src="\assets\images.jpeg" alt="" className="sidebarFrndImg rounded-circle m-1 " width="38px" height="38px"/>
            <span className="sidebarFrndName">Monalisa</span>
          </li>
          <li className="sidebarFrnd ">
            <img src="\assets\images.jpeg" alt="" className="sidebarFrndImg rounded-circle m-1 " width="38px" height="38px"/>
            <span className="sidebarFrndName">Jenny</span>
          </li>
          <li className="sidebarFrnd ">
            <img src="\assets\images.jpeg" alt="" className="sidebarFrndImg rounded-circle m-1 " width="38px" height="38px"/>
            <span className="sidebarFrndName">Jenny</span>
          </li>
          <li className="sidebarFrnd ">
            <img src="\assets\images.jpeg" alt="" className="sidebarFrndImg rounded-circle m-1 " width="38px" height="38px"/>
            <span className="sidebarFrndName">Jenny</span>
          </li>
          <li className="sidebarFrnd ">
            <img src="\assets\images.jpeg" alt="" className="sidebarFrndImg rounded-circle m-1 " width="38px" height="38px"/>
            <span className="sidebarFrndName">Jenny</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
