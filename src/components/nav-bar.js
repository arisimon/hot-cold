import React from 'react';

import './nav-bar.css';

export default function NavBar(props) {
	return (
		<nav>
			<ul className='clearfix'>
				<li>
					<a className='what' href='#what'>
					What
					</a>
				</li>
				<li>
					<a className='new' href='#feedback' onClick={() => props.onRestartGame()} >
					+ New game
					</a>
				</li>
			</ul>
		</nav>
		);
}