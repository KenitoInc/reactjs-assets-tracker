'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List(props, context) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props, context));

    _this.state = _this.context.data || window.__INITIAL_STATE__ || { items: [] };
    return _this;
  }

  _createClass(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchList();
    }
  }, {
    key: 'fetchList',
    value: function fetchList() {
      var _this2 = this;

      fetch('http://jsonplaceholder.typicode.com/users').then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.setState({
          items: data
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'demo-list-action mdl-list' },
        this.state.items.map(function (item) {
          return _react2.default.createElement(
            'div',
            { key: item.id, className: 'mdl-list__item' },
            _react2.default.createElement(
              'span',
              { className: 'mdl-list__item-primary-content' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons mdl-list__item-avatar' },
                'person'
              ),
              _react2.default.createElement(
                'span',
                null,
                item.name
              )
            ),
            _react2.default.createElement(
              'a',
              { className: 'mdl-list__item-secondary-action', href: '#' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'star'
              )
            )
          );
        })
      );
    }
  }]);

  return List;
}(_react.Component);

List.contextTypes = {
  data: _react2.default.PropTypes.object
};

exports.default = List;