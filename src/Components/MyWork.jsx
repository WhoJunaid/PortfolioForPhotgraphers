import React from 'react'
import './MyWork.css'
import BounceCards from '../My Work/BounceCards'
const MyWork = () => {
    const images = [
        "https://res.cloudinary.com/dy3lhapgx/image/upload/v1743666237/Ayman_20250226_200143_0000_qpymgq.png",
        "https://res.cloudinary.com/dy3lhapgx/image/upload/v1743667416/IMG_4028_uvoaww.jpg",
        "https://res.cloudinary.com/dy3lhapgx/image/upload/v1743666244/1707918236750_eebgsr.jpg",
        "https://res.cloudinary.com/dy3lhapgx/image/upload/v1743666242/Screenshot_2025-04-03-11-29-24-84_f9ee0578fe1cc94de7482bd41accb329_o0xkjd.jpg",
        "https://res.cloudinary.com/dy3lhapgx/image/upload/v1743665837/1699701094222_adc751_r76xnt.jpg"
      ];
      
      const transformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)"
      ];
  return (
    <div className='mywork'>
      <div className="heading">
        My Work:
      </div>
      <BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={200}
  containerHeight={200}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={true}
/>
    </div>
  )
}

export default MyWork
