'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _router = require('../router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//var LaptopList = React.createFactory(require('../components/LaptopList/index.js'));

require('isomorphic-fetch');
require('es6-promise').polyfill();

var routes = (0, _reactRouter.createRoutes)((0, _router2.default)());

var DataProvider = function (_Component) {
  _inherits(DataProvider, _Component);

  function DataProvider() {
    _classCallCheck(this, DataProvider);

    return _possibleConstructorReturn(this, (DataProvider.__proto__ || Object.getPrototypeOf(DataProvider)).apply(this, arguments));
  }

  _createClass(DataProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { data: this.props.data };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouter.RouterContext, this.props);
    }
  }]);

  return DataProvider;
}(_react.Component);

DataProvider.propTypes = {
  data: _react2.default.PropTypes.object
};
DataProvider.childContextTypes = {
  data: _react2.default.PropTypes.object
};

/*eslint-disable*/
var router = _express2.default.Router();
/*eslint-enable*/

/* GET home page. */
router.get('/', function (req, res) {
  (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var content = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
      res.render('home', { title: 'Express', data: false, content: content });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

router.get('/home', function (req, res) {
  (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var content = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
      res.render('home', { title: 'Express', data: false, content: content });
    } else {
      res.status(404).send('Not Found');
    }
  });
});
router.get('/list', function (req, res) {
  (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      (0, _request2.default)('http://jsonplaceholder.typicode.com/users', function (error, response, body) {
        var data = { items: JSON.parse(body) };
        var content = (0, _server.renderToString)(_react2.default.createElement(DataProvider, _extends({}, renderProps, { data: data })));
        res.render('home', { markup: content });
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

router.get('/laptops', function (req, res) {
  (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      (0, _request2.default)('http://localhost:5000/api/laptops/paged?limit=10&offset=0', function (error, response, body) {
        var data = { items: JSON.parse(body) };
        var content = (0, _server.renderToString)(_react2.default.createElement(DataProvider, _extends({}, renderProps, { data: data })));
        res.render('home', { markup: content });
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

router.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var content = (0, _server.renderToString)(_react2.default.createElement(DataProvider, renderProps));
      res.render('home');
    } else {
      res.status(404).send('Not Found');
    }
  });
});

module.exports = router;