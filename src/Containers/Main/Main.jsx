import React, { useState, useEffect } from 'react'
import { NavBar, Hero, LavaLamp, AboutSection, Footer } from '../../Components'
import { Features, Content } from '..';
import data from '../../data';
import image from '../../media/gradientBG.png';
import imageSmall from '../../media/gradientBG_small.png';
import portrait from '../../media/Flowershot.jpeg'


export const Main = () => {

  const [loaded, setLoaded] = useState(false);

  const HandleLoading = () => {
    setLoaded(true)
  }

  useEffect(() => {
    console.log('hello', loaded)
  }
  ,[loaded])

  return (
    <>
    <div className={loaded === true ? 'blur-load loaded' : 'blur-load'} style={{backgroundImage: `url(${imageSmall})`}}/>
      <img src={image} alt="Background" className='gradient_bg' onLoad={HandleLoading}/>
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
      <Footer />
    </>
  );
}