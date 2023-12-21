
import React from 'react'
import { services } from '../data'
import Tittle from './Tittle'
import Hero from './Hero'

function Services() {
  return (
    <section className='Services-section'>
        <Hero />
        <section className='our-services' style={{backgroundColor : 'whitesmoke',height : '200px',marginTop : '80px'}}>
        <Tittle tittle='OUR' subtittle='SERVICES' />
        <div style={{display : 'flex',justifyContent : 'space-between'}}>    
            {
                services.map(item =>{
                    return (
                        <div style={{display: 'flex',gap : '20px',alignItems : 'center'}}>
                            <div style={{fontSize : '25px',width : '50px',height : '50px',backgroundColor : 'skyblue',display : "flex",justifyContent : 'center',alignItems : 'center'}}><i >{item.icon}</i></div>
                           <div>
                           <p><b>{item.title}</b></p>
                            <p>{item.text} </p>
                           </div>
                        </div>
                    )
                })
            }
        </div>
   </section>
    </section>
  )
}

export default Services


