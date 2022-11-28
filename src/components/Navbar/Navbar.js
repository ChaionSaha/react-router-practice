import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	let activeStyle = {
		color: '#6CB4EE',
	};
	return (
		<nav>
			<NavLink
				to='/'
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				className='link'
			>
				Home
			</NavLink>
			<NavLink
				to='/table-1'
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				className='link'
			>
				Table-1
			</NavLink>
			<NavLink
				to='/table-2'
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				className='link'
			>
				Table-2
			</NavLink>
			<NavLink
				to='/table-3'
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				className='link'
			>
				Table-3
			</NavLink>
		</nav>
	);
};

export default Navbar;
