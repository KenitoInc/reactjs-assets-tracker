'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactPaginate = require('react-paginate');

var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Laptops = function (_Component) {
  _inherits(Laptops, _Component);

  function Laptops(props, context) {
    _classCallCheck(this, Laptops);

    var _this = _possibleConstructorReturn(this, (Laptops.__proto__ || Object.getPrototypeOf(Laptops)).call(this, props, context));

    _this.handlePageClick = function (data) {
      var selected = data.selected;
      var offset = Math.ceil(selected * _this.state.pageLength);

      _this.setState({ offset: offset }, function () {
        _this.fetchList();
      });
    };

    _this.state = _this.context.data || window.__INITIAL_STATE__ || { items: [] };
    _this.state.offset = 0;
    _this.state.pageLength = 10;
    _this.searchKeyChangeHandler = _this.searchKeyChangeHandler.bind(_this);
    _this.handlePageClick = _this.handlePageClick.bind(_this);
    _this.setTotalLaptops();
    return _this;
  }

  _createClass(Laptops, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setTotalLaptops();
      this.fetchList();
    }
  }, {
    key: 'fetchList',
    value: function fetchList() {
      var _this2 = this;

      var url = 'http://localhost:5000/api/laptops/paged?limit=' + this.state.pageLength + '&offset=' + this.state.offset;
      fetch(url).then(function (res) {
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
    key: 'setTotalLaptops',
    value: function setTotalLaptops() {
      var _this3 = this;

      fetch('http://localhost:5000/api/laptops').then(function (res) {
        return res.json();
      }).then(function (data) {
        _this3.setState({
          pageCount: Math.ceil(data.length / _this3.state.pageLength)
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'searchKeyChangeHandler',
    value: function searchKeyChangeHandler(e) {
      var _this4 = this;

      this.setState({ searchKey: e.target.value });
      console.log('searching..');

      var url = 'http://localhost:5000/api/laptops/search/' + e.target.value;

      if (e.target.value == null || e.target.value.trim() == "") {
        this.fetchList();
      } else {
        fetch(url).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this4.setState({
            items: data
          });
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.items;
      var listItems = data.map(function (laptop) {
        return _react2.default.createElement(LaptopListItem, { key: laptop.id, laptop: laptop });
      });

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-8' },
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement('input', { type: 'text', className: 'form-control', value: this.state.searchKey, onChange: this.searchKeyChangeHandler, ref: 'myInput' }),
              _react2.default.createElement(
                'div',
                { className: 'input-group-btn' },
                _react2.default.createElement(
                  'span',
                  { className: 'btn btn-default' },
                  _react2.default.createElement('i', { className: 'glyphicon glyphicon-search' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/laptops/add/one' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-success' },
            'Add New Laptop'
          ),
          ' '
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement(
            'table',
            { className: 'table table-bordered' },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  null,
                  'ID'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Brand'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Model'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'serial Number'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Condition'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Purchase Date'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'View'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Edit'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Delete'
                ),
                _react2.default.createElement(
                  'th',
                  null,
                  'Assign'
                )
              )
            ),
            _react2.default.createElement(
              'tbody',
              null,
              listItems
            )
          ),
          _react2.default.createElement(_reactPaginate2.default, { previousLabel: "previous",
            nextLabel: "next",
            breakLabel: _react2.default.createElement(
              'a',
              { href: '' },
              '...'
            ),
            breakClassName: "break-me",
            pageCount: this.state.pageCount,
            marginPagesDisplayed: 2,
            pageRangeDisplayed: 5,
            onPageChange: this.handlePageClick,
            containerClassName: "pagination",
            subContainerClassName: "pages pagination",
            activeClassName: "active" })
        )
      );
    }
  }]);

  return Laptops;
}(_react.Component);

var LaptopListItem = function (_React$Component) {
  _inherits(LaptopListItem, _React$Component);

  function LaptopListItem() {
    _classCallCheck(this, LaptopListItem);

    return _possibleConstructorReturn(this, (LaptopListItem.__proto__ || Object.getPrototypeOf(LaptopListItem)).apply(this, arguments));
  }

  _createClass(LaptopListItem, [{
    key: 'render',
    value: function render() {
      var laptop = this.props.laptop;

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          laptop.id
        ),
        _react2.default.createElement(
          'td',
          null,
          laptop.brand
        ),
        _react2.default.createElement(
          'td',
          null,
          laptop.model
        ),
        _react2.default.createElement(
          'td',
          null,
          laptop.serial_number
        ),
        _react2.default.createElement(
          'td',
          null,
          laptop.physical_condition
        ),
        _react2.default.createElement(
          'td',
          null,
          laptop.date_of_purchase
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/laptops/' + laptop.id, className: 'btn btn-default btn-sm' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-pencil' }),
            ' View'
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/laptops/edit/' + laptop.id, className: 'btn btn-default btn-sm' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-pencil' }),
            ' Edit'
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-default btn-sm' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-remove' }),
            ' Delete'
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/laptops/assign/' + laptop.id, className: 'btn btn-default btn-sm' },
            _react2.default.createElement('span', { className: 'glyphicon glyphicon-pencil' }),
            ' Assign'
          )
        )
      );
    }
  }]);

  return LaptopListItem;
}(_react2.default.Component);

;

Laptops.contextTypes = {
  data: _react2.default.PropTypes.object
};

exports.default = Laptops;