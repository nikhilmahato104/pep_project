import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt=""/>
            <p>lorem text</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon } alt=""/>
                <img src={assets.twitter_icon } alt=""/>
                <img src={assets.linkedin_icon } alt=""/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>9304260733</li>
                <li>nikhilmahato104@gmail.com</li>

            </ul>
        </div>
    </div>
    <hr/>
    <p className='footer-copyright'>copyright 2024 is iligal</p>
    
    </div>
  )
}

export default Footer