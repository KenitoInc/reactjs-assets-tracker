'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _appRoot = require('./app-root');

var _appRoot2 = _interopRequireDefault(_appRoot);

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

var _test = require('./components/test');

var _test2 = _interopRequireDefault(_test);

var _about = require('./components/about');

var _about2 = _interopRequireDefault(_about);

var _notfound = require('./components/Common/notfound');

var _notfound2 = _interopRequireDefault(_notfound);

var _laptops = require('./components/Laptop/laptops');

var _laptops2 = _interopRequireDefault(_laptops);

var _laptopView = require('./components/Laptop/laptop-view');

var _laptopView2 = _interopRequireDefault(_laptopView);

var _laptopEdit = require('./components/Laptop/laptop-edit');

var _laptopEdit2 = _interopRequireDefault(_laptopEdit);

var _laptopAdd = require('./components/Laptop/laptop-add');

var _laptopAdd2 = _interopRequireDefault(_laptopAdd);

var _laptopAssign = require('./components/Laptop/laptop-assign');

var _laptopAssign2 = _interopRequireDefault(_laptopAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppRouter = function AppRouter() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _appRoot2.default },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/phones', component: _home2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/laptops', component: _laptops2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/laptops/:id', component: _laptopView2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/laptops/edit/:id', component: _laptopEdit2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/laptops/add/one', component: _laptopAdd2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/laptops/assign/:id', component: _laptopAssign2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/branch', component: _about2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/audit', component: _test2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _about2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: _notfound2.default })
    )
  );
};
//import Laptops from './components/LaptopList/index';
exports.default = AppRouter;