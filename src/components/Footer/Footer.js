import React from 'react';

import SocialIcons from '../SocialIcons/SocialIcons';

import './Footer.css';

const Footer = () => {
	return (
		<section className="footer">
			<div className="container">
				<div className="box-footer">
					<div className="footer-single">
						<h2>Redes sociais</h2>
						<SocialIcons class={"sm-icons-footer"} />
					</div>
					<div className="footer-single">
						<h2>Links úteis</h2>
						<ul>
							<li><a target="_blank" href="https://www.cvv.org.br/" rel="noreferrer">CVV - Centro de Valorização da Vida</a></li>
							<li><a target="_blank" href="https://site.cfp.org.br/" rel="noreferrer">Conselho Federal de Psicologia</a></li>
							<li><a target="_blank" href="http://www.crp11.org.br/" rel="noreferrer">Conselho Regional de Psicologia 11ª Região (CE)</a></li>
						</ul>
					</div>
				</div>
				<span><p>Desenvolvido por: Henrique, L.<br />
					Baseado no tema: Mise-Wp-Theme- Por <a target="_blank" href='https://crestaproject.com' rel="noreferrer">CrestaProject;</a> Imagens de fundo: <a target="_blank" href='https://pixabay.com/' rel="noreferrer">pixabay.com</a>; Vetores criados por: <a target="_blank" href='https://br.freepik.com' rel="noreferrer">rawpixel.com - br.freepik.com</a>; Ícones de <a target="_blank" href="https://fontawesome.com/" rel="noreferrer">FontAwesome</a></p></span>
			</div>
		</section>
	);
}

export default Footer;