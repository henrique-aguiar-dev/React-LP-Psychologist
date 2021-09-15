import React from 'react';

import './Menu.css';

const Menu = (props) => {
	return (
		<nav className={props.className}>
			<ul>
				<li><a href="#anchor-sobre">A Psicóloga</a></li>
				<li><a href="#anchor-terapias">Psicoterapias</a></li>
				<li><a href="#anchor-blog-posts">Saúde mental</a></li>
				<li><a href="#anchor-contato">Agende sua consulta</a></li>
			</ul>
		</nav>
	)
}

export default Menu;