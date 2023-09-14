import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Logo } from '../Logo/Logo';


const StyledNav = styled.div`
	display: flex; 
	background-color: ${({theme}) => theme.navbar};
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 5rem 0.5rem 5rem;
	width: 100vw;
	color: #FFF4D7;

	a {
		color: #FFF4D7;
		text-decoration: inherit;
	}

	.icon {
		color: #FFF4D7;
		width: 25px;
		height: 25px;
		padding-right: 10px;
	}
`

const StyledNavPages = styled.div`
	display: flex;
	flex-direction: row;
`

export const NavBar = () => {
	return ( 
		<StyledNav className='navbar-container'>
			<Link to="/">
				<Logo />
			</Link>
			<StyledNavPages className='navbar-info-list'>
				<a href='https://uk.linkedin.com/in/kirsten-donnachie-23584951'>
					<FontAwesomeIcon icon={faLinkedin} className='icon' />
				</a>
				{/* <a href='https://uk.linkedin.com/in/kirsten-donnachie-23584951'>
					<FontAwesomeIcon icon={faEnvelope} className='icon'/>
				</a> */}
			</StyledNavPages>
		</StyledNav>
	);
}