import React from 'react'
import user from '../assets/user.jpeg'

const Hero = () => {
  return (
    <div className='container'>
      <div className='hero-container'>
        <div className='hero-first'>
          <img src={user} alt='user image' />
        </div>
        <div className='hero-second'>
          <h1>Hi, Iam , Ruchi</h1><h5>FRONTEND WEB DESIGNER</h5>
          {/* <p>A frontend web developer skilled in <strong>GSAP</strong>, <strong>TailwindCSS</strong>, <strong>React</strong>, and <strong>Google Cloud (GCP)</strong>.</p> */}
          <p> I'm a frontend web developer passionate about building interactive, responsive, and user-friendly web experiences.
            I work with <strong>GSAP</strong>, <strong>TailwindCSS/Bootstrap</strong>, <strong>React</strong>, with knowledge of <strong>Google Cloud (GCP)</strong></p>
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
