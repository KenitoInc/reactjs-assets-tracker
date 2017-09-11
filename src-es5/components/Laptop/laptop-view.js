'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LaptopView = function (_React$Component) {
				_inherits(LaptopView, _React$Component);

				function LaptopView(props) {
								_classCallCheck(this, LaptopView);

								//props = props || this.state;
								var _this = _possibleConstructorReturn(this, (LaptopView.__proto__ || Object.getPrototypeOf(LaptopView)).call(this, props));

								_this.state = { items: [] };

								return _this;
				}

				_createClass(LaptopView, [{
								key: 'componentDidMount',
								value: function componentDidMount() {
												this.fetchList(this.props.params.id);
								}
				}, {
								key: 'fetchList',
								value: function fetchList(id) {
												var _this2 = this;

												fetch('http://localhost:5000/api/laptops/' + id).then(function (res) {
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
																																				this.state.items.brand
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
																																				this.state.items.model
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
																																				this.state.items.serial_number
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
																																				this.state.items.physical_condition
																																)
																												),
																												_react2.default.createElement(
																																'tr',
																																null,
																																_react2.default.createElement(
																																				'td',
																																				null,
																																				'Date of Purchase'
																																),
																																_react2.default.createElement(
																																				'td',
																																				null,
																																				this.state.items.date_of_purchase
																																)
																												),
																												_react2.default.createElement(
																																'tr',
																																null,
																																_react2.default.createElement(
																																				'td',
																																				null,
																																				'MS Office Key'
																																),
																																_react2.default.createElement(
																																				'td',
																																				null,
																																				this.state.items.ms_office_license
																																)
																												),
																												_react2.default.createElement(
																																'tr',
																																null,
																																_react2.default.createElement(
																																				'td',
																																				null,
																																				'Kaspersky Key'
																																),
																																_react2.default.createElement(
																																				'td',
																																				null,
																																				this.state.items.kaspersky_license
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
																																				this.state.items.assigned_on
																																)
																												)
																								)
																				),
																				_react2.default.createElement(
																								'div',
																								{ className: 'form-group horizontal' },
																								_react2.default.createElement(
																												_reactRouter.Link,
																												{ to: '/laptops/edit/' + this.state.items.id },
																												_react2.default.createElement(
																																'button',
																																{ className: 'btn btn-success' },
																																'Edit'
																												),
																												' '
																								),
																								_react2.default.createElement(
																												_reactRouter.Link,
																												{ to: '/laptops/delete/' + this.state.items.id },
																												_react2.default.createElement(
																																'button',
																																{ className: 'btn btn-danger' },
																																'Delete'
																												),
																												' '
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
												);
								}
				}]);

				return LaptopView;
}(_react2.default.Component);

;

module.exports = LaptopView;