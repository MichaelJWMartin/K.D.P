import React from 'react'
import { NavBar, Hero, LavaLamp, AboutSection } from '../../Components'
import { Features, Content, /*Tiles*/  } from '..';
import data from '../../data';
import image from '../../media/gradientBG.png';
import portrait from '../../media/Flowershot.jpeg'

export const Main = () => {
  return (
    <>
      <img src={image} alt="Background" className='gradient_bg' />
        <NavBar />
        <div className='header'>
          <LavaLamp/>
          <Hero heroInfo={data.homepage.heroInfo} heroInfoTwo={data.homepage.heroInfo2} lava/>
        </div>  
        <Content>
          <AboutSection data={data.homepage} picture={portrait}/>
          <Features heading={data.homepage.heading} id="portfolios"/>
          {/* <Tiles /> */}
        </Content>
    </>
  );
}