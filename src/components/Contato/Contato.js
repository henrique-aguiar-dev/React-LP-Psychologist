import React from 'react';

import './Contato.css';

const Contato = () => {
	return (
		<section className="contato">
			<h1>Agende sua consulta</h1>
			<h2>Entre em contato por telefone, Whatsapp, ou pelo formulário abaixo.</h2>
			<div className="container">
				<div className="box-contato">
					<div className="contato">
						<h2>Danielle Freire, Psicóloga.</h2>
						<p>Sit duis ipsum magna anim proident ex laborum fugiat irure elit tempor duis ipsum aute. Adipisicing est quis anim quis non reprehenderit.</p>
						<p>ENDEREÇO:<br />
							Rua Lorem Ipsum, nº 999. Silor Domor.<br />
							Fugiat-MA. CEP: 99.999-999</p>
						<p><i className="fa fa-phone" aria-hidden="true"></i>TELEFONE: (99)0000-0000</p>
						<p><i className="fa fa-whatsapp" aria-hidden="true"></i>WHATSAPP: (99)99999-9999</p>
						<p><i className="fa fa-envelope" aria-hidden="true"></i>E-mail: <a target="_blank" href="mailto:contato@psicologa.br" rel="noreferrer">contato@psicologa.psi</a></p>
					</div>
					<div className="contato">
						<h2>Envie uma mensagem...</h2>
						<form id="agend" method="POST" action="">
							<input className="form nome" type="text" name="nome" placeholder="Seu nome..." required />
							<input className="form email" type="email" name="email" placeholder="Seu e-mail..." required />
							<input className="form tel" id="fone" type="tel" maxlength="14" minlength="13" name="telefone" placeholder="Telefone p/ contato..." />
							<textarea className="form msg" name="mensagem" placeholder="Sua mensagem..." required ></textarea>
							<div className="alert-submit">
								<p id="msg-sended">Mensagem enviada com sucesso! Responderemos em breve.</p>
								<p id="msg-error">Erro: mensagem NÃO enviada. Favor conferir os dados informados ou tente novamente mais tarde.</p>
							</div>
							<input type="submit" value="Enviar" id="send" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contato;