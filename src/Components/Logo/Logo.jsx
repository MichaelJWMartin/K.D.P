import React from 'react'
//import logo file

export const Logo = ({className = ''}) => {
	const logo = false;
	return (
		logo ? 
		<img src={logo} alt='logo'/> : 
		<h3 className={className}>KD</h3>
	);
}
 