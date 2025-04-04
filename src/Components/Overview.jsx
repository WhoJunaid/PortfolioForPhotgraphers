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
           I’m Mohsin Shah, a passionate photographer and videographer. I’ve shot music videos for artists like Darshan Raval and Babar Mudacer and recently worked on a project for the Prime Minister’s Office of India. Through my lens, I bring stories to life.
          </OverviewContent>



            
    </div>
  )
}

export default Overview
