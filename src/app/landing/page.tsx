import React from 'react'
import HeroBanner from './hero-banner'
import CardSlider from './card-slider'
import StatisticsSection from './stas.section'
import ImageInfo from './image-info'
import SlidingComponent from './sliding'

function LandingPage() {

  return (
    <div>
      <HeroBanner />
      <StatisticsSection />
      <br/>
      <br/>
      <br/>
      <div className='overflow-hidden'  
           style={{
              background: 'linear-gradient(336deg, rgb(70,130,180) 51%, rgb(255, 255, 255) 50%)',
              backgroundPosition: 'initial',
              backgroundSize: 'initial',
              backgroundRepeat: 'initial',
              backgroundAttachment: 'initial',
              backgroundOrigin: 'initial',
              backgroundClip: 'initial',
        }}>
       
        <CardSlider />
        <br/>
        <br/>
        <br/>
        <ImageInfo />
        <br/>
        <br/>
      </div>
      <SlidingComponent />
      <br />
      <br />
      <br />
    </div>
  )
}

export default LandingPage