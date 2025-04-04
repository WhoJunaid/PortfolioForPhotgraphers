import React from 'react'
import Aurora from '../Intro/Aurora'
import TiltedCard from '../Intro/TitledCard'
import './Intro.css'
import BlurText from '../Intro/BlurText'
const Intro = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <div>
          <Aurora

  
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
  className="aurora"
/>

<div className="name-and-card">
<TiltedCard  
  
  className="card"
  imageSrc='https://res.cloudinary.com/dy3lhapgx/image/upload/v1743665720/IMG_20240608_192322_hrb3hc.jpg'
  altText="Mohsin Shah - Profile pic"
  captionText="MOHSIN SHAH"
  containerHeight="60vmin"
  containerWidth="65vmin"
  imageHeight="50vmin"
  imageWidth="50vmin"
  
  rotateAmplitude={18}
  scaleOnHover={1.4}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
 
   
    />

    <BlurText
    
  text="Hello, I am Mohsin Shah"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-name text-2xl mb-8"
/>
    


    
        </div>
    </div>
  )
}

export default Intro
