import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Calculator} from './Components';

import {Main} from './App.styled';

function App() {
  return (
    <div className="App">
	  <Main>
	    <Calculator />
	  </Main>
    </div>
  );
}

export default App;
