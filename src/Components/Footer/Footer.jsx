import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


const StyledFooter = styled.div`
	display: grid; 
	background-color: ${({theme}) => theme.navbar};
	place-items: center;
	padding: 2rem 5rem;
	width: 100vw;
	color: #FFF4D7;

	a {
		color: #FFF4D7;
		text-decoration: inherit;
	}

	.icon {
		color: #FFF4D7;
		width: 20px;
		height: 20px;
		padding-right: 10px;
	}

	.signed {
		display: flex;
		gap: 5px;

		small {
			margin: auto;
		}
	}
`

export const Footer = () => {
	return ( 
		<StyledFooter>
			<div className='footer'>
				<div className='signed'>
					<small>Designed By Kirsten Donnachie</small>
					<a href='https://uk.linkedin.com/in/kirsten-donnachie-23584951'>
						<FontAwesomeIcon icon={faLinkedin} className='icon' />
					</a>
				</div>
				<div className='signed'>
					<small>Developed By Michael Martin</small>
					<a href='https://uk.linkedin.com/in/michael-martin-8899961a4'>
						<FontAwesomeIcon icon={faLinkedin} className='icon' />
					</a>
				</div>
			</div>
		</StyledFooter>
	);
}