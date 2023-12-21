import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import Sociallinks from './Sociallinks'
import PageLink from './PageLinks'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
        <span style={{fontSize : '20px',color : 'white'}}>
        <PageLink />
        </span>
        <p>
             <Sociallinks />
        </p>
        
        <p style={{letterSpacing : '2px'}}>copyright  <AiOutlineCopyrightCircle />  Backroads Tours Company 2023. All Rights Reseved</p>
        </div>
    </footer>
  )
}

export default Footer
