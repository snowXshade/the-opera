import React from 'react'
import user from '../assets/user.jpeg'

const Footer = () => {
  return (
    <div className='footer' id='foot'>
      <div className='links'>
        <p href="https://github.com/snowXshade">Github</p>
        <p hred="#features">Works</p>
        <p href="#posts">Blogs</p>
        <p href="#">About</p>
      </div>
      <div className='contact'><img src={user}></img>Contact: +91 XXXXXXXXXX<br />Email:masoom@chalk.com</div>
      <div className='brand'><h3>@ Copyright By Ruchi Sharma, 2025</h3></div>
    </div>
  )
}

export default Footer
