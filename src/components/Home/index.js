import { Link } from 'react-router-dom';
import logoe from '../../assets/images/logoe.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from 'react-loaders'
import pfp from '../../assets/images/pfp.png'

const Home = () => {
    const [letterClass, setLetterClass]         = useState('text-animate')
    const nameArray                             = ['v', 'a', 'n']
    const jobArray                              = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o','p', 'e', 'r']

    useEffect(() => {
          setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className                          = "container home-page">
            <div className                      = 'pfp'> <img src={pfp}alt='me' /></div>
            <div className                      = "text-zone">
                <h1>
                <span className                 = {letterClass}> H</span>
                <span className                 = {`${letterClass}_12`} >i, </span>
                <br/> 
                <span className                 = {`${letterClass}_13`} >I</span>
                <span className                 = {`${letterClass}_14`} >'m </span>
                <img src                        = {logoe} alt='developer'/>
                <AnimatedLetters letterClass    = {letterClass}
                strArray                        = {nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass    = {letterClass}
                strArray                        = {jobArray} idx={22}/>
                </h1>
                <h2> Full-Stack Developer | React Conesuer | Day Trader </h2>
                <Link to                        = '/contact' className='flat-button'> CONTACT ME </Link>
            </div>
        </div>
        <Loader type                            = "ball-scale-ripple-multiple" />
        </>
    );
}

export default Home 