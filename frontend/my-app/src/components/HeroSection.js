import React from 'react';
// import images from '..components/images';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src={"images/pexelwe.jpeg"} alt={""}></img>
            <div className="texto"><h1>ADVENTURE AWAITS</h1>
            <p> What are you waiting for?</p>
            <div className= "hero-btns">
               <Button className='btns' buttonSytle='btn--outline'
               buttonSize='btn--large'>
                   GET STARTED
               </Button>
               <Button className='btns' buttonSytle='btn--primary'
               buttonSize='btn--large'>
                   WATCH TRAILER <i className='far fa-play-circle'/>
               </Button>
               </div>
             </div>
            
        </div>
    )
}

export default HeroSection
