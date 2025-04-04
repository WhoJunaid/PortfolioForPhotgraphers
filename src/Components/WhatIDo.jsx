import React from 'react'
import './WhatIDo.css'
import WhatIDoHeading from '../WhatIDo/WhatIDoHeading' 
import CircularGallery from '../WhatIDo/CircularGallery'
const WhatIDo = () => {
  return (
    <div className='whatido'>
    
  
  <WhatIDoHeading
    speed={4}
    enableShadows={true}
    enableOnHover={false}
    className='custom-class'
  >
    What I Do?
  </WhatIDoHeading>
  

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={1} textColor="#ffffff" borderRadius={0.05} />
</div>
  
  
 
  
   
    </div>
  )
}

export default WhatIDo
