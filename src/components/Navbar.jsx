import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Kavci Chat</span>
        <div className="user">
            <img src="https://media.licdn.com/dms/image/D4D03AQHSj2GP_WNk6g/profile-displayphoto-shrink_800_800/0/1677167190150?e=1687996800&v=beta&t=eHA0ZweA8nDytAmB5nHDCzabHNqedCV-WdBNunVI2-E" alt="" />
            <span>Hakan</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar