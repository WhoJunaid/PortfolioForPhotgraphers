import React from 'react'
import './Overview.css'

import HeadingOverview from '../Overview/HeadingOverview'
import OverviewContent from '../Overview/OverviewContent'
const Overview = () => {
  return (
    <div className='body-overview'>
      <HeadingOverview
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=30%'
            scrollEnd='bottom bottom-=50%'
            stagger={0.03}
            className="heading-overview"
            > 
           Overview:
            </HeadingOverview>
            <OverviewContent
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
          Hi, I'm Mohsin Shah — a passionate photographer and cinematographer dedicated to turning moments into timeless visuals. My work blends creativity with emotion, whether I’m shooting portraits, fashion, events, or cinematic reels.
     </OverviewContent>
     <OverviewContent
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
          I've had the privilege of working with major brands like Haldiram and Lammer, collaborated with artists like Darshan Raval and Babar Mucader, and even contributed to high-level projects for the Prime Minister's Office (PMO).
     </OverviewContent>
     <OverviewContent
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
          >
          Every frame I capture tells a story — let’s create yours next.
     </OverviewContent>
           
           

           
         



            
    </div>
  )
}

export default Overview
