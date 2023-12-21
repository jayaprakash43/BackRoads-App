import tour1 from './images/chaina-tour.webp'
import tour2 from './images/indonesia-girl.jpg'
import tour3 from './images/Hongkong-Night-View.jpg'
import tour4 from './images/Kenya-Elephant.webp'

// social Icons
import {BsFacebook} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {FaSquarespace} from 'react-icons/fa'

// Services Icons
import {FaWallet} from 'react-icons/fa'
import {FaTree} from 'react-icons/fa'
import {FaSocks} from 'react-icons/fa'

import './components/Tours'

export const pageLinks = [
  { id: 1, href: '/', text: 'Home' },
  { id: 2, href: '/About', text: 'About' },
  { id: 3, href: '/Services', text: 'Services' },
  { id: 4, href: '/Tours', text: 'Tours' }
  
];



export const socialLinks = [
  { id: 1, icon: <BsFacebook /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaSquarespace /> }
];

export const services = [
  {
    id: 1,
    icon:<FaWallet/>,
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: <FaTree />,
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: <FaSocks />,
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'China',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Hong Kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'Kenya',
    duration: 20,
    cost: 3300,
  },
];


