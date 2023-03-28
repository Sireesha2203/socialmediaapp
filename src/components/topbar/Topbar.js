import React from 'react'
import './Topbar.css'
import { Search,Person,Chat,Notifications } from '@mui/icons-material'
function Topbar() {
  return (
    <div className="Container ">
        <div className="topbarLeft">
            <span className="logo fs-5">JoIN</span>
        </div>
        <div className="topbarCenter ">
            <div className="searchBar ">
                <Search className='SearchIcon m-2'/>
                <input  placeholder='Search ' type="text" className='searchInput fs-5' />
            </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink"></span>
            <span className="topbarLink"></span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem ">
              <Person className='icon rounded-circle'/>
              <span className="topbarIconBagde m-1 rounded-circle">1</span>
            </div>
            <div className="topbarIconItem ">
              <Chat className='icon rounded-circle'/>
              <span className="topbarIconBagde m-1 rounded-circle">2</span>
            </div>
            <div className="topbarIconItem ">
              <Notifications className='icon rounded-circle ' />
              <span className="topbarIconBagde m-1 rounded-circle">1</span>
            </div>
            <img src="\assets\download.jpeg" alt="" width="38px" height="38px" className='prof rounded-circle m-1'/>
          </div>
        </div> 
    </div>
  )
}

export default Topbar
