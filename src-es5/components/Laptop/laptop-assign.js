'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LaptopAssign = function (_Component) {
  _inherits(LaptopAssign, _Component);

  function LaptopAssign(props) {
    _classCallCheck(this, LaptopAssign);

    var _this = _possibleConstructorReturn(this, (LaptopAssign.__proto__ || Object.getPrototypeOf(LaptopAssign)).call(this, props));

    _this.state = { items: [], laps: [] };
    _this.searchKeyChangeHandler = _this.searchKeyChangeHandler.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    return _this;
  }

  _createClass(LaptopAssign, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchList();
      this.fetchLaptop(this.props.params.id);
      (0, _jquery2.default)(this.refs.selectPicker).selectpicker({
        liveSearch: true
      });
    }
  }, {
    key: 'fetchLaptop',
    value: function fetchLaptop(id) {
      var _this2 = this;

      fetch('http://localhost:5000/api/laptops/' + id).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this2.setState({
          laps: data
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'fetchList',
    value: function fetchList() {
      var _this3 = this;

      var url = 'http://localhost:5000/api/assignees';
      fetch(url).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this3.setState({
          items: data
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'fetchAssignee',
    value: function fetchAssignee() {
      var _this4 = this;

      var url = 'http://localhost:5000/api/assignees/' + this.state.selectpicker;
      fetch(url).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this4.setState({
          assignee_name: data.assignee_name,
          assignee_type: data.assignee_type
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;

      this.setState(_defineProperty({}, name, value));
      this.fetchAssignee();
    }
  }, {
    key: 'searchKeyChangeHandler',
    value: function searchKeyChangeHandler(e) {
      var _this5 = this;

      this.setState({ searchKey: e.target.value });
      console.log('searching..');

      var url = 'http://localhost:5000/api/assignees/search/' + e.target.value;

      if (e.target.value == null || e.target.value.trim() == "") {
        this.fetchList();
      } else {
        fetch(url).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this5.setState({
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

      var optionItems = data.map(function (assignee) {
        return _react2.default.createElement(SelectListItem, { key: assignee.id, assignee: assignee });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'panel panel-primary' },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            'Laptop Details'
          ),
          _react2.default.createElement(
            'table',
            { className: 'table table-bordered' },
            _react2.default.createElement(
              'tbody',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'Brand'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  this.state.laps.brand
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'Model'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  this.state.laps.model
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'Serial'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  this.state.laps.serial_number
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'Physical Condition'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  this.state.laps.physical_condition
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'Assigned To'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  this.state.items.assigned_to
                )
              ),
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  'Assigned On'
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  this.state.laps.assigned_on
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            'New Assignee'
          ),
          _react2.default.createElement(
            'select',
            { className: 'form-control', name: 'selectpicker', ref: 'selectPicker', onChange: this.handleInputChange },
            optionItems
          ),
          _react2.default.createElement(
            'p',
            null,
            'Assign8'
          ),
          _react2.default.createElement(
            'p',
            null,
            this.state.selectpicker
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              'table',
              { className: 'table table-bordered' },
              _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    'New Assignee'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    this.state.assignee_name
                  )
                ),
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    null,
                    'Assignee Type'
                  ),
                  _react2.default.createElement(
                    'td',
                    null,
                    this.state.assignee_type
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group horizontal' },
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'btn btn-success' },
                'Submit'
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/laptops' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-primary' },
                  'Cancel'
                ),
                ' '
              )
            )
          )
        )
      );
    }
  }]);

  return LaptopAssign;
}(_react.Component);

var SelectListItem = function (_React$Component) {
  _inherits(SelectListItem, _React$Component);

  function SelectListItem() {
    _classCallCheck(this, SelectListItem);

    return _possibleConstructorReturn(this, (SelectListItem.__proto__ || Object.getPrototypeOf(SelectListItem)).apply(this, arguments));
  }

  _createClass(SelectListItem, [{
    key: 'render',
    value: function render() {
      var assignee = this.props.assignee;

      return _react2.default.createElement(
        'option',
        { value: assignee.id },
        assignee.assignee_name
      );
    }
  }]);

  return SelectListItem;
}(_react2.default.Component);

;

LaptopAssign.contextTypes = {
  data: _react2.default.PropTypes.object
};

exports.default = LaptopAssign;