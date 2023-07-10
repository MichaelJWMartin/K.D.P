import React, { useState } from "react";
import {
  NavBar, 
  Hero, 
  ProjectOverview, 
  InformationStep, 
  KeyInsights, 
  JourneyMap, 
  BasicInfo,
  Image
} from '../../Components';
import { Content } from '..';
import styled from 'styled-components';
import data from "../../data";
import images from "../../images";
import designProcessIconsImage from '../../media/design-process-icons.png'
import usabilityTestOne from '../../media/usability-test_column1.png'
import usabilityTestTwo from '../../media/usability-test_column2.png'
import affinityDiagram from '../../media/affinity-diagram.png'
import journeyMapDiagram from '../../media/customer-journey-map.png'
import flowDiagram from '../../media/flow-diagram-for-mobile.png'
import sketchesDiagram from '../../media/sketches.png'
import uxDiagramOne from '../../media/ux-design1.png'
import uxDiagramTwo from '../../media/ux-design2.png'
import heroUXVideo from '../../media/UX-Video-Hero.mp4'

const StyledProject = styled.div`
  background-color: ${({theme}) => theme.lightBackground}
`

export const ProjectUXDesign = () => {
  const [open, setOpen] = useState(false);

  return ( 
    <>
      <StyledProject>
        <NavBar open={open} setOpen={setOpen}/>
        <Hero video={heroUXVideo} lava={false}/>
        <Content>
          <ProjectOverview data={data.projectOverviewOne} image={designProcessIconsImage}/>
          <ProjectOverview data={data.projectOverviewTwo} />
          <InformationStep data={data.informationStepOne} />
          <Image source={usabilityTestOne} alt={images.usabilityTestOne.alt} sourceTwo={usabilityTestTwo} altTwo={images.usabilityTestTwo.alt}/>
          <ProjectOverview data={data.projectOverviewThree} />
          <InformationStep data={data.informationStepTwo} orderedList />
          <Image source={affinityDiagram} alt={images.affinityDiagram.alt}/>
          <KeyInsights data={data.keyInsights} />
          <JourneyMap data={data.journeyMap} />
          <Image source={journeyMapDiagram} alt={images.journeyMapDiagram.alt}/>
          <ProjectOverview data={data.projectOverviewFour} />
          <BasicInfo data={data.flowDiagram} />
          <Image source={flowDiagram} alt={images.flowDiagram.alt}/>
          <ProjectOverview data={data.visualDesign} />
          <Image source={sketchesDiagram} alt={images.sketchesDiagram.alt}/>
          <ProjectOverview data={data.projectOverviewDemo} reverse/>
          <Image source={uxDiagramOne} alt={images.uxDiagramOne.alt}/>
          <Image source={uxDiagramTwo} alt={images.uxDiagramTwo.alt}/>
          <Hero video={heroUXVideo} lava={false} fullHeight/>
        </Content>
      </StyledProject> 
    </>
  )
};