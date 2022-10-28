import React, { useState } from 'react'
import './Nav.css'

function Nav() {
  const [show,setShow] = useState(false)

  window.addEventListener('scroll',()=>{
    if (window.scrollY>600) {
      setShow(true)
    } else setShow(false)
  })
  return (
    <div className={`logo ${show && "nav-blue"}`}>
      <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' alt='Netfix logo'/>
    </div>
  )
}

export default Nav