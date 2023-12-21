
import React from 'react'
import PageLink from './PageLinks'
import Sociallinks from './Sociallinks'
import Tittle from './Tittle'
function Navbar() {
  return (
   <nav className='navcontainer'>
        <div className='navbar' style={{display : 'flex',justifyContent : 'space-around'}}>
          <Tittle tittle = 'Back' subtittle = 'Roads' />
          <PageLink />
          
          <p style={{color : 'skyblue',fontSize : '20px'}}>
            <Sociallinks />
          </p>
        </div>
   </nav>
  )
}

export default Navbar


