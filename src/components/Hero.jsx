
import React from 'react'
import '../index.css'
import image from '../images/hero-page.jpg'

function Hero() {
  return (
   <section>
      <div className='division' style={{height : '700px'}}>
       
        <img src={image} alt=""  style={{width : '100%',height : '700px'}}/>
        <div>
          <h1>BACKROADS APP</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad labore corporis neque ut eum nihil
             ratione possimus suscipit ex cum, minima facilis praesentium quae?</p>
          <button>EXPLORE TOURS</button>

        </div>
      </div>
   </section>
  )
}

export default Hero


