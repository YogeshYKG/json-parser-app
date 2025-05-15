import React from 'react'
import Hero from '../../Components/HeroComponent/Hero'
import WhySolar from '../../Components/WhySolar/WhySolar';
import OurServices from '../../Components/OurServices/OurServices';
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
import SolarImpact from '../../Components/SolarImpact/SolarImpact';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Location from '../../Components/Location/Location';
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <>
      <Hero /> 
      <WhySolar />
      <OurServices />
      <HowItWorks />
      <SolarImpact />
      <Testimonials />
      <Location />
    </>
  )
}

export default HomePage