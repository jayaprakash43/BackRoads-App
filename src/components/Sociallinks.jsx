
import React from 'react'
import { socialLinks } from '../data'

function Sociallinks() {
  return (
    <div style={{display : 'flex',gap : '20px', alignItems : 'center'}}>
        {
            socialLinks.map(item=>{
                return (
                    <i >{item.icon}</i>
                )
            })
        }
    </div>
  )
}

export default Sociallinks
