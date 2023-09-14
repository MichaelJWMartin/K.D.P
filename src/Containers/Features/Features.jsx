import React from 'react'
import styled from 'styled-components';
import { Feature } from '../../Components';
import imageOne from '../../media/ux-design1.png';
import imageTwo from '../../media/CCL-2023-pg-4.png';
import data from '../../data';

const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 0 1rem 4rem 1rem;
`

const StyledTitle = styled.h1`
  margin: auto;
  padding-bottom: 3rem;
`


export const Features = ({heading}) => {
  return (
    <>
      <StyledFeatures>
        <StyledTitle>
          {heading}
        </StyledTitle>
        {/*ADD A MAPPER HERE INSTEAD OF INDIVIDUAL COMPONENTS*/}
        <Feature data={data.featureOne} image={imageOne} />
        <Feature data={data.featureTwo} image={imageTwo}/>
        {/* <Feature title={title} para={para} image={image} topic={topic} path='' /> */}
      </StyledFeatures>
    </>
  );
}