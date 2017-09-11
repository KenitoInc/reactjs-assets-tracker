'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppRoot = function (_Component) {
  _inherits(AppRoot, _Component);

  function AppRoot() {
    _classCallCheck(this, AppRoot);

    return _possibleConstructorReturn(this, (AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).apply(this, arguments));
  }

  _createClass(AppRoot, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'nav',
          { className: 'navbar navbar-inverse' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
              'div',
              { className: 'navbar-header' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                _react2.default.createElement(
                  'span',
                  { className: 'navbar-brand' },
                  'Living Goods'
                )
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'nav navbar-nav' },
              _react2.default.createElement(
                'li',
                { className: 'active' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/' },
                  'Home'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/audit' },
                  'Audit Trail'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/about' },
                  'About'
                )
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'nav navbar-nav navbar-right' },
              _react2.default.createElement('span', { id: 'user_name' }),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/' },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-in' }),
                  ' Login'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-3' },
            _react2.default.createElement(
              'ul',
              { className: 'nav nav-tabs nav-stacked', 'data-spy': 'affix', 'data-offset-top': '195' },
              _react2.default.createElement(
                'li',
                { className: 'active' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/' },
                  'Home'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/phones' },
                  'Phones'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/laptops' },
                  'Laptops'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/branch' },
                  'Branches'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/audit' },
                  'Audit'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/about' },
                  'About'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-9' },
            this.props.children
          )
        )
      );
    }
  }]);

  return AppRoot;
}(_react.Component);

exports.default = AppRoot;