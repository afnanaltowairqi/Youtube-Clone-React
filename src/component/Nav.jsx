import React from 'react'
import '../App.css'
import Menu from '../assets/menu.png'
import Logo from '../assets/Youtube-logo.jpg'
import Search from '../assets/search.png'
import Upload from '../assets/upload.webp'
import Notification from '../assets/notification.png'
import Profile from '../assets/profile.jpg'
import {Link} from 'react-router-dom'

const Nav = ({setSide}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=> setSide(e=>e===false?true:false)} src={Menu} alt="menu-icon" />
            <Link to='/home'><img className='logo' src={Logo} /></Link>
        </div>
        <div className="nav-middle flex-div">
            <div className='search-box flex-div'>
              <input type="text" placeholder='Search' />
              <img src={Search} alt='search-icon' />
            </div>
            
        </div>
        <div className="nav-right flex-div">
            <img src={Upload} alt="upload-icon" />
            <img src={Notification} alt="notification-icon" />
            <img src={Profile} className='user-icon' alt="" />
        </div>
    </nav>
  )
}

export default Nav

