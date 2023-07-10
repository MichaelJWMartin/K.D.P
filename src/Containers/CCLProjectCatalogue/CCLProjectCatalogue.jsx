import React, { useState } from "react";
import {
  NavBar, 
  Hero, 
  ProjectOverview, 
  Image
} from '../../Components';
import { Content } from '..';
import styled from 'styled-components';
import data from "../../data";
import images from "../../images";
import heroUXVideo from '../../media/UX-Video-Hero.mp4'
import catalogueOne from '../../media/CCL-2023-pg-4.png'
import catalogueTwo from '../../media/CCL-2023-pg-8.png'
import catalogueThree from '../../media/CCL-2023-pg-10.png'
import catalogueFour from '../../media/CCL-2023-pg-14.png'
import catalogueFive from '../../media/CCL-2023-pg-22.png'
import catalogueSix from '../../media/CCL-2023-pg-24.png'
import catalogueSeven from '../../media/CCL-2023-pg-32.png'
import catalogueEight from '../../media/CCL-2023-pg-52.png'
import catalogueNine from '../../media/CCL-2023-pg-54.png'
import catalogueTen from '../../media/CCL-2023-pg-118.png'
import catalogueEleven from '../../media/CCL-2023-pg-122.png'

const StyledProject = styled.div`
  background-color: ${({theme}) => theme.lightBackground}
`

export const CCLProjectCatalogue = () => {
  const [open, setOpen] = useState(false);

  return ( 
    <>
      <StyledProject>
        <NavBar open={open} setOpen={setOpen}/>
        <Hero video={heroUXVideo} lava={false}/>
        <Content>
          <ProjectOverview data={data.projectOverviewCCL} />
          <Image source={catalogueOne} alt='page 4'/>
          <Image source={catalogueTwo} alt='page 8'/>
          <Image source={catalogueThree} alt='page 10'/>
          <Image source={catalogueFour} alt='page 14'/>
          <Image source={catalogueFive} alt='page 22'/>
          <Image source={catalogueSix} alt='page 24'/>
          <Image source={catalogueSeven} alt='page 32'/>
          <Image source={catalogueEight} alt='page 52'/>
          <Image source={catalogueNine} alt='page 54'/>
          <Image source={catalogueTen} alt='page 118'/>
          <Image source={catalogueEleven} alt='page 122'/>
        </Content>
      </StyledProject> 
    </>
  )
};