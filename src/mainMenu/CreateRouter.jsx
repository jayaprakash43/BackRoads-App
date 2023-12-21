import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Tours from "../components/Tours";
import Footer from "../components/Footer";

const CreateRouter = () => {
  return (
    <div>
        <Navbar />
      <BrowserRouter >
        <Routes>
            <Route path='/' element = {<Hero />}/>
            <Route path='/About' element = {<About />}/>
            <Route path='/Services' element = {<Services />}/>
            <Route path='/Tours' element = {<Tours />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default CreateRouter
