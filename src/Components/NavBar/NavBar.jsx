import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Logo } from '../Logo/Logo';
import linkedIn from '../../media/linkedin-icon.svg';


const StyledNav = styled.div`
	display: flex; 
	background-color: ${({theme}) => theme.navbar};
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 5rem 0.5rem 5rem;
	width: 100vw;

	a {
		color: #FFF4D7;
		text-decoration: inherit;

		img {
			width: 22px;
			height: 22px;
		}
	}
`

const StyledNavPages = styled.div`
	display: flex;
  flex-direction: row;
`

// const StyledEmailMe = styled.div`
// 	color: #FFF4D7;
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// 	margin-right: 4rem;
// 	text-transform: uppercase;
// 	cursor: pointer;

// 	&:hover {
//     -webkit-transform:scale(1.2);
// 	}
// `

// const StyledEmailForm = styled.div`
// 	display: flex; 
// 	background-color: ${({theme}) => theme.navbar};
// `

export const NavBar = () => {

	// const [formOpen, setFormOpen] = useState(false);

	// function handleOnClick() { 
	// 	console.info(formOpen);
	// 	setFormOpen(!formOpen)
	// }

	return ( 
		<StyledNav className='navbar-container'>
			<Link to="/">
				<Logo />
			</Link>
			<StyledNavPages className='navbar-info-list'>
				<a href='https://uk.linkedin.com/in/kirsten-donnachie-23584951'><img src={linkedIn} alt='linked in icon'/></a>
			</StyledNavPages>
		</StyledNav>
	);
}