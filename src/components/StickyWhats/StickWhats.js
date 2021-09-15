import React from 'react';

import './StickyWhats.css';

const StickyWhats = () => {
	const handleCloseWa = (event) => event.target.parentElement.style.display = 'none'

	return (
		<div className="atend-ws">
			<span onClick={handleCloseWa}>X</span>
			<a target="_blank" href="https://api.whatsapp.com/send?phone=559999999999" rel="noreferrer">
				<i className="fa fa-whatsapp" aria-hidden="true"></i>
				<p>WhatsApp</p>
			</a>
		</div>
	);
}

export default StickyWhats;