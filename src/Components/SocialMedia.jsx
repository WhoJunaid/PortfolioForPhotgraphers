import React from 'react'
import './SocialMedia.css'
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";


import GlassIcons from '../SocialMedia/GlassIcons';
const SocialMedia = () => {

    // update with your own icons and colors
const items = [
  { icon: <FiInstagram color='white' style={{backgroundColor:'transparent'}} onClick={()=>{window.open('https://www.instagram.com/shahmohsin__?igsh=MTQxOHlraDkyN2Nsbw%3D%3D&utm_source=qr','_blank')}}/>, color: 'red', label: 'Instagram' },
  { icon: <FaFacebookF color='white' style={{backgroundColor:'transparent'}}  onClick={()=>{window.open('https://www.facebook.com/share/1BYtRwXQ82/','_blank')}}/>, color: 'blue', label: 'Facebook' },

];
  return (
    <div className='body-socialmedia'>
        <div className="heading-socialmedia">
            Contact Me:
        </div>
       



<div style={{ height: '600px', position: 'relative' }}>
  <GlassIcons items={items} className="custom-class"/>
</div>



    </div>
  )
}

export default SocialMedia
