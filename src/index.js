

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Showrats from './components/Showrats';
import SayHello from './components/SayHello';
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Showrats />, document.getElementById('showrats'));
ReactDOM.render(<SayHello />, document.getElementById('root'));
ReactDOM.render(<Footer  />, document.getElementById('footer'));
registerServiceWorker(); 
