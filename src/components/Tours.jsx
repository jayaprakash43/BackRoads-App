
import React from 'react'
import { tours } from '../data'
import Tittle from './Tittle'
import Hero from './Hero'

function Tours() {
  return (
    <section className='tours-section'>
        <Hero />
        <section style={ {marginTop : '80px'}}>
        <Tittle tittle='FEATURED' subtittle='TOURS'/>
        <div style={{display : 'flex', justifyContent : 'space-evenly',marginTop  : '30px'}}>
        {
        tours.map((item)=>{
            return (
                <div>
                    <img src={item.image} alt=""  style={{width : '350px',height : '300px'}}/>
                    <p>{item.info}</p>
                    <div style={{display : 'flex',justifyContent : 'space-evenly'}} className='tourpage'>
                        <p > {item.location}</p>
                        <p >From ${item.cost}</p>
                        <p>{item.duration} Days</p>
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

export default Tours


