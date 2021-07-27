import React from 'react';
import Tilt from 'react-tilt';
import Face from './Face.jpg';
import './Logo.css';

const Logo = () => {
	return (
		<div>
			<Tilt
				className='Tilt br2 shadow-2'
				options={{ max: 35 }}
				style={{ height: 250, width: 250 }}
			>
				<span role='img' aria-label='Face'>
					<img src={Face} alt='Logo' width='auto' height='250px' />
				</span>
			</Tilt>
		</div>
	);
};

export default Logo;
