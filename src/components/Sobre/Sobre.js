import React from 'react';

import './Sobre.css';

const Sobre = () => {
	const fotoPerfil = require('../../media/fotopsic.jpg').default;

	return (
		<section className="sobre">
			<div className="container">
				<h1>A Psicóloga</h1>
				<h2>Um pouco sobre mim</h2>
				<div className="box-sobre">
					<div className="img-sobre">
						<img src={fotoPerfil} alt="foto-profissional"/>
					</div>
					<div className="text-sobre">
						<h2>Danielle Freire</h2>
						<p>CRP: 000/0<br />
							<br />
							Psicóloga especialista em Terapia Cognitivo-Comportamental.</p>
						<br />
						<p>Minim nisi excepteur cupidatat ut nostrud cillum proident cupidatat consectetur mollit ut ut ut ut veniam. Laboris enim labore aliquip eiusmod et nostrud ut laboris velit sint occaecat nostrud.</p>
						<ul>
							<li>Dolore ut voluptate elit ut aute reprehenderit ut tempor nostrud laborum esse in proident deserunt mollit amet in consequat.</li>
							<li>Lorem ipsum commodo fugiat do dolore do nisi incididunt et irure nulla labore dolor nostrud nostrud veniam voluptate.</li>
							<li>Aute amet in eiusmod quis dolore excepteur deserunt reprehenderit quis anim magna aliqua.</li>
							<li>Esse ex sint aute esse deserunt reprehenderit sunt ut.</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="anchor-terapias"></div>
		</section>
	);
}

export default Sobre;