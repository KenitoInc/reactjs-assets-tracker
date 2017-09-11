import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';

//import LaptopsApp from './laptops-app.js';
//import LaptopList from './components/LaptopList';
// Snag the initial state that was passed from the server side
//var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

//ReactDOM.render(<LaptopList/>, document.getElementById("main"));
ReactDOM.render(<AppRouter/>, document.getElementById("main"));
