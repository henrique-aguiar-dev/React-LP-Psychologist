import { createGlobalStyle } from 'styled-components';

import './GlobalFonts.css';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		width: 100%;
		height: 100%;
		font-family: "Verdana", sans-serif;
		scroll-behavior: smooth;
	}

	h1 {
		font-size: 60px;
		font-weight: 700;
		padding: 10px 0;
		text-align: center;
		font-family: "Dancing Script", cursive, "Verdana", sans-serif;
	}

	h2 {
		font-size: 40px;
		font-weight: 400;
		padding: 10px 0;
		text-align: center;
		font-family: "Dancing Script", cursive, "Verdana", sans-serif;
	}

	h3 {
		font-size: 20px;
		padding: 15px 0;
		text-align: center;
		font-family: Verdana, sans-serif;
	}

	p,
	a {
		font-size: 14px;
	}

	section {
		width: 100%;
		padding: 30px 2%;
	}

	.container {
		max-width: 1280px;
		height: 100%;
		margin: 0 auto;
		padding: 0 2%;
	}

	.flexbox {
		width: 100%;
		display: flex;
	}
`