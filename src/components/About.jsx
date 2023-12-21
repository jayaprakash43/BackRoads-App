
import React from 'react'
import image from '../images/about-page.webp'
import Tittle from './Tittle'
import Hero from './Hero'

function About() {
  return (
   <section className='about-section'>
     <Hero />
     <section style={{marginTop : '80px'}}>
        <Tittle  tittle = 'ABOUT' subtittle = 'US' />
        <div className='About-Division' style={{display : 'flex', gap : '50px'}}> 
            <div>
                <img src={image} alt=""  style={{width : '450px',height : '400px'}}/>
            </div>
           <article>
                <h4>Explore The Difference</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati accusantium voluptatum nostrum quidem sapiente nobis reiciendis nam dignissimos, vero, omnis earum assumenda soluta exercitationem explicabo eaque. Nostrum, illo omnis?</p>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati accusantium voluptatum nostrum quidem sapiente nobis reiciendis nam dignissimos, vero, omnis earum assumenda soluta exercitationem explicabo eaque. Nostrum, illo omnis?</p>
                <button style={{backgroundColor : 'skyblue',color : 'white',borderColor : 'skyblue'}}>READ MORE</button>
           </article>
        </div>
   </section>
   </section>
  )
}

export default About



