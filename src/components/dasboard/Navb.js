import React, { useState } from 'react';
import './Navb.css';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import {search} from 'react-icons-kit/fa/search';
import {bell} from 'react-icons-kit/fa/bell';
import {logOut} from 'react-icons-kit/feather/logOut';


function Navb() {
  const [show,setShow] = useState(false)

  window.addEventListener('scroll',()=>{
    if (window.scrollY>540) {
      setShow(true)
    } else setShow(false)
  })
  return (
    <div className={`logo ${show && "nav-blk"}`}>
      <div className="container">
        <div className="left">
          <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' alt='Netfix logo'/>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Icon className='icons' icon={search} />
          <span>KID</span>
          <Icon className='icons' icon={bell}/>
          <div className="profile">
            <NavLink to={'/'} className="btn-rounded">
            <Icon className='icons' icon={logOut} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Navb