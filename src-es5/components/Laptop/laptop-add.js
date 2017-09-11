'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LaptopAdd = function (_React$Component) {
	_inherits(LaptopAdd, _React$Component);

	function LaptopAdd(props) {
		_classCallCheck(this, LaptopAdd);

		var _this2 = _possibleConstructorReturn(this, (LaptopAdd.__proto__ || Object.getPrototypeOf(LaptopAdd)).call(this, props));

		_this2.state = {};
		_this2.handleSubmit = _this2.handleSubmit.bind(_this2);
		_this2.handleInputChange = _this2.handleInputChange.bind(_this2);

		return _this2;
	}

	_createClass(LaptopAdd, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//this.fetchList(this.props.params.id);
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(event) {
			var target = event.target;
			var value = target.type === 'checkbox' ? target.checked : target.value;
			var name = target.name;

			this.setState(_defineProperty({}, name, value));
		}

		/**
  * Form submission callback.
  */

	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {

			event.preventDefault();
			// Scroll to the top of the page to show the status message.
			document.getElementById('heading').scrollIntoView();
			this.setState({ type: 'info', message: 'Sending...' });
			this.sendFormData();
		}
		/**
   * Submits form data to the web server.
   */

	}, {
		key: 'sendFormData',
		value: function sendFormData() {
			// Prepare form data for submitting it.
			var formData = {
				brand: this.state.brand,
				model: this.state.model,
				serial_number: this.state.serial_number,
				physical_condition: this.state.physical_condition,
				date_of_purchase: this.state.date_of_purchase,
				ms_office_license: this.state.ms_office_license,
				kaspersky_license: this.state.kaspersky_license
			};

			// Send the form data.
			var xmlhttp = new XMLHttpRequest();
			var _this = this;
			xmlhttp.onreadystatechange = function () {

				if (xmlhttp.readyState !== 4) {
					return;
				}
				if (xmlhttp.status === 200) {
					_this.setState({ type: 'success', message: 'Laptop added successfully' });
					_this.clearFormData();
					//browserHistory.push('/laptops');
				} else {
					_this.setState({ type: 'danger', message: 'Insert failed' });
				}
			};
			xmlhttp.open('POST', 'http://localhost:5000/api/laptops/add/one', true);
			xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xmlhttp.send(this.requestBuildQueryString(formData));
			this.setState({ stringquery: this.requestBuildQueryString(formData) });
		}
	}, {
		key: 'requestBuildQueryString',
		value: function requestBuildQueryString(params) {
			var queryString = [];
			for (var property in params) {
				if (params.hasOwnProperty(property)) {
					queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
				}
			}return queryString.join('&');
		}
	}, {
		key: 'clearFormData',
		value: function clearFormData() {
			this.setState({
				brand: null,
				model: null,
				serial_number: null,
				physical_condition: null,
				date_of_purchase: null,
				ms_office_license: null,
				kaspersky_license: null
			});
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.type && this.state.message) {
				var classString = 'alert alert-' + this.state.type;
				var status = _react2.default.createElement(
					'div',
					{ id: 'status', className: classString, ref: 'status' },
					this.state.message
				);
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ id: 'heading', className: 'panel-heading' },
					_react2.default.createElement(
						'h3',
						null,
						'Add Laptop'
					)
				),
				status,
				_react2.default.createElement(
					'form',
					{ onSubmit: this.handleSubmit },
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement('input', { type: 'hidden', className: 'form-control',
							name: 'id', value: this.state.id }),
						_react2.default.createElement(
							'label',
							{ htmlFor: 'brand' },
							'Brand'
						),
						_react2.default.createElement('input', { type: 'text', required: true, className: 'form-control',
							name: 'brand', onChange: this.handleInputChange })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'model' },
							'Model'
						),
						_react2.default.createElement('input', { type: 'text', required: true, className: 'form-control',
							name: 'model', onChange: this.handleInputChange })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'serial_number' },
							'Serial Number'
						),
						_react2.default.createElement('input', { type: 'text', required: true, className: 'form-control',
							name: 'serial_number', onChange: this.handleInputChange })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'physical_condition' },
							'Physical Condition'
						),
						_react2.default.createElement('input', { type: 'text', required: true, className: 'form-control',
							name: 'physical_condition', onChange: this.handleInputChange })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'date_of_purchase' },
							'Date of Purchase'
						),
						_react2.default.createElement('input', { type: 'text', required: true, className: 'form-control',
							name: 'date_of_purchase', onChange: this.handleInputChange })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'ms_office_license' },
							'MS Office Key'
						),
						_react2.default.createElement('input', { type: 'text', className: 'form-control',
							name: 'ms_office_license', onChange: this.handleInputChange })
					),
					_react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ htmlFor: 'kaspersky_license' },
							'Kaspersky Key'
						),
						_react2.default.createElement('input', { type: 'text', className: 'form-control',
							name: 'kaspersky_license', onChange: this.handleInputChange })
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
			);
		}
	}]);

	return LaptopAdd;
}(_react2.default.Component);

;

module.exports = LaptopAdd;