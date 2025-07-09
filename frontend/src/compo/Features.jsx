import React from 'react'
import image1 from '../assets/wp.jpg'
import image2 from '../assets/wp.jpeg'

const Features = () => {
  return (
    <div className='f-tank' id='features'>
      <div className='f-head'><h3>Featured Works</h3></div>
      <div className='f-cards'>
        <div className='f-card'>
          <img className='thumbnail' src={image1} alt="" />
          <h1 className='f-header'>React frontend</h1>
          <p className='f-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus eos quis nam fugit optio quisquam quaerat eveniet placeat accusantium.</p>
        </div>
      <div className='f-card'>
          <img className='thumbnail' src={image2} alt="" />
          <h1 className='f-header'>GSAP Animation</h1>
          <p className='f-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate temporibus eos quis nam fugit optio quisquam quaerat eveniet placeat accusantium.</p>
        </div>
    </div>
    </div>
  )
}

export default Features
