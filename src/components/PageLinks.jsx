
import React from 'react'
import { pageLinks } from '../data'

function PageLink() {
  return (
    <div className='pagelist'>
       {
        pageLinks.map((link)=>{
            return(
               <ul>
                  <li>
                    <a href= {link.href}> {link.text} </a>
                  </li>
               </ul>
                
            )
        })
       }
    </div>
  )
}

export default PageLink


