import React from 'react';

import './Terapias.css';

const Terapias = () => {
	return (
		<section className="terapias">
			<div className="container">
				<h1>Psicoterapias</h1>
				<h2>Veja as modalidades de atendimento psicológico que oferecemos.</h2>
				<div className="box-terapias">
					<div className="terapia-single">
						<img src={require('../../media/terapia01.png').default} alt="ilustração-terapias" />
						<h2>Psicoterapia <br/>
						Individual</h2>
						<p>Eu irure eu ullamco id.Culpa magna voluptate cillum aute est ea qui dolore mollit.Lorem pariatur aute ex ipsum.Sunt Lorem aliquip non veniam.Eu irure eu ullamco id.Culpa magna voluptate cillum aute est ea qui dolore mollit.Lorem pariatur aute ex ipsum.</p>
						<button>Mais informações...</button>
					</div>
					<div className="terapia-single">
						<img src={require('../../media/terapia02.png').default} alt="ilustração-terapias" />
						<h2>Orientação Psicológica Online</h2>
						<p>Eu irure eu ullamco id.Culpa magna voluptate cillum aute est ea qui dolore mollit.Lorem pariatur aute ex ipsum.Sunt Lorem aliquip non veniam.Eu irure eu ullamco id.Culpa magna voluptate cillum aute est ea qui dolore mollit.Lorem pariatur aute ex ipsum.</p>
						<button>Mais informações...</button>
					</div>
					<div className="terapia-single">
						<img src={require('../../media/terapia03.png').default} alt="ilustração-terapias" />
						<h2>Perícia <br/>
						Psicológica</h2>
						<p>Eu irure eu ullamco id.Culpa magna voluptate cillum aute est ea qui dolore mollit.Lorem pariatur aute ex ipsum.Sunt Lorem aliquip non veniam.Eu irure eu ullamco id.Culpa magna voluptate cillum aute est ea qui dolore mollit.Lorem pariatur aute ex ipsum.</p>
						<button>Mais informações...</button>
					</div>
				</div>
			</div>
			<div id="anchor-blog-posts"></div>
		</section>
	);
}

export default Terapias;