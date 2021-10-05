import React, { forwardRef } from 'react';

import './Menu.css';

const Menu = forwardRef((props, ref) => {
	return (
		<nav ref={ref} className={props.className}>
			<ul>
				<li><a href="#anchor-sobre">A Psicóloga</a></li>
				<li><a href="#anchor-terapias">Psicoterapias</a></li>
				<li><a href="#anchor-blog-posts">Saúde mental</a></li>
				<li><a href="#anchor-contato">Agende sua consulta</a></li>
			</ul>
		</nav>
	)
});

export default Menu;