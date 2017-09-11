'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import LaptopsApp from './laptops-app.js';
//import LaptopList from './components/LaptopList';
// Snag the initial state that was passed from the server side
//var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

//ReactDOM.render(<LaptopList/>, document.getElementById("main"));
_reactDom2.default.render(_react2.default.createElement(_router2.default, null), document.getElementById("main"));