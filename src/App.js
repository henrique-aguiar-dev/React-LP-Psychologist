import React from 'react';

import Header from './components/Header/Header';
import Headline from './components/Headline/Headline';
import Sobre from './components/Sobre/Sobre';
import Terapias from './components/Terapias/Terapias';

import GlobalStyles from './global/GlobalStyles';
import './global/custom-font-awesome.css';



function App() {
  return (
		<>
			<GlobalStyles />
    	<Header />
			<Headline />
			<Sobre />
			<Terapias />
		</>
  );
}

export default App;
