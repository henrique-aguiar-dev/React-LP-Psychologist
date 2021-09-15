import React from 'react';

import './BlogPosts.css';

const BlogPosts = () => {
	const blogImg = require('../../media/bgterapias.jpg').default;

	return (
		<section className="blog-posts">
			<div className="container">
				<h1>Saúde mental</h1>
				<h2>Blog com notícias, artigos e livros sobre saúde mental e psicologia.</h2>
				<div className="box-blog-posts">
					<div className="blog-posts-single">
						<div className="vr">
							<button>Leia mais...</button>
							<img src={blogImg} alt="post-ilustration" />
						</div>
						<h3>Título do Artigo</h3>
						<span><i className="fa fa-calendar" aria-hidden="true"></i>01/01/2020</span>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, obcaecati fugiat? Assumenda, iure in dolor exercitationem distinctio tempore perspiciatis saepe optio nihil vero accusamus? Suscipit dignissimos corporis officiis quaerat numquam.</p>
					</div>
					<div className="blog-posts-single">
						<div className="vr">
							<button>Leia mais...</button>
							<img src={blogImg} alt="post-ilustration" />
						</div>
						<h3>Título do Artigo</h3>
						<span><i className="fa fa-calendar" aria-hidden="true"></i>01/01/2020</span>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, obcaecati fugiat? Assumenda, iure in dolor exercitationem distinctio tempore perspiciatis saepe optio nihil vero accusamus? Suscipit dignissimos corporis officiis quaerat numquam.</p>
					</div>
					<div className="blog-posts-single">
						<div className="vr">
							<button>Leia mais...</button>
							<img src={blogImg} alt="post-ilustration" />
						</div>
						<h3>Título do Artigo</h3>
						<span><i className="fa fa-calendar" aria-hidden="true"></i>01/01/2020</span>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, obcaecati fugiat? Assumenda, iure in dolor exercitationem distinctio tempore perspiciatis saepe optio nihil vero accusamus? Suscipit dignissimos corporis officiis quaerat numquam.</p>
					</div>
				</div>
			</div>
			<div id="anchor-contato"></div>
		</section>
	);
}

export default BlogPosts;