import React, { useState } from 'react'
import menubar from '../assets/menu.png'

const Nav = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    const handlClick = () => {
        setMenuClicked(true);
    }

    const handleClose = () => {
        setMenuClicked(false);
    }

    return (
        <div className='navdiv'>

            {/* FOR MD AND LG SCREEN */}
            <div className='navbar'>
                <h3 href="#features">Works</h3>
                <h3 href="#posts">Blogs</h3>
                <h3 href="#foot">Contact</h3>
            </div>
            {/* FOR SMALL SCREEN */}
            <div className='menu'>
                <img src={menubar} alt="menu icon" onClick={handlClick} />
            </div>
            {menuClicked  &&
                (
                    <div className='offset'>
                        <h3 href="#features">Works</h3>
                        <h3 href="#posts">Blogs</h3>
                        <h3 href="#foot">Contact</h3>
                        <div className='close-nav'>
                            <h3 className='x' onClick={handleClose}>X</h3>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default Nav
